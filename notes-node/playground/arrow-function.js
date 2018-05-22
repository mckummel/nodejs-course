var square = (x) =>
{
    var result = x*x;
    return result;
};

var square2 = (x) => x*x;

var square3 = x => x*x;


var user = {
    name: 'Math',
    sayHi: () => 
        {
            console.log(`I'm ${user.name}`);
        },
    sayHiAlt () 
    {
        console.log(`I'm ${this.name}`);
    }
};

console.log(square(9));
console.log(square2(9));
console.log(square3(9));
user.sayHi();
user.sayHiAlt();