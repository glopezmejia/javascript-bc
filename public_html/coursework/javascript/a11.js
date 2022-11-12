// 1. 
console.log('part 1')
let obj1 = {
    x : 0, 
    name : '',
    arr : [],
    animals : {

    }
}

console.log(obj1) // expect pairs of obj1

// 2. 
console.log('part 2')
let obj2 = Object.create(Object.prototype)
obj2.x = 10; 
obj2.str = 'Ben'

console.log(obj2) // expect pairs of obj2

// 3. 
console.log('part 3')
let obj2_props = Object.getOwnPropertyNames(obj2) // get ownProperties of obj2
console.log(obj2_props) // expect list of properties 

// 4. 
console.log('part 4')
let obj2_proto = Object.getPrototypeOf(obj2) // get Object prototype
let obj2_proto_props = Object.getOwnPropertyNames(obj2_proto) // get list of properties of Object
console.log(obj2_proto) // expect the list of properties of Object prototype

// 5.
console.log('part 5')
let ob1 = {
    str : 'hi', 
    y : 7
}

let ob2 = Object.create(ob1)
ob2.cr = 3

let ob3 = Object.create(ob2)
ob3.x = 22

let ob3_prop = Object.getOwnPropertyNames(ob3) 
console.log(`${ob3_prop}, ${Object.getOwnPropertyNames(ob1)}`) // expect x, str, y

// 6. 
console.log('part 6')
console.log('str' in ob3) // expect true
console.log('y' in ob3) // expect true
console.log('cr' in ob3) // expect true
console.log('w' in ob3) // expect false 

// 7. 
console.log('part 7')
console.log(ob3.hasOwnProperty('str')) // expect false
console.log(ob3.hasOwnProperty('y')) // expect false
console.log(ob3.hasOwnProperty('cr')) // expect false
console.log(ob3.hasOwnProperty('x')) // expect true 

// 8. 
console.log('part 8')
console.log(ob3.propertyIsEnumerable('str')) // expect false
console.log(ob3.propertyIsEnumerable('y')) // expect false
console.log(ob3.propertyIsEnumerable('cr')) // expect false
console.log(ob3.propertyIsEnumerable('x')) // expect true 

// 9. 
console.log('part 9')
ob3.cap = 100
console.log(Object.keys(ob3))

// 10. 
console.log('part 10')
let target = {
    x : 1
}
 let source = {
    y : 2, 
    z : 3
 }

    //first way: 
    for (let key of Object.keys(source)) {
        target[key] = source[key]
    }
    console.log (target)

    //second way: let's make it more interesting by adding w/o overriding the target
    source.y = 15
    source.w = 20

    target = Object.assign({}, source, target) //initiating empty object, overriding source, but not target
    console.log(target) // expecting x:1, y:2, z:3, w:20

// 11. 
console.log('part 11')
let s = JSON.stringify(ob3)
console.log(s) // expect 'x' & 'cap' and no inherited properties

// 12. 
console.log('part 12')
let par = JSON.parse(s)
console.log(par) //expect restored ob3 from s

// 13. 
console.log('part 13')
let person = {
    name : 'PeterPan',
    age : 14,
    toString : function() {
        return `${this.name}, ${this.age}`; // we are using interpolation
    }
}

console.log(person.toString()) // expect 'PeterPan', '14'

// 14. 
console.log('part 14')
let i = 12 
let j = 58

let shorthand = {i, j}
console.log(shorthand) // expect paired values i:12, j:58

// 15. 
console.log('part 15')
let pbAndJ = {... shorthand, ... person} // spreading existing properties into pbAndJ
console.log(pbAndJ) // expected i:12, j:58,  name:'PeterPan', age: 14, toString : function() 

// 16. 
console.log('part 16')
let alarm = {
    m : 0, 
    
    get() {return this.m},
    set(minutes) {this.m = minutes}
}

console.log(alarm['m']) // expect 0
alarm.m = 60; 
console.log(alarm.m) // expect 60

// DONE :')

