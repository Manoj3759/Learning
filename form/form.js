let btn = document.getElementById('button')
let first_name = document.getElementById('formGroupExampleInput')
let Last_name = document.getElementById('formGroupExampleLast')
let number = document.getElementById('formGroupExampleInput2')
let email = document.getElementById('exampleInputEmail1')
let password = document.getElementById('exampleInputPassword1')


btn.addEventListener(
    "click",(e)=>{

        e.preventDefault()

        let firstNameValue = first_name.value;
        let lastNameValue = Last_name.value;
        let numberValue = number.value;
        let emailValue = email.value;
        let passwordValue = password.value;

        console.log({firstNameValue,lastNameValue,numberValue,emailValue,passwordValue})
    }
    
  )
  
  dispatchEven

