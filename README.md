```bash
git init
npm install -g pnpm
pnpm add typescript @types/node ts-node nodemon @tsconfig/node22
pnpm tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom  --module commonjs
pnpm add ts-pattern
```


```mermaid
%%{init:{'theme':'forest'}}%%

sequenceDiagram

    title リレー版
    box white 
        participant Person as 応募者
        participant Entry as エントリー受付
        participant FirstSelection as 一次選考
        participant SecondSelection as 二次選考
        participant FinalSelection as 最終選考
    end


    Note over Entry: Personしか受け付けない
    Person->>+Entry: エントリー
    Entry-->>-Person: エントリー受付/EntryPerson
    Note over FirstSelection: エントリー済みの人しか<br>受け付けない
    Person->>+FirstSelection: 一次選考を受けに行く
    FirstSelection-->>-Person: 合格/FirstScreeningPassedPerson
    Note over SecondSelection: 一次選考通過者しか<br>受け付けない
    Person->>+SecondSelection: 二次選考を受けに行く
    SecondSelection-->>-Person: 合格/SecondScreeningPassedPerson
    Note over FinalSelection: 二次選考通過者しか<br>受け付けない
    Person->>+FinalSelection: 最終選考を受けに行く
    FinalSelection-->>-Person: 合格/FinalScreeningPassedPerson

```

```mermaid

sequenceDiagram

    title 非リレー版
    box white 
        participant Person as 応募者
        participant Entry as エントリー受付
        participant FirstSelection as 一次選考
        participant SecondSelection as 二次選考
        participant FinalSelection as 最終選考
    end


    Person->>+Entry: エントリー
    alt stage is 0
        Entry-->>Person: Person.stage=1
    else stage is not 0
        Entry-->>-Person: エントリー資格無し
    end
    Person->>+FirstSelection: 一次選考を受けに行く
    alt stage is 1
        FirstSelection-->>Person: Person.stage=2
    else stage is not 1
        FirstSelection-->>-Person: 一次選考受付資格無し
    end
    Person->>+SecondSelection:  二次選考を受けに行く
    alt stage is 2
        SecondSelection-->>Person: Person.stage=3
    else stage is not 2
        SecondSelection-->>-Person: 二次選考受付資格無し
    end
    Person->>+FinalSelection:  最終選考を受けに行く
    alt stage is 3
        FinalSelection-->>Person: Person.stage=4
    else stage is not 3
        FinalSelection-->>-Person: 最終選考受付資格無し
    end
```