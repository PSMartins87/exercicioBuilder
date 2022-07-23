import Builder2 from "../Builder/Builder2";
import BreadType from "../components/Bread";
import ProteinType from "../components/Protein";
import sanduicheType from "../components/SanduicheType";
import SauceType from "../components/Sauce";

export default class SanduicheDirector {
    constructor(private builder: Builder2) {}

    constructHotDog(){
        this.builder.setSanduicheType(sanduicheType.HOTDOG);
        this.builder.setBread(BreadType.PAOBRIOCHE);
        this.builder.setProtein(ProteinType.SALSICHA);
        this.builder.addSauce(SauceType.MOLHOAPIMENTADO);        
    }

    constructXSalada(){
        this.builder.setSanduicheType(sanduicheType.XSALADA);
        this.builder.setBread(BreadType.PAOBRANCO);
        this.builder.setProtein(ProteinType.PROTEINADESOJA);
        this.builder.addSauce(SauceType.MOLHOVEGANO);
    }
}
