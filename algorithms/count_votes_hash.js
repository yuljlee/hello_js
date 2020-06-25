var votes = {};

// O(1) Add sum everytime value added
function addVotes(candidate) {
  if (votes[candidate]) {
    votes[candidate]++;
  } else {
    votes[candidate] = 1;
  }
}

// O(1)
function countVotes() {
  return votes;
}

addVotes('Lee');
addVotes('Smith');
addVotes('Lee');
addVotes('Smith');
addVotes('Lee');
addVotes('Lee');
addVotes('Lee');

console.log(countVotes(votes));
