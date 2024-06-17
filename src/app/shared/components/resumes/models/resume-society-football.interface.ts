export interface ResumeSocietyFootball {
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
