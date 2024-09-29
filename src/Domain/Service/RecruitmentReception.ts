import {Person} from "@/Domain/Entity/Person";
import {EntryPerson} from "@/Domain/Entity/EntryPerson";

/**
 * 応募受付
 */
export class RecruitmentReception {
    static exec(person: Person): EntryPerson {
        return EntryPerson.create(
            person.uuid,
            person.name,
            person.age,
            person.address,
            person.educationalBackground,
            person.pr
        );
    }
}