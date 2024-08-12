export const hello = (name) => {
    console.log(`Hello ${name}`);
}

export const topla = (a, b) => a + b;
export const cikar = (a, b) => a - b;

export const text = 'Text'; // This is a named export
export const users =[{
    name: 'Ali',
    age: 25
},{
    name: 'Veli',
    age: 30
}]
export default hello; // This is a default export