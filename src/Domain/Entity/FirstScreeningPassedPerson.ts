import { Person } from '@/Domain/Entity/Person';
export class FirstPcreeningPassedPerson {
    #person: Person;
    constructor(person: Person) {
        this.#person = person;
    }
    static create(person: Person): FirstPcreeningPassedPerson {
        return new FirstPcreeningPassedPerson(person);
    }
}