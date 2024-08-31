//your JS code here. If required.
document.getElementById("ageForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (name && age) {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve();
        } else {
          reject();
        }
      }, 4000); 
    })
    .then(() => {
      alert(Welcome, ${name}. You can vote.);
    })
    .catch(() => {
      alert(Oh sorry ${name}. You aren't old enough.);
    });
  } else {
    alert("Please fill in all fields.");
  }
});