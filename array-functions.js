const users = [{
    name: 'Mehmet',
    age: 10
},{
    name: 'Mehmet',
    age: 25
},{
    name: 'Ayşe',
    age: 35
}];

/*
push -> Adds an element to the end of the array
pop -> Removes the last element from the array
shift -> Removes the first element from the array
unshift -> Adds an element to the beginning of the array
map -> Returns a new array by applying a function to each element of the array
find -> Returns the first element that satisfies the condition
filter -> Returns a new array that contains the elements that satisfy the condition
reduce -> Applies a function to each element of the array and returns a single value
some -> Returns true if at least one element satisfies the condition
every -> Returns true if all elements satisfy the condition
includes -> Returns true if the array contains the specified element
*/

//push -> Adds an element to the end of the array
/* users.push('Ayşe');
console.log(users); */

//map -> Returns a new array by applying a function to each element of the array
//users.map((user => console.log(user.name)));


//find -> Returns the first element that satisfies the condition
/* const result = users.find(user => user.name === 'Mehmet' && user.age > 20);
console.log(result); */

//filter -> Returns a new array that contains the elements that satisfy the condition
/* const result2 = users.filter(users => users.name === 'Mehmet'&& users.age < 20);
console.log(result2); */

//some -> Returns true if at least one element satisfies the condition
/* const result3 = users.some(users => users.age === 10);
console.log(result3); */

//every -> Returns true if all elements satisfy the condition
/* const result4 = users.every(users => users.age >= 10);
console.log(result4); */

//includes -> Returns true if the array contains the specified element
const sebzeler = ['domates','biber','patlıcan'];
const result5 = sebzeler.includes('salatalık');
console.log(result5);