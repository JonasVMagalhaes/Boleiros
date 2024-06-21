export interface ResumeSocietyFootball {
    id: string;
    homeTeam: {
        id: string;
        name: string;
        logo: string;
        score?: number;
    };
    visitorTeam: {
        id: string;
        name: string;
        logo: string;
        score?: number;
    };
    winner: string;
}
