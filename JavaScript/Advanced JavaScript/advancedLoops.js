const basket = ["apple", "orange", "pear", "pawpaw"];

// for of loop: >> this type of loop works on iterables. Iterables are array and strings.
for (fruit of basket){
    console.log(fruit);
}

for (letter of "Toronto"){
    console.log(letter);
}


// for in loop: this type of loop works on enumerables. Only objects can be enumerated. Note objects are similar to dictionaries in Python.
const quantities = {
    potatoe: 10,
    onion: 5,
    saladCream: 2
}

for (item in quantities){
    console.log(item);
}