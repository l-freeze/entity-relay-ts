import { match, P } from 'ts-pattern';

import {Person} from "@/Domain/Entity/Person";
import {Name} from "@/Domain/Value/Name";
import {Address} from "@/Domain/Value/Address";
import {Sei} from "@/Domain/Value/Sei";
import {Mei} from "@/Domain/Value/Mei";
import {Age} from "@/Domain/Value/Age";
import {EducationalBackground} from "@/Domain/Value/EducationalBackground";
import {RecruitmentReception} from "@/Domain/Service/RecruitmentReception";
import {Uuid} from "@/Domain/Value/Uuid";
import {PR} from "@/Domain/Value/PR";
import {FirstSelection} from "@/Domain/Service/FirstSelection";
import {SecondSelection} from "@/Domain/Service/SecondSelection";
import {FinalSelection} from "@/Domain/Service/FinalSelection";
import {EntryPerson} from "@/Domain/Entity/EntryPerson";
import {FirstScreeningPassedPerson} from "@/Domain/Entity/FirstScreeningPassedPerson";
import {SecondScreeningPassedPerson} from "@/Domain/Entity/SecondScreeningPassedPerson";
import {FinalScreeningPassedPerson} from "@/Domain/Entity/FinalScreeningPassedPerson";
import {NonRelayPerson} from "@/Domain/Entity/NonRelayPerson";

/**
 * 選考状況確認関数
 */
const stageName = (input: Input): string => {
    return match<Input>(input)
        .with({ person: P.instanceOf(EntryPerson) }, () => {
            return 'エントリー済み';
        })
        .with({ person: P.instanceOf(FirstScreeningPassedPerson) }, () => {
            return '一次選考通過';
        })
        .with({ person: P.instanceOf(SecondScreeningPassedPerson) }, () => {
            return '二次選考通過';
        })
        .with({ person: P.instanceOf(FinalScreeningPassedPerson) }, () => {
            return '三次選考通過';
        })
        .exhaustive();
};

/**
 * 応募情報
 */
const person = Person.create(
    Uuid.new(),
    Name.create(
        Sei.create('猫貸し'),
        Mei.create('太郎')
    ),
    Age.create(20),
    Address.create('東京都渋谷区'),
    EducationalBackground.create('三毛猫中学卒業/白黒猫専修学校卒業/ボス猫大学卒業/ネコ大学院修了'),
    PR.create('ライオンは大きな猫です。。')
);

/**
 * エントリー
 */
const entryPerson = RecruitmentReception.exec(person);
console.log('リレー版');
console.log(stageName({person:entryPerson}));

/**
 * 一次選考
 */
const firstScreeningPassedPerson = FirstSelection.exec(entryPerson);
console.log(stageName({person:firstScreeningPassedPerson}));

/**
 * 二次選考
 */
const secondScreeningPassedPerson = SecondSelection.exec(firstScreeningPassedPerson);
console.log(stageName({person:secondScreeningPassedPerson}));

/**
 * 三次選考
 */
const finalScreeningPassedPerson = FinalSelection.exec(secondScreeningPassedPerson);
console.log(stageName({person:finalScreeningPassedPerson}));

type Input = {
    person: EntryPerson | FirstScreeningPassedPerson | SecondScreeningPassedPerson | FinalScreeningPassedPerson;
};



////////////////////////////////

/**
 * 応募情報 エンティティリレーしないバージョン
 * stage: 0/未応募, 1/受付完了, 2/一次選考通過, 3/二次選考通過, 4/三次選考通過
 */
const nonRelayPerson = NonRelayPerson.create(
    Uuid.new(),
    Name.create(
        Sei.create('猫貸し'),
        Mei.create('太郎')
    ),
    Age.create(20),
    Address.create('東京都渋谷区'),
    EducationalBackground.create('三毛猫中学卒業/白黒猫専修学校卒業/ボス猫大学卒業/ネコ大学院修了'),
    PR.create('ライオンは大きな猫です。。'),
    0
);

console.log('');
console.log('非リレー版');
console.log(`${nonRelayPerson.stage} 応募状況: ${nonRelayPerson.statusName}`);
nonRelayPerson.entry();
console.log(`${nonRelayPerson.stage} 応募状況: ${nonRelayPerson.statusName}`);
nonRelayPerson.firstScreening();
console.log(`${nonRelayPerson.stage} 応募状況: ${nonRelayPerson.statusName}`);
nonRelayPerson.secondScreening();
console.log(`${nonRelayPerson.stage} 応募状況: ${nonRelayPerson.statusName}`);
nonRelayPerson.finalScreening();
console.log(`${nonRelayPerson.stage} 応募状況: ${nonRelayPerson.statusName}`);
