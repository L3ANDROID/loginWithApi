let txtuser = document.querySelector(".txtuser");
let txtpass = document.querySelector(".txtpass");
let submit = document.querySelector(".submit");

if(window.localStorage){
    // console.log("Supported...")

    //valores ficticios del usuario
    localStorage.setItem("email", "1525@gmail.com")
    localStorage.setItem("pass", "12134")

    let user = localStorage.getItem("email")
    let pass = localStorage.getItem("pass")

    let message = document.querySelector(".message");

    submit.addEventListener("click", () => {
        if(user == txtuser.value && pass == txtpass.value){

            handleSubmit();

            

            async function handleSubmit () {
                
                let data = {email: txtuser.value, password: txtpass.value}
                console.log(JSON.stringify(data))
                // Make the login API call
                const response = await fetch(`http://api-playtec.herokuapp.com/signin`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                //...
                // Extract the JWT from the response
                const token = await response.json()
                console.log(token)
              }

            message.innerHTML = "Login exitoso!!"
        }else {
            message.innerHTML = "Email o Password invalidos."
        }
    })
}else{
    console.log("Not Supported...")
}