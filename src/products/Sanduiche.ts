import Sauce from "../components/Sauce";
import BreadType from "../components/Bread";
import Protein from "../components/Protein";
import sanduicheType from "../components/SanduicheType";

export default class Sanduiche {
    private _sauce: Sauce;
    private _bread: BreadType;
    private _protein: Protein;
    private _tipo: sanduicheType;

    get sanduicheType(): sanduicheType {
        return this._tipo;
    }

    set sanduicheType(value: sanduicheType) {
        this._tipo = value;
    }

    get protein(): Protein {
        return this._protein;
    }

    set protein(value: Protein) {
        this._protein = value;
    }

    get sauce(): Sauce {
        return this._sauce;
    }

    set sauce(value: Sauce) {
        this._sauce = value;
    }

    get bread(): BreadType {
        return this._bread;
    }

    set bread(value: BreadType) {
        this._bread = value;
    }
}
