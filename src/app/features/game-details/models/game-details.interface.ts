export interface GameDetails {
    players: GameDetailsPlayer[];
}

interface GameDetailsPlayer {
    name: string;
    position: string;
    confirmatedAttendance: boolean;
}