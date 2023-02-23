

function myFunc1(arr1, arr2){
    // Please complete this function that returns a new array with the elements of arr1 and arr2 summed up at the same index.
    // If they cannot be summed up, the element shouldn't be added.

    return

}
function myFunc2(someObj, someArr){
    // Please complete this function that returns the sum of all the values of someObj and someArr .
    // If they cannot be summed up, do not.

    return

}

function myFunc3(someArr){
    // Please complete this function that returns the number of different data types inside someArr variable.


    return;

}
function myFunc4(obj1, obj2){
    // Please complete this function that returns true if obj1 and obj2 are equal (same keys & values).

    return;

}

function myFunc5() {
    const link = "https://jsonplaceholder.typicode.com/posts/1";
    
    // Please complete this function that returns the title of the post with id 1 from the link above.

    return;
}

async function myAsyncFunc5() {
    const link = "https://jsonplaceholder.typicode.com/posts/1";
    // Please complete this function that returns the title of the post with id 1 from the link above. But this time, use async/await.

    return;
}
















// Following code is for testing purposes only. Please do not modify it.

const testFunc1 = () => {
    const test1Arr1 = [1, 2, 3, 4, 5];
    const test1Arr2 = [1, 2, 3, 4, 5];

    const test2Arr1 = [1, 2, 3, 4, 5];
    const test2Arr2 = [1, 2, NaN, 4, 5, 6];

    const test3Arr1 = [1, 2, 3, 4, 5];
    const test3Arr2 = [1, 2, "3", 4, 5];

    const test4Arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
    const test4Arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101];

    let completedTests = 0;

    if (myFunc1(test1Arr1, test1Arr2) === [2, 4, 6, 8, 10]) {
        completedTests++;
    }
    if (myFunc2(test2Arr1, test2Arr2) === [2, 4, 8, 10]) {
        completedTests++;
    }
    if (myFunc3(test3Arr1, test3Arr2) === [2, 4, 8, 10]) {
        completedTests++;
    }
    if (myFunc4(test4Arr1, test4Arr2) === [3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101, 103, 105, 107, 109, 111, 113, 115, 117, 119, 121, 123, 125, 127, 129, 131, 133, 135, 137, 139, 141, 143, 145, 147, 149, 151, 153, 155, 157, 159, 161, 163, 165, 167, 169, 171, 173, 175, 177, 179, 181, 183, 185, 187, 189, 191, 193, 195, 197, 199, 201]) {
        completedTests++;
    }

    console.log(`Function 1 completed ${completedTests} out of 4 tests`);
    return completedTests;

}

const testFunc2 = () => {
    const test1Arr = [1, 2, 3, 4, 5];
    const test1Obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

    const test2Arr = [1, 2, 3, 4, 5];
    const test2Obj = { a: 1, b: 2, c: 3, d: 4, e: "5", f: new Date() };

    const test3Arr = [1, 2, 3, 4, "5", new Date(), NaN];
    const test3Obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 };

    const test4Arr = [ "3", "4", "5", new Date(), NaN];
    const test4Obj = null;

    let completedTests = 0;

    if (myFunc2(test1Arr, test1Obj) === 30) {
        completedTests++;
    }
    if (myFunc2(test2Arr, test2Obj) === 25) {
        completedTests++;
    }
    if (myFunc2(test3Arr, test3Obj) === 38) {
        completedTests++;
    }
    if (myFunc2(test4Arr, test4Obj) === 0) {
        completedTests++;
    }

    console.log(`Function 2 completed ${completedTests} out of 3 tests`);
    return completedTests;

}

const testFunc3 = () => {
    const test1Arr = [1, 2, 3, 4, 5];
    const test2Arr = ["1",2, NaN, new Date(), true, 3]
    const test3Arr = ["1",2, NaN, new Date(), true, 3, {a:1, b:2, c:3}]

    let completedTests = 0;
    if (myFunc3(test1Arr) === 1) {
        completedTests++;
    }
    if (myFunc3(test2Arr) === 5) {
        completedTests++;
    }
    if (myFunc3(test3Arr) === 6) {
        completedTests++;
    }

    console.log(`Function 3 completed ${completedTests} out of 3 tests`);
    return completedTests;

}

const testFunc4 = () => {
    const test1Obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const test1Obj2 = { a: 1, b: 2, c: 3, d: 4, e: 5 };

    const test2Obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const test2Obj2 = { a: 1, b: 2, c: 3, d: 4, e: "5" };

    const test3Obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const test3Obj2 = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };

    const test4Obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const test4Obj2 = null;

    let completedTests = 0;

    if (myFunc4(test1Obj1, test1Obj2) === true) {
        completedTests++;
    }
    if (myFunc4(test2Obj1, test2Obj2) === false) {
        completedTests++;
    }
    if (myFunc4(test3Obj1, test3Obj2) === false) {
        completedTests++;
    }
    if (myFunc4(test4Obj1, test4Obj2) === false) {
        completedTests++;
    }

    console.log(`Function 4 completed ${completedTests} out of 4 tests`);
    return completedTests;
}

const testFunc5 = async () => {
    let data = null;
    const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
    data = await res.json();

    let completedTests = 0;

    if (data.title === myFunc5()) {
        completedTests++;
    }

    console.log(`Function 5 completed ${completedTests} out of 1 tests`);
    return completedTests;

}

const testAsyncFunc5 = async () => {
    let data = null;
    const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
    data = await res.json();

    let completedTests = 0;

    if (data.title === myAsyncFunc5()) {
        completedTests++;
    }

    console.log(`Async function 5 completed ${completedTests} out of 1 tests`);
    return completedTests;
}

let completedTests = 0;

completedTests += testFunc1();
completedTests === 4 ? completedTests += testFunc2() : completedTests;
completedTests === 8 ? completedTests += testFunc3() : completedTests;
completedTests === 11 ? completedTests += testFunc4() : completedTests;
completedTests === 15 ? completedTests += testFunc5() : completedTests;
completedTests === 16 ? completedTests += testAsyncFunc5() : completedTests;

