export interface Info {
    count: number;
    pages: number;
    next: string;
    prev?: any;
}

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: Date;
}

export interface RootObject {
    info: Info;
    results: Episode[];
}