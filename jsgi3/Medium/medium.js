function pizzaSlices(x, y) {
    return function() {
        let slicePerPerson = x / y;
        console.log(`Each person can have ${slicePerPerson.toFixed(2)} slices from the ${x} slice pizza`);
    }
}

let slices = pizzaSlices(9, 4);
slices(); // Output: Each person can have 2.25 slices from the 9 slice pizza
