const person={
    name:"hena",
    age:19,
    country:"Bangladesh"
}

// Object.seal(person)

// person.status="Not found";


// console.log(person)

// console.log(Object.values(person))
// console.log(Object.keys(person))
// console.log(Object.entries(person))


// console.log(person["name"])
// console.log(person.name)
// for(let key in person){
//     console.log(` key : ${key} value : ${person[key]}`)

// }

// console.log(Object.entries(person))

for(let [key,value] of Object.entries(person)){
    console.log(`key :${key}  value :${value}`)
}