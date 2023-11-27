"use strict";

let liczydlo = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    }
};

liczydlo.read();
    console.log(liczydlo.sum());
    console.log(liczydlo.mul());
   
    