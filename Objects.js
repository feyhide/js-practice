const myObject = {
    'keyname' : 'value',
    'keyname1' : 'value1',
}

console.log(myObject['keyname'])

const myObject1 = {
    'keyname' : 1234,
    'keyname1' : 'value1',
}

console.log(myObject1['keyname'])

const myObject2 = {
    'keyname' : function(){
        console.log("function")
    },
    'keyname1' : 'value1',
}

console.log(myObject2['keyname'])

const myObject3 = {
    'keyname' : {
        'keyname0.1' : 'hello'
    },
    'keyname1' : 'value1',
}

console.log(myObject3['keyname'])
console.log(myObject3['keyname']['keyname0.1'])