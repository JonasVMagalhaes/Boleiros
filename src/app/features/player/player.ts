export class PlayerData {
    name: string;
    age: number;
    isContuded: boolean;
    infosAdicionais: number;

    static toDto() {

    }

    static fromDto(response) {
        const playerData = new PlayerData();
        playerData.name = response.name
        playerData.age = response.age
        playerData.isContuded = response.isContuded
        playerData.infosAdicionais = response.infosAdicionais

        return playerData;
    }
}