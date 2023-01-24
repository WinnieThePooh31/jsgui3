function todayExercise(name) {
    return function() {
        console.log(`Today's exercise: ${name}`);
    }
}
let today = todayExercise("Swimming");
today(); // Output: Today's exercise: Swimming
