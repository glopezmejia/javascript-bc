
// #NOTES 

// 6.1 Introduction 
// An object (most fundamental datatype on JS): is a composite value: 

// A composite value: 
    // it aggregates multiple values (primitive values or other objects) and allows you to store and retrieve those values by name. 

// An object is an unordered collection of properties, each of which has a name and a value.

// hashtable:
    // Objects map strings to values (i.e. z:1) --> think of it as a hashtable, dictionary 

// Properties:
    // In addition to maintaining its own set of properties, a JavaScript object also inherits the properties of another object, known as its “prototype.”


// Dynamic Property: 
    // Objects can be added and deleted 


// If it's not a string, a boolean, a Symbol, or a number ~ then it's an object

// Immutable objects??
    // Strings, booleans, symbols, and numbers can behave like immutable objects

// Objects are mutable:
    // they are manipulated by reference and NOT by value 
    // If variable x refers to an object, and the code let y = x; is executed. 
        // the variable y holds a reference to the same object, NOT A COPY of the object x

        // * note: if we modify the object through the variable y, the changes will also be visible through object x!!!

let x = { // notation for an object
    z : 3
}
let x_prototype = Object.getPrototypeOf(x)
console.log('x prototype with object literal:')
console.log(x_prototype)
let x_prop = Object.getOwnPropertyNames(x)
console.log(x_prop)

let y = x;
console.log(y) //prints {z:3}

//modify y.z to change the x.z
y.z = 4
console.log('x.z = %d\n', x.z)

// properties: 
    // a property name is a string, empty string, or a symbol 
        // * note: no two values can have the same name

    // values: 
        //  * note: they may be a value OR a getter OR  setter function (or both)

    // Own Property: 
        // directly defined on an object (not inherited)

    // Attributes of properties (3): 
        // 1) writable: whether the value of the property can be set 
        // 2) enumerable: whether the property name is returned by a for/in loop 
        // 3) configurable: whether the property can be deleted and whether it's attributes can be altered
        // 4) name and value (of course)

        // some JS objects are read-only, non-enumberable, non-configurable
            // HOWEVER, all the objects we create have those properties
// 

// 6.2 Creating Objects 
// You can create objects with object literals (with the new keyword), and with the Object.create() function

// 6.2.1 Object Literals 
    // defintion: is a comma-separated list of colon-separated name:value pairs, enclosed with curly braces
    let p = {
        name : 'Guillermo'
    }
    console.log('this is p')
    console.log(p) //expect list of properties

// 6.2.2 Creating Objects with New keyword 
    let o = new Object();
    console.log(o)

    o_prop = Object.getOwnPropertyNames(o)
    console.log(o_prop) // should print property names = p, r, q
    console.log(o) // should print paired values

    o_prototype = Object.getPrototypeOf(o)
    console.log('o prototype with new keyword: ')
    console.log(o_prototype) // expect nothing

// 6.2.3 Prototypes 
// Every javascript object has a second JavaScript object associated with it --> a prototype 
    // the first object inherits properties from its prototype 

    // Craeting Objects in two ways 
        // Object literals: all objects created like this have the same prototype object = Object.prototype
        // Object new keyword: 
            // i.e. let o = new Object({p:1, r:3, q:5}); where p,r,q are the inherit properties

        // I don't know what the difference is!

// 6.2.4 Object.create()
// Object.create() creates a new object, using its first argument as the prototype of that object
    // useful when you want to specify the prototype that you want for the object

let obj3 = Object.create(x)
console.log(Object.getPrototypeOf(obj3)) // expect to see {z:3}
console.log(Object.getOwnPropertyNames(obj3))
obj3.z = 10
console.log('%d, %d', x.z, obj3.z)
    

let obj4 = Object.create(Object.prototype) 
console.log(Object.getPrototypeOf(obj4)) //expect Object.prototype
console.log(Object.getOwnPropertyNames(obj4)) //there's none
console.log(obj4) //expect list of properties but it's empty


// 6.3 Querying and Setting Properties 
// To obtain the value of a property, use the . (dot) or the (square brackets with quotes around the property) ['']
           
let book = {
    author : 'Guillermo',
    rating : 5, 
    published : true
}

    // query the the values 
    let author = book['author']
    console.log(author)

    let rating = book['rating']
    console.log(rating)

    let published = book.published
    console.log(published)

    // set the values 

    book.author = 'william' //setting here
    console.log('the new author is %s', book["author"]) // querying 'william' 

// 6.3.1 Objects as associative arrays 

// Associative Arrays: (also known as hash, maps, dictionary):
    // an array indexed by strings rather than by numbers 

    // quantity of properties: 
        // in JS, a program can create any number of properties in any object 
        // and they don't have to be defined in advance (like in Java)

    // . operator to access properties: 
        // the name of the properties serves as an identifier
        // since identifiers are not data types, they can't be manipulated by the program

    // [] array notation to acess a property: 
        // the name of the property is expresses as a string (data type), which 
        // can be manipulated and created while the program is running
    
        let portfolio = {
            ibm : 50, 
            google : 20

        } 

        // this is an example of interpolation!! So cool!!!!!
        console.log(`We have ${portfolio.ibm} shares of ${Object.getOwnPropertyNames(portfolio)[0]} stocks`) 
            // I retrieved the value of the first property in portfolio by using the array notation

        function addstock(portfolio, stockname, shares) { 
            portfolio[stockname] = shares;
        }

        addstock(portfolio, 'amazon', 90)
        console.log(`We have ${portfolio.amazon} shares of ${Object.getOwnPropertyNames(portfolio)[2]} stocks`)

        // Since the data is accessed as a string with the [] operator, it can be changed
        // because strings are dynamic and identifiers are static

