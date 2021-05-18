export const fermaFactor = (n: number): { factors: number[] } => {
  let foundIn = 1;
  if (n <= 0) {
    return { factors: [n] };
  }

  if (!(n % 2)) {
    return { factors: [n / 2, 2] };
  }

  let a = Math.ceil(Math.sqrt(n));

  if (a * a === n) {
    return { factors: [a, a] };
  }

  let b = 0;
  for (; foundIn > 0; foundIn++) {
    const c = a * a - n;
    b = Math.floor(Math.sqrt(c));

    if (b * b === c) break;
    else a += 1;
  }

  return { factors: [a - b, a + b] };
};
