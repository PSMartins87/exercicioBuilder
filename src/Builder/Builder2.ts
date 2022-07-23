import BreadType from "../components/Bread";
import ProteinType from "../components/Protein";
import sanduicheType from "../components/SanduicheType";
import SauceType from "../components/Sauce";
import Sanduiche from "../products/Sanduiche";

export default interface IBuilder {
    reset(): void;
    getSanduich(): Sanduiche;
    setSanduicheType(value: sanduicheType);
    setBread(value: BreadType);
    setProtein(value: ProteinType);
    addSauce(value: SauceType);
}
