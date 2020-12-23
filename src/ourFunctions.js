import { ourChars, ourFavorites } from "./chars"

function sayHi() {
    console.log("Helloooo00");
    console.log(`this char says hi ${ourChars.firstChar.firstName}. their favorite things are: car ${ourFavorites.firstFavoriteThings.car}. Lives in ${ourFavorites.firstFavoriteThings.state}`)
}

function sayGoodbye() {
    console.log(`This char has to say goodbye: ${ourChars.secondChar.firstName}`)
}

export {
    sayHi,
    sayGoodbye
}