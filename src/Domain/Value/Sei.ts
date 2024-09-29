export class Sei{
    private constructor(
        readonly value: string
    ) {}

    static create(value: string): Sei {
        if (value.length < 1 || value.length > 255) {
            throw new Error('The value must be between 1 and 255 characters.');
        }
        return new Sei(value);
    }
}