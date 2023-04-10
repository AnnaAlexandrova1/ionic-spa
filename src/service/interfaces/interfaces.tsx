export interface IBeerList extends Array<IBeerItem>{}

// поскольку не все параметры использую, для экономии времени сделала часть с типом any
export interface IBeerItem {
    id: number,
    name: string,
    tagline: string,
    first_brewed: string,
    description: string,
    image_url: string,
    abv: number,
    ibu: number,
    target_fg: number,
    target_og: number,
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

export interface ISelected {
    page: number,
    id: number | '', 
    beerItem: '' | IBeerItem
}

export interface IStatus {
    loading: boolean, 
    error: boolean, 
    errStatus: boolean
}