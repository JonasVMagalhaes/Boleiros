import { EventGameFootball } from "@enums/events-game/football.enum";

export interface ResumeSocietyFootball {
    id: string;
    homeTeam: {
        id: string;
        name: string;
        abbreviate: string;
        logo: string;
        score?: number;
    };
    visitorTeam: {
        id: string;
        name: string;
        abbreviate: string;
        logo: string;
        score?: number;
    };
    eventsGame: EventGame[];
    winner: string;
}

interface EventGame {
    event: EventGameFootball;
    player: {
        name: string;
    }
    time: number;
}
