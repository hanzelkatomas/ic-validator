export default function isValid(ic: string | number): boolean {
  if (!ic) {
    return false
  }

  if (typeof ic === "number") {
    ic = ic.toString()
  }

  // Prepend zeros for older format of identification number, which has fewer digits
  if (ic.length < 8) {
    ic = ic.padStart(8, "0")
  }

  if (ic.length !== 8) {
    return false
  }

  // Get all digits which are used to calculate checksum digit (omit last digit)
  const digits = [...ic].slice(0, 7)

  // Calculate weighted sum
  const sum = digits.reduce<number>((acc, val, i) => acc + Number(val) * (8 - i), 0)

  if (Number.isNaN(sum)) {
    throw Error(`IČ with value ${ic}, couldn't be parsed during validation`)
  }

  // Calculate checksum and check if is equal to passed IC
  return ((11 - (sum % 11)) % 10).toString() === ic.charAt(-1)
}
