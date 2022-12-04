let par1 =
  "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day";

const Counter = (par) => {
  let counts = {};
  for (let i in par) {
    const letter = par[i].toLowerCase();
    if (letter == " ") continue;
    else if (counts[letter] == undefined) {
      counts[letter] = 1;
    } else {
      counts[letter] = counts[letter] + 1;
    }
  }
  document.getElementById("Counter").innerHTML = JSON.stringify(counts);
  
} 
Counter(par1)