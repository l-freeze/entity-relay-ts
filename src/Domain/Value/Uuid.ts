import {} from 'ulid';
export class Uid {
    private constructor(
        readonly value: string
    ) {}

    static new(): Uid {
        return new Uid(uuid7());
    }
}