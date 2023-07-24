function criticalCode() {
    throw "throwing an exception";
}

function logError(theException) {
    console.log(theException);
}

console.log("\n********** try...catch **********");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

console.log("\n********** Throwing  in try...catch **********");

try {
    throw "An exception that is thrown every time";
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

console.log("\n********** try...catch...finally **********");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
} finally {
    console.log("Code that always will run");
}

function hello() {
    console.log("\n********** Throwing Exceptions **********");
}