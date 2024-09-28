import {EntryPerson} from "@/Domain/Entity/EntryPerson";
import {SecondScreeningPassedPerson} from "@/Domain/Entity/SecondScreeningPassedPerson";

/**
 * 二次選考
 */
export class SecondSelection {
    static create(
        person: EntryPerson
    ): SecondScreeningPassedPerson {
        return SecondScreeningPassedPerson.fromFirstScreeningPassedPerson(person);
    }
}