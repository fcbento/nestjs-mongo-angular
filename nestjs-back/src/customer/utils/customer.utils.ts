
export default function CheckDuplicated(value: string) {

    if (value.includes('email')) {
        return 'Email already registered';
    }

    if (value.includes('phone')) {
        return 'Phone already registered';
    }

    if (value.includes('document')) {
        return 'Document already registered';
    }
}