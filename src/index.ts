import Director from "./directors/SanduicheDirector";
import SanduicheBuider from "./Builder/SanduicheBuilder";
import Sanduiche from "./products/Sanduiche";
const builder: SanduicheBuider = new SanduicheBuider();
const director: Director = new Director(builder);

director.constructHotDog
let hotdog: Sanduiche = builder.getSanduich();
console.log("fazendo um hotdog");
console.log("tipo do pao: " + hotdog.bread);
console.log("tipo da proteina: " + hotdog.protein);
console.log("tipo do molho: " + hotdog.sauce);
