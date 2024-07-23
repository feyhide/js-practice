// const speak = () => console.log("hello")
// setTimeout(speak,5000)

// const promise = new Promise((resolve,reject) => {
// setTimeout(() => {
//     isReady = false
//     isReady ? resolve('yeah'):reject('naww')
// },1000)
// })

// console.log(promise
// .then(value => console.log(value))
// .catch(value => console.log(value))
// )

// //oldway
// const promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         isReady = [true,false][Math.floor(Math.random()*2)]
//         isReady ? resolve('yeah'):reject('naww')
//     },1000)
//     })
    
        //only promise ke saath then and catch lagate ya phir await
//     console.log(promise
//     .then(value => console.log(value))
//     .catch(value => console.log(value))
//     )
// newway

// 1. use await/async in functions only 
// 2. use the keyword async
// 3. use the word await
// const getSuperhero = async() => {
//     const base = 'https://superheroapi.com/api.php/1841499576307726/200'
//     const response = await fetch(base)
//     const data = await response.json()
//     console.log(data)
//     console.log("hello")
// }
// getSuperhero()

const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        isReady = [true,false][Math.floor(Math.random()*2)]
        isReady ? resolve('yeah'):reject('naww')
    },1000)
    })
// below code will error if reject 
// const print = async() => {
//     const data = await promise
//     console.log(data)
// }
// below is the way 
const print = async() => {
    try{
        const data = await promise
        console.log(data)    
    }catch(error){
        console.log(error)
    }
}

print()