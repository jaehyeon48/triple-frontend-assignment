function roundWithPrecision(value: number, precision: number) {
  const factorOf10 = 10 ** precision
  return Math.round(value * factorOf10) / factorOf10
}

export default roundWithPrecision
