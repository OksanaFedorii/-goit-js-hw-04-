function isEnoughCapacity(products, containerSize) {
    let box = 0;
    const values = Object.values(products);
    for (let i = 0; i < values.length; i++) {
        box += values[i];
        if (box > containerSize) {
            return false;
        }
    }
    return true;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); 
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); 
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); 
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); 