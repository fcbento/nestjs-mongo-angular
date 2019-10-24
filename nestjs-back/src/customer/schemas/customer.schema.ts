import * as mongoose from 'mongoose';
import * as validator from 'validator';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash';

export const CustomerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

    last_name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Not a valid email'
        }
    },

    phone: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },

    document: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
    },

    description: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

    created_at: {
        type: Date,
        default: Date.now
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },

    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]

});

CustomerSchema.pre('save', function(next) {
    let user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

CustomerSchema.statics.findByToken = function(token) {
    var decoded;
    let user = this;

    try {
        decoded = jwt.verify(token, 'poijasdf98435jpgfdpoij3');
    } catch (e) {
        return Promise.reject();
    }

    return user.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

CustomerSchema.methods.removeToken = (token) => {
    return this.update({
        $pull: {
            tokens: { token }
        }
    });
};

CustomerSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({ _id: user._id.toHexString(), access }, 'poijasdf98435jpgfdpoij3').toString();

    user.tokens.push({ access, token });

    return user.save().then(() => {
        return token;
    });
};

CustomerSchema.statics.findByCredentials = function (email, password) {
    var User = this;

    return User.findOne({ email }).then((user) => {
        if (!user) {
            return Promise.reject();
        }

        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                    resolve(user);
                } else {
                    reject();
                }
            });
        });
    });
};

CustomerSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'name', 'last_name', 'password', 'email', 'phone', 'document', 'description', 'created_at']);
};