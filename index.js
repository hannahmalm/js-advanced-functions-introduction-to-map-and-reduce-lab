// Your code here
// collection processing ethods that do map-like or reduce- like work

//map - visits each member of a collection
//map produces a NEW array, after transforming each elelment
//example of map: multiply each number in this Array by -1, returning a new Array or the input Array called negativeized
//Map 1. Takes an independent variable, 2. Plugs it into an equation, 3. Gets a result bac

//returns an array with all values made negative
//1. Create a function and pass in the source array
function mapToNegativize(sourceArray){
    //create an empty array
    let MTN = []
    // start at 0, iterate over the length of the source array
    // push the function into the MTN array, pushin -1 * sourceArray[i]
    for (let i=0; i < sourceArray.length; i++){
        MTN.push(-1 * sourceArray[i])
    }
    return MTN
}

//returns an array with the original values
//The same as above but dont do any changes
function mapToNoChange(sourceArray){
    let MTNC = []
    for (let i=0; i < sourceArray.length; i++){
        MTNC.push(sourceArray[i])
    }
    return MTNC
}


//returns an array with the original values multiplied by 2
function mapToDouble(sourceArray){
    let MTD = []
    for (let i=0; i < sourceArray.length; i++){
        MTD.push(2* sourceArray[i])
    }
    return MTD
}


//returns an array with the original values squared
//The reason you have to do "sourceArray[i]" is because you need to specify the iteration on the array
function mapToSquare(sourceArray){
    let MTS = []
    for (let i=0; i < sourceArray.length; i++){
        MTS.push(sourceArray[i] * sourceArray[i])
    }
    return MTS
}


//ALL MAP UNITS A NEW ARRAY


//recue - used to visit each member of a colleciton
//reduce starts with an initial value(called memo or aggregator, then we do "work, and the memo that the work updates")
//Then we do some "work" involving the element and the memo and that work updates the memo.
//Used to make a running total
//When we enter a grocery store, our memo is 0.00
// As we add items to our cart, each item's value updates the running total (the memo) thus changing it
//Your initial memo is an empty String of "", but as someone spells ["C", "a", "t"] you aggregate each letter to the memo and, at the end, its value is "Cat".
//The reduce function should be given a starting point as an argument.

//reduceToToal returns a running total when not given a starting point 
//you need to put a default value for starting point
function reduceToTotal(source, startingPoint=0) {
    let total = startingPoint 
    for (let i=0; i < source.length; i++){
        total = total + source[i]
    }
    return total
}

//reduceToTal returns a running total when given a starting point


//reductToAllTrue returns true when values are truthy and false when it is falsy
//!source will mean that the source is not true, else it will return false
//1. take in the source
//2. Iterate over the source
//3. If the source returns true, return true, else return false
//!function gets evaluated to true
function reduceToAllTrue(source){
for (let i=0; i < source.length; i++){
    if (!source[i]) return false
    }
    return true 
}

//reduceToAnyTrue returns true when a true value is present or flase when no true value is present
function reduceToAnyTrue(source){
    for (let i=0; i < source.length; i++){
        if (source[i]) return true
        }
    return false
    }