import Builder2 from "./Builder2";
import BreadType from "../components/Bread";
import ProteinType from "../components/Protein";
import sanduicheType from "../components/SanduicheType";
import SauceType from "../components/Sauce";
import Sanduiche from "../products/Sanduiche";

export default class SanduicheBuilder implements Builder2{
    private _sanduiche = new Sanduiche();
    reset(): void {
        this._sanduiche = new Sanduiche();
    }
    getSanduich(): Sanduiche {
        return this._sanduiche;
    }
    setSanduicheType(value: sanduicheType) {
        this._sanduiche.sanduicheType = value;
    }
    setBread(value: BreadType) {
        this._sanduiche.bread = value;
    }
    setProtein(value: ProteinType) {
        this._sanduiche.protein = value;
    }
    addSauce(value: SauceType) {
        this._sanduiche.sauce = value;
    }

}