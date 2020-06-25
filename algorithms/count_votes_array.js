'use strict'

let votes = [];

// O(1)
function addVotes(candidate) {
  votes.push(candidate);
}

// O(N)
// It will take much longer to get sum
function countVotes(votes) {
  var tally = {};
  for (var i = 0; i < votes.length; i++) {
    if (tally[votes[i]]) {
      tally[votes[i]]++;
    } else {
      tally[votes[i]] = 1;
    }
  }

  return tally;
}
//addVotes(['Lee', 'Smith', 'Lee', 'Lee', 'Smith', 'Lee']);
addVotes('Lee');
addVotes('Smith');
addVotes('Lee');
addVotes('Smith');
addVotes('Lee');
addVotes('Lee');
addVotes('Lee');

console.log(countVotes(votes));