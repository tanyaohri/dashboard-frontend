function computeGridProp(value){
    if(value===NaN)
    {
        throw Error("Not a number has been passed");
    }

    else {
        return Math.ceil((value/100) * 12)
    }
    
}

export {
    computeGridProp
}