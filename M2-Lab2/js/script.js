window.addEventListener("load",()=>{
    "use strict";   
    window.document.getElementById("lab2-form").addEventListener("submit", (e)=> {
        e.preventDefault();
        window.console.log("ID: " + window.document.getElementById("id").value);
        window.console.log("Name: " + window.document.getElementById("fullname").value);
        window.console.log("Extension: " + window.document.getElementById("exts").value);
        window.console.log("Email: " + window.document.getElementById("email").value);
        window.console.log("Department: " + window.document.getElementById("dept").value);      
    });
});