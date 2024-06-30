// const a = ".X..X";
// const b = "X.XXXXX.X.";
// const c = "XX.XXX..";
// const d = "XXXX";

// function solution(S) {
//   let patches = 0;
//   for (let i = 0; i < S.length; ) {
//     if (S[i] === "X") {
//       i += 3;
//       patches++;
//     } else {
//       i++;
//     }
//   }
//   return patches;
// }

// console.log(solution(a));
// console.log(solution(b));
// console.log(solution(c));
// console.log(solution(d));

// CAU 3

const t1 = [1, 1, 1, 1, 1];
const t2 = [2, 1, 4];
const t3 = [2, 7, 2, 9, 8];
const t4 = [7, 3, 1, 1, 4, 5, 4, 9];
function solution(A) {
  const maxPreference = Math.max(...A);
  const preferenceCounts = new Array(maxPreference + 1).fill(0);
  A.forEach((preference) => {
    preferenceCounts[preference]++;
  });

  let rooms = 0;
  let guests = 0;

  for (let i = 1; i < preferenceCounts.length; i++) {
    if (preferenceCounts[i] > 0) {
      const totalGuests = guests + preferenceCounts[i];
      const newRooms = Math.ceil(totalGuests / i);
      rooms += newRooms;
      guests = totalGuests - newRooms * i;
    }
  }

  return rooms;
}

console.log(solution(t1));
console.log(solution(t2));
console.log(solution(t3));
console.log(solution(t4));
const options = { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa"] } }; // Runs only Level A and AA rules
