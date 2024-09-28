import { Person } from '@/Domain/Entity/Person';
export class FirstScreeningPassedPerson {
    #person: Person;
    constructor(person: Person) {
        this.#person = person;
    }
    static create(person: Person): FirstScreeningPassedPerson {
        return new FirstScreeningPassedPerson(person);
    }
}