const cats = (["Milo", "Otis", "Garfield"])
function desctructivelyRemoveLastCat(){
    Cats .pop("");
    const copyOfCats = [...cats]
}
function destructivelyAppendCat(){
    cats .push("Ralph");
    const copyOfCats = [...cats];
}
function destructivelyPrependCat(){
    cats .unshift("Bob");
    const copyOfCats = [...cats];
}
function destructivelyRemoveLastCat(){
    cats .pop("");
    const copyOfCats = [...cats];
}
function destructivelyRemoveFirstCat(){
    cats .shift("");
    const copyOfCats = [...cats];
}
const cat = ["Milo", "Otis", "Garfield"];
function appendCat(){
    var newArray = cat.slice();
    // or ES6 way
    // var newArray = [...cats];
    newArray.push("Broom");
    return newArray
}
function prependCat(name){
    return[...cats.slice(0, 0), "Arnold", "Milo", "Otis", "Garfield"];
}
function removeLastCat(){
    return cats.slice(0, cats.length -1);
}
function removeFirstCat(){
    return cats.slice(1)
}