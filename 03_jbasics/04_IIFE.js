// Immediately  Invoked Function Expressions (IIFE)
//function which is exicuted immidiatly(global scope ke polluton se problem hoti hai usko hutane ke liye hum iife use kerte hai)
(function chai() {
    console.log(`DB CONNECTED`);
})();
//name iife

((name) => {
    console.log(`DE CONNECTED TWO ${name}`);
})("aakash")
