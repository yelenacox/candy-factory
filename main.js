
const buyChocolate = () => {
    const chocolate = {type: "Milk chocolate"}
    return chocolate
}

const addFlavoring = (candyObject) => {
    candyObject.flavor = "Mint"
    return candyObject
}

const makeBarkMixture = (candyObject) => {
    if (candyObject.flavor === "Mint"){
        candyObject.mixed = true
    } else {
        candyObject.mixed = false
    }
    return candyObject
}

const bakeCandy = (candyObject) => {
    if (candyObject.mixed === true){
        candyObject.baked = true
    } else {
        candyObject.baked = false
    }
    return candyObject
}

const breakBark = (candyObject) => {
    if (candyObject.baked === true){
        return ["Mint Chocolate Bark Piece"]
    }
}

let candy = buyChocolate()
console.log(candy)

let candyFlavor = addFlavoring(candy)
console.log(candyFlavor)

let candyMixture = makeBarkMixture(candy)
console.log(candyMixture)

let candyBake = bakeCandy(candy)
console.log(candyBake)

let candyBreak = breakBark(candy)
console.log(candyBreak)