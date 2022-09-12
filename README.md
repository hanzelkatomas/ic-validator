# ic-validator
Simple Typescript validator for Czech business identification number (IČ)

```
// Pass string value of IČ
const result = isValid('82276366') // res => true

// Or pass number value
const result1 = isValid(82276366) // res => true
```