export interface Root {
    _id: string
    name: string
    rarity: number
    alter: string
    artist: string
    va: string
    biography: string
    description: string
    quote: string
    voicelines: Voicelines
    lore: Lore
    affiliation: string[]
    class: string[]
    tags: string[]
    statistics: Statistics
    trait: string
    costs: Costs
    potential: Potential[]
    trust: Trust
    talents: Talent[]
    skills: Skill[]
    module: Module
    base: Base2[]
    headhunting: string
    recruitable: string
    art: Art
    availability: string
    url: string
    dateAdded: string
    __v: number
}

export interface Voicelines {
    "Appointed as Assistant": string
    "Talk 1": string
    "Talk 2": string
    "Talk 3": string
    "Talk after Promotion 1": string
    "Talk after Promotion 2": string
    "Talk after Trust Increase 1": string
    "Talk after Trust Increase 2": string
    "Talk after Trust Increase 3": string
    Idle: string
    Onboard: string
    "Watching Battle Record": string
    "Promotion 1": string
    "Promotion 2": string
    "Added to Squad": string
    "Appointed as Squad Leader": string
    Depart: string
    "Begin Operation": string
    "Selecting Operator 1": string
    "Selecting Operator 2": string
    "Deployment 1": string
    "Deployment 2": string
    "In Battle 1": string
    "In Battle 2": string
    "In Battle 3": string
    "In Battle 4": string
    "4-star Result": string
    "3-star Result": string
    "Sub 3-star Result": string
    "Operation Failure": string
    "Assigned to Facility": string
    Tap: string
    "Trust Tap": string
    Title: string
    Greeting: string
}

export interface Lore {
    Gender: string
    "Place of Birth": string
    Birthday: string
    Race: string
    Height: string
    "Combat Experience": string
    "Infection Status": string
    "Physical Strength": string
    Mobility: string
    "Physiological Endurance": string
    "Tactical Planning": string
    "Combat Skill": string
    "Originium Adaptability": string
}

export interface Statistics {
    base: Base
    e0max: E0max
    e1max: E1max
    e2max: E2max
}

export interface Base {
    hp: string
    atk: string
    def: string
    resist: string
    redeploy: string
    cost: string
    block: string
    interval: string
}

export interface E0max {
    hp: string
    atk: string
    def: string
    resist: string
    redeploy: string
    cost: string
    block: string
    interval: string
}

export interface E1max {
    hp: string
    atk: string
    def: string
    resist: string
    redeploy: string
    cost: string
    block: string
    interval: string
}

export interface E2max {
    hp: string
    atk: string
    def: string
    resist: string
    redeploy: string
    cost: string
    block: string
    interval: string
}

export interface Costs {
    "Skill Summary - 1": string
    Orirock: string
    "Skill Summary - 2": string
    Sugar: string
    Polyester: string
    "Oriron Cluster": string
    "Skill Summary - 3": string
    Aketon: string
    "Loxic Kohl": string
    "Optimized Device": string
    "Manganese Trihydrate": string
    "D32 Steel": string
    "White Horse Kohl": string
    "Grindstone Pentahydrate": string
    "Polymerization Preparation": string
    "RMA70-24": string
    LMD: string
    "Vanguard Chip": string
    "Orirock Cube": string
    "Vanguard Dualchip": string
}

export interface Potential {
    name: string
    value: string
}

export interface Trust {
    Defense: string
}

export interface Talent {
    name: string
    value: string
}

export interface Skill {
    name: string
    spcost: string
    initialSP: string
    chargeType: string
    skillActivation: string
    skillDescription: string
}

export interface Module {
    name: string
    level: string
    trust: string
    availability: string
    trait: string
    missions: string[]
}

export interface Base2 {
    name: string
    level: string
    effects: string
    building: string
}

export interface Art {
    Base: string
    E2: string
    "Miraculous Moment": string
}
