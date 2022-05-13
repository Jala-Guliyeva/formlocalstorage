// let allForm=document.querySelectorAll(".form");
// localStorage.setItem("form",form);

// JSON.parse(localStorage.getItem(".form"));
// allForm.forEach((form) => {
//   listBuilder(allForm);
// });
// let inputEmail= document.getElementById("email");
// localStorage.setItem("email", inputEmail.value);
// let storedValue = localStorage.getItem("email");


const tbody = document.querySelector("tbody");

function saveData()
{
let users = [];   

let user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
}

if(localStorage.getItem("users")){
    
    users = [...JSON.parse(localStorage.getItem("users")), user];
}else{
    users.push(user);
}

// let email,password,form;
// email=document.getElementById("email").value;

// password=document.getElementById("password").value;

localStorage.setItem("users", JSON.stringify(users))

tbody.innerHTML += `
    <tr>
        <td>${user.email}</td>
        <td>${user.password}</td>
    </tr>
`

// localStorage.setItem("email",email)
// localStorage.setItem("password",password)

}

    
        window.onload=function(e){
            if(localStorage.getItem("users")){
                let users = JSON.parse(localStorage.getItem("users"));
                users.forEach(user =>{
                    tbody.innerHTML += `
                    <tr>
                        <td>${user.email}</td>
                        <td>${user.password}</td>
                    </tr>
                    `
                })
            }
    
        }
    






