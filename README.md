# IČ validator
<a href="https://npmjs.org/package/ic-validator">
<img src="https://img.shields.io/npm/dm/ic-validator.svg" alt="downlaods">
<img src="https://img.shields.io/npm/v/ic-validator.svg" alt="version">
<img src="https://img.shields.io/npm/dm/ic-validator.svg" alt="NPM downloads">
</a>
<a href="http://opensource.org/licenses/MIT">
<img src="https://img.shields.io/npm/l/ic-validator.svg" alt="License">
</a>
<hr>

Simple Typescript/Javascript validator for Czech business identification number (IČ)

## Install
NPM\
`npm i ic-validator`

Yarn\
`yarn add ic-validator`

## Usage
```javascript
import isValid from "ic-validator";

// Pass string value of IČ
const result = isValid('82276366') // res => true

// Or pass number value
const result1 = isValid(82276366) // res => true
```

## Contributing
Feel free to contribute on improvements

