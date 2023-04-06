export interface IBeerList extends Array<IBeeritem>{}

// поскольку не все параметры использую, для экономии времени сделала часть с типом any
export interface IBeeritem {
    id: Number,
    name: String,
    tagline: String,
    first_brewed: String,
    description: String,
    image_url: String,
    abv: Number,
    ibu: Number,
    target_fg: 1005,
    target_og: 1045,
    ebc: 15,
    srm: 7.5,
    ph: 4.4,
    attenuation_level: 88.9,
    volume: any,
    boil_volume: any,
    method: any,
    ingredients: any,
    food_pairing: Array<String>,
    brewers_tips: String,
    contributed_by: String,
}