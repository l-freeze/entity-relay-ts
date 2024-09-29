export class PR {
    private constructor(
        readonly value: string
    ) {}

    static create(value: string): PR {
        if (value.length < 1 || value.length > 1000) {
            throw new Error('The value must be between 1 and 1000 characters.');
        }
        return new PR(value);
    }
}