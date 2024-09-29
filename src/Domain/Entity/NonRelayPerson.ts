import { Address } from '@/Domain/Value/Address';
import { Name } from '@/Domain/Value/Name';
import {Age} from "@/Domain/Value/Age";
import {EducationalBackground} from "@/Domain/Value/EducationalBackground";
import {PR} from "@/Domain/Value/PR";
import {Uuid} from "@/Domain/Value/Uuid";
export class NonRelayPerson {

    #uuid: Uuid;
    #name: Name;
    #age: Age;
    #address: Address;
    #educationalBackground: EducationalBackground;
    #pr: PR;

    #stage: number;

    constructor(
        uuid: Uuid,
        name: Name,
        age: Age,
        address: Address,
        educationalBackground: EducationalBackground,
        pr: PR,
        stage: number
    ) {
        this.#uuid = uuid;
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.#educationalBackground = educationalBackground;
        this.#pr = pr;
        this.#stage = stage;
    }

    get uuid(): Uuid {
        return this.#uuid;
    }
    get name(): Name {
        return this.#name;
    }

    get age(): Age {
        return this.#age;
    }

    get address(): Address {
        return this.#address;
    }

    get educationalBackground(): EducationalBackground {
        return this.#educationalBackground;
    }

    get pr(): PR {
        return this.#pr;
    }

    get stage(): number {
        return this.#stage;
    }

    get statusName(): string {
        switch (this.#stage) {
            case 0:
                return '未エントリー';
            case 1:
                return 'エントリー済み';
            case 2:
                return '1次選考通過';
            case 3:
                return '2次選考通過';
            case 4:
                return '採用';
            default:
                return '不明';
        }
    }

    entry(): void {
        if (this.#stage !== 0) {
            throw new Error('エントリー済みです。');
        }
        this.#stage = 1;
    }

    firstScreening(): void {
        if (this.#stage !== 1) {
            throw new Error('採用応募受付していません');
        }
        this.#stage = 2;
    }

    secondScreening(): void {
        if (this.#stage !== 2) {
            throw new Error('1次選考を通過していません');
        }
        this.#stage = 3;
    }

    finalScreening(): void {
        if (this.#stage !== 3) {
            throw new Error('2次選考を通過していません');
        }
        this.#stage = 4;
    }

    static create(
        uuid: Uuid,
        name: Name,
        age: Age,
        address: Address,
        educationalBackground: EducationalBackground,
        pr: PR,
        stage: number
    ): NonRelayPerson {
        return new NonRelayPerson(uuid, name, age, address, educationalBackground, pr, stage);
    }
}
