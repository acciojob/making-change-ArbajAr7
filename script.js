const makeChange = (c) => {
  // your name here
	let quarter = 25;
  let dime = 10;
  let nickel = 5;
  let penny = 1;
  
  const change ={
      q : 0,
      d : 0,
      n : 0,
      p : 0
  }
      while (c>= quarter)
      {
            change.q += 1; 
            c = c-quarter;
      }
      
      while (c < quarter && c >= dime)
      {
            change.d += 1; 
            c = c-dime;
      }
      while (c < dime && c >= nickel)
      {
            change.n += 1; 
            c = c-nickel;
      }
      while (c < nickel && c >= penny)
      {
            change.p += 1; 
            c = c-penny;
      }
  return change
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
