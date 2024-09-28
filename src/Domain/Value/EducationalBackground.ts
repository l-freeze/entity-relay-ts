export class Address {
    private constructor(
        readonly value: string
    ) {}

    public static create(value: string): Address {
        if (value.length < 1 || value.length > 255) {
            throw new Error('The value must be between 1 and 255 characters.');
        }
        return new Address(value);
    }
}