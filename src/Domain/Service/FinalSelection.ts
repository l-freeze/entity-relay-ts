import {SecondScreeningPassedPerson} from "@/Domain/Entity/SecondScreeningPassedPerson";
import {FinalScreeningPassedPerson} from "@/Domain/Entity/FinalScreeningPassedPerson";

/**
 * 最終選考
 */
export class FinalSelection {
    static exec(
        person: SecondScreeningPassedPerson
    ): FinalScreeningPassedPerson {
        return FinalScreeningPassedPerson.fromSecondScreeningPassedPerson(person);
    }
}