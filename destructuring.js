const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [...arr1,...arr2] //... destructuring

console.log(arr3)

const arr4 = [{name : 'fahad'}]
const arr5 = [{name : 'asshan'}]

const arr6 = [...arr4,...arr5] //... destructuring

console.log(arr6)

const obj = {
    name : 'fahad',
    age : 12,
    sex : "f"
}
const obj1 = {
    name : 'faha1d',
    age : 112
}

const objres = {
    ...obj,
    ...obj1
} //... destructuring OVERWRITING

console.log(objres)