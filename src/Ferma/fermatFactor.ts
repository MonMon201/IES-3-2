export const fermaFactor = (n: number): number[] => {
  if (n <= 0) {
    return [n];
  }

  if (!(n % 2)) {
    return [n / 2, 2];
  }

  let a = Math.ceil(Math.sqrt(n));

  if (a * a === n) {
    return [a, a];
  }

  let b = 0;
  while (1) {
    const c = a * a - n;
    b = Math.floor(Math.sqrt(c));

    if (b * b === c) break;
    else a += 1;
  }

  return [a - b, a + b];
};
