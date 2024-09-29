import {SecondScreeningPassedPerson} from "@/Domain/Entity/SecondScreeningPassedPerson";
import {FirstScreeningPassedPerson} from "@/Domain/Entity/FirstScreeningPassedPerson";

/**
 * 二次選考
 */
export class SecondSelection {
    static exec(
        person: FirstScreeningPassedPerson
    ): SecondScreeningPassedPerson {
        return SecondScreeningPassedPerson.fromFirstScreeningPassedPerson(person);
    }
}