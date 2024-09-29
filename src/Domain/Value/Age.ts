export class Age {
    private constructor(
        readonly value: number
    ) {}

    static create(value: number): Age {
        if (value < 18 || value > 55) {
            throw new Error('The value must be between 1 and 255 characters.');
        }
        return new Age(value);
    }
}