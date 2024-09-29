import { Person } from '@/Domain/Entity/Person';
import {SecondScreeningPassedPerson} from "@/Domain/Entity/SecondScreeningPassedPerson";
import {Uuid} from "@/Domain/Value/Uuid";
import {Name} from "@/Domain/Value/Name";
import {Age} from "@/Domain/Value/Age";
import {Address} from "@/Domain/Value/Address";
import {EducationalBackground} from "@/Domain/Value/EducationalBackground";
import {PR} from "@/Domain/Value/PR";
export class FinalScreeningPassedPerson {

    #uuid: Uuid;
    #name: Name;
    #age: Age;
    #address: Address;
    #educationalBackground: EducationalBackground;
    #pr: PR;

    constructor(
        uuid: Uuid,
        name: Name,
        age: Age,
        address: Address,
        educationalBackground: EducationalBackground,
        pr: PR
    ) {
        this.#uuid = uuid;
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.#educationalBackground = educationalBackground;
        this.#pr = pr;
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

    static create(
        uuid: Uuid,
        name: Name,
        age: Age,
        address: Address,
        educationalBackground: EducationalBackground,
        pr: PR

    ): FinalScreeningPassedPerson {
        return new FinalScreeningPassedPerson(uuid, name, age, address, educationalBackground, pr);
    }

    static fromSecondScreeningPassedPerson(person: SecondScreeningPassedPerson): FinalScreeningPassedPerson {
        return FinalScreeningPassedPerson.create(
            person.uuid,
            person.name,
            person.age,
            person.address,
            person.educationalBackground,
            person.pr
        );
    }
}