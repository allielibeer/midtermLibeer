let animalList= ["dog", "cat", "horse", "meerkat"]

let userAnimal= prompt("Enter an animal")
let addAnimal= userAnimal.toLowerCase()
animalList.push(addAnimal)
alert(`The last animal is ${animalList[animalList.length - 1]}`)
