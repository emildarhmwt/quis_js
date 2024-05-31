//Soal nomor 1
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 
console.log(reverseString("world")); 

//Soal nomor 2
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(15);

//Soal nomor 3
function secondLargest(arr) {
    if (arr.length < 2) {
        throw new Error("Array harus memiliki setidaknya dua elemen");
    }

    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] < first) {
            second = arr[i];
        }
    }

    return second;
}
console.log(secondLargest([10, 5, 20, 8])); 
console.log(secondLargest([1, 2, 3, 4, 5])); 
