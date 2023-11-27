"use strict";

let user = {} //a
    user.name = "John"; //b
    user.surname = "Smith"; //c
    user.name = "Pete"; //d
    delete user.name; //e

    function isEmpty(obj) {   //f
        for (let key in obj) {
          return false;
        }
        return true;
      }
      alert(isEmpty(user));
