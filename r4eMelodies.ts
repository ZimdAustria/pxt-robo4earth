enum Melodien {
    HarryPotter,
    HappyBirthday,
    SuperMario,
    StarWars
}

namespace r4eMelody {

    const harryPotter = ["e4:2", "a4:4", "c5:1", "b4:2", "a4:4"
        , "e5:2", "d5:6", "b4:6", "a4:4", "c5:1"
        , "b4:2", "g4:4", "as4:2", "e4:8", "r:2"
        , "e4:2", "a4:4", "c5:1", "b4:2", "a4:4"
        , "e5:2", "g5:4", "f#5:2", "f5:4", "c#4:2"
        , "f5:4", "e5:1", "d#5:2", "d#4:4", "c5:2", "a4:8"];
    const happyBirthday = ["e4:1", "e4:2", "e4:4", "e4:6", "e4:8", "e4:3"];
    const superMario = ["e5:8"];
    const starWars = ["e4:1"];

    
    export function getMelody(melody:Melodien) {
        switch(melody) {
            case Melodien.HarryPotter:
                return harryPotter;
                break;
            case Melodien.HappyBirthday:
                return happyBirthday;
                break;
            case Melodien.SuperMario:
                return superMario;
                break;
            case Melodien.StarWars:
                return starWars;
                break;
            default:
                return ["c:1"];
                break;
        }
    }
}