// 6.3.2 Inheritance
    // Chain behavior: 
        // if we query a property x in the object o and it is not found, then it will look for the property in the 
        // ownProperties of the prototype.
        // if x isn't found there, it will search in the prototype of the prototype (a linked list/chain)

        // if assignment is allowed, it creates A property in the original object and never modifies objects
            // in the prototype chain
                // This is how we * override * inherited properties

                let superOb = {
                    a : 0, 
                    z : 26
                }

                // we will inherit superOb properties
                let subOb = Object.create(superOb)

                console.log(superOb) // expect paired values of prototype
                console.log(Object.getOwnPropertyNames(subOb))
                subOb.a = 4

                console.log(subOb.z) // expect 26
                console.log(superOb.a) // expect 0
                console.log(subOb['a']) // expect 0
                console.log(`${subOb.a}`) // expect 4

// 6.3.3 Property Access Errors
    // When the property that we are accessing doens't exist, it returns 'undefined'

    // Error occurs:
        // 1) when we query the property of an object that doesn't exist
            // i.e. null and 'undefined' don't have properties 
            
        // 2) when the left side of the . is null or undefined 
              // i.e. 
                    //let surname = book.author.surname; 
                // if book or author are undefined, it will cause an error  

                // how to fix it (it checks if it defined)
                let surname = undefined; if (book) {
                    if (book.author) {
                    surname = book.author.surname;
                    } 
                }
                // or 
                surname = book && book.author && book.author.surname;
                // or
                surname = book?.author?.surname;
                console.log(surname) // expect undefined

// 6.4 Deleting Properties 
    // the delete Operator removes a property from an object
        // * note: You don't delete the value but the property itself

        // * note: You cannot delete inherited properties; only owned properties
            // To delete inherited properties, you must delete them from the prototype object  
                // this affects all the objects that inherit from that prototype


    // A delete expression evaluates to * true * if I delete succeeded or is not delete had no effect

    // Can't delete when: 
        // When a properties configurable attribute is false

// 6.5 Testing Properties 
    // We need to check whether an object has a property with a given name 
    // different ways to do this : in operator, hasOwnProperty(), and propertyIsEnumerable(), or querying the property

    // in Operator 
        // i.e 
            let w = {x:1};
            "x" in w // => true: w has an own property "x"
            "y" in o // => false: w doesn't have a property "y"

    // hasOwnProperty() method tests whether that object has an own property with that given name
        // * note: it returns false for inherited properties 
        // i.e. 
        w = {x:1};
        w.hasOwnProperty("x") // => true: w has an own property x 
        w.hasOwnProperty("y") // => false: w doesn't have a property y 
        w.hasOwnProperty("toString") // => false: toString is an inherited property

    // propertyIsEnumerable() refines the hasOwnProperty() test. 
        // It returns true only is the named property is an own property and it's enumerable attribute is true
            // i.e. 
                w = {x:1};
                w.propertyIsEnumerable("x") // => true: w has an own property x 
            w.propertyIsEnumerable("toString") // => false: not enumerable
        
        // basically, if it is enumerable, it can be used in a for/in loop 
        

// 6.6 Enumerating Properties 
    // We want to obtain a list of all the properties of an object

        // for/in loops : i.e. 
        let fi = {x: 1, y: 2, z: 3}; 
        fi.propertyIsEnumerable("toString")

        for(let p in fi) {
            console.log(p)
        }

        // for/of loops 
            // Object.keys()
                // Returns in array of the names of the enumerable own properties 
                    // It does not include non-enumerable properties, inherited properties, or properties whose name is a Symbol 

            // Object.getOwnPropertyNames() 
                // It works like Object.keys() But it returns an array of the names of non-enumerable own properties
                    // as long as their names are strings

            // Object.getOwnPropertySymbols()
                // Returns own properties whose names are symbols, whether or not they're enumerable

            // Reflect.ownKeys()
                // Returns all own property names, both enumerable and non-enumerable, and both string and symbol

    // 6.6.1 Property Enumeration Order 
        // I can come back to this, not that important


// 6.7 Extending Objects
    // we can do it many ways: 
        // 1) 
            let target = {x: 1}, source = {y: 2, z: 3}; 
            for(let key of Object.keys(source)) {
                target[key] = source[key];
            }
        //target => {x: 1, y: 2, z: 3}

        // 2) Object.assign() 
            //expects two or more objects as its arguments. It modifies and returns the first argument, 
            // which is the target object, but does not alter the second or any subsequent arguments, 
            // which are the source objects
            Object.assign(o, defaults); // overwrites everything in o with defaults

        //3) Instead, what you can do is to create a new object, copy the defaults into it, and then
        // override those defaults with the properties in o:
            o = Object.assign({}, defaults, o);

        // 4) you can also express this object copy-and-override operation 
        // using the ... spread operator like this:
            o = {...defaults, ...o};

        // 5) We could also avoid the overhead of the extra object creation and copying by writing a 
        // version of Object.assign() that copies properties only if they are missing:
        function merge(target, ...sources) {
            for(let source of sources) {
                for(let key of Object.keys(source)) {
                    if (!(key in target)) { // This is different than Object.assign() 
                        target[key] = source[key];
                    } 
                }
            }
            return target; 
        }
// 6.8 Serializing Objects
    //get notes

// 6.9 Object Methods 
    //get notes
// 6.10 Extending Objects Literal Syntax
    //get notes

// 6.11 Summary
    //get notes





