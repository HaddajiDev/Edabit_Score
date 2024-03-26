function reverse_String(s) {
    let str = "";
    for (let i = 1; i <= s.length; i++) {
        str += s[s.length - i];
    }
    return str;
}

function number_of_characters(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] != " ")
            count++;
    }

    return count;
}

function Capitalize_Words(s) {
    let str = s.split(" ");

    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    return str.join(' ');
}


function Max(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}

function Min(arr) {
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }
    return min;
}

function Somme_Array(arr) {
    //return sum(arr);
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s;
}

function filter_Array(arr, cond) {
    return arr.filter((el) => cond(el));
}

function Fectoriel(n) {
    if (n == 0)
        return 1;
    let f = 1;
    for (let i = 1; i < n + 1; i++) {
        f *= i;
    }
    return f;
}

function Prime_Number(n) {
    let p = 0;

    for (let i = 1; i < n + 1; i++) {
        if (n % i == 0)
            p++;
    }
    if (p == 2)
        return true;
    else
        return false;
}

function Fibonacci(n) {
    let f_0 = 0;
    let f_1 = 1;
    let arr = [];
    arr[0] = f_0;
    arr[1] = f_1;
    if (n == 1)
        return arr[0];

    for (let i = 0; i < n; i++) {
        let res = f_0 + f_1;
        arr[i] = res;

        f_0 = f_1;
        f_1 = res;
    }

    return arr;
}

console.log(reverse_String("Ahmed"));
console.log(number_of_characters("Ahmed Haddaji"));
console.log(Capitalize_Words("ahmed haddaji"));

console.log(Max([1, 2, 3, 4]));
console.log(Min([1, 2, 3, 4]));
console.log(Somme_Array([1, 2, 3, 4]));

console.log(filter_Array([1, 2, 3, 4], n => n % 2 == 0));

console.log(Fectoriel(5));
console.log(Prime_Number(13));

console.log(Fibonacci(8));