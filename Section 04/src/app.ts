// const userName = 'Max'
// userName = 'Maximilian'
// let age = 30

// age = 29

// var result

// function add(a: number, b:number) {
//   result = a+ b
//   return result
// }

// if(age > 20) {
//   let isOld = true
// }

// console.log(isOld)

// console.log(result)

// const add = (a: number, b: number = 5) => a + b

// console.log(add(2, 5))

// const printOutput: (a: number | string) => void = output => {
//   console.log(output)
// }

// const button = document.querySelector('button')

// if (button) {
//   button.addEventListener('click', event => console.log(event))
// }

// printOutput(add(5))

const hobbies = ['Sports', 'Cooking']
const activeHobbies = ['Hiking', ...hobbies]

const person = {
  name: 'Max',
  age: 30
}

const copiedPerson = { ...person }

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)
}

const addedNumbers = add(5, 10, 2, 3.7)

console.log(addedNumbers)

const [hobby1, hobby2, ...remainingHobbies] = hobbies

console.log(hobbies, hobby1, hobby2)

const { name: firstName, age } = person

console.log(firstName, age)
