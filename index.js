// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyPrependCat(){
    cats.unshift('Bob')
}
function destructivelyAppendCat(){
    cats.push('Ralph')
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(){
    return [...cats, "Broom"]
}
function prependCat(){
    return ["Arnold", ...cats]
    }
function removeLastCat(){
        return cats.slice(0, cats.length - 1)
    }
    cats
function removeFirstCat(){
        return cats.slice(cats.length -2)
}