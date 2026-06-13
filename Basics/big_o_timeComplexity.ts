// Big O isn't any algorithm it's just a measurment scale :

// O(n) means that the time it takes to run the algorithm grows linearly with the input size. n is the actuall number or the actuall speed of the algorithm.

// There is a rule in Big O notation that we always drop the constants because they don't affect the growth rate of the function. So if we have an algorithm that takes 2n time, we would drop the constant 2 and say that it has a time complexity of O(n).

// For Example :

// Big O (n) be like

function big_o_n(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    console.log(i);
  }
  return sum;
}

big_o_n("Hello World");

// Big O (n^2) be like

function big_o_n_squared(n: string): number {
  let sum = 0;

  for (let i = 0; i < n.length; i++) {
    console.log(i);
  }

  for (let i = 0; i < n.length; i++) {
    console.log(i);
  }

  return sum;
}

// The second function loop is be like the first function loop but in second we have 2 for loop dosen't means now it's a Big O(2n) we always drop the constant so we remove the 2 from there cuz it's a constant so it is also becomes a Big O(n).
