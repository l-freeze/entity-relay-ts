import { ulid } from 'ulid';
export class Uuid {
    private constructor(
        readonly value: string
    ) {}

    static new(): Uuid {
        return new Uuid(ulid());
    }
    static create(value: string): Uuid {
        if (value.length != 26) {
            throw new Error('Invaid Ulid.');
        }
        return new Uuid(value);
    }
}