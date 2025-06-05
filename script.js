document.getElementById('votingForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();

  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  const ageNum = parseInt(age);

  const checkEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageNum >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000); // 4-second delay
  });

  checkEligibility
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
