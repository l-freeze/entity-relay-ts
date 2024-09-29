import {FirstScreeningPassedPerson} from "@/Domain/Entity/FirstScreeningPassedPerson";
import {EntryPerson} from "@/Domain/Entity/EntryPerson";

/**
 * 一次選考
 */
export class FirstSelection {
    static exec(
        person: EntryPerson
    ): FirstScreeningPassedPerson {
        return FirstScreeningPassedPerson.fromEntryPerson(person);
    }
}