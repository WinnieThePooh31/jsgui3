function createPII() {
    let pii = {
        name: "Jane Austen",
        ssn: "132-54-6879"
    };

    return {
        getName: function() {
            return pii.name;
        }
    }
}

let personalInfo = createPII();
console.log(personalInfo.getName()); // Output: Jane Austen
console.log(personalInfo.ssn); // undefined
console.log(personalInfo.pii); // undefined
