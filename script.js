//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const ageInput = document.getElementById('age');
    const nameInput = document.getElementById('name');
    const age = Number(ageInput.value);
    const name = nameInput.value.trim();

    // Validation: Check if the inputs are not empty
    if (!age || !name) {
        alert('Both fields are required.');
        return;
    }

    // Create a promise to handle the age check
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000); // Wait for 4 seconds before resolving/rejecting the promise
    })
    .then(() => {
        // If the promise is resolved (age >= 18)
        alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
        // If the promise is rejected (age < 18)
        alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
