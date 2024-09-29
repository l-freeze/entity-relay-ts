import {Sei} from "@/Domain/Value/Sei";
import {Mei} from "@/Domain/Value/Mei";

export class Name {
    private constructor(
        public readonly sei: Sei,
        public readonly mei: Mei
    ) {
    }

    get fullName(): string {
        return this.sei.value + this.mei.value;
    }


    static create(sei: Sei, mei: Mei): Name {
        return new Name(sei, mei);
    }
}