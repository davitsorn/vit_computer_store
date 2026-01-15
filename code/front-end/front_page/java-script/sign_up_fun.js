        function register(){
         const email  = document.getElementById("email").value.trim();
        const password  = document.getElementById("password").value.trim();
        const  re_password = document.getElementById("re_password").value.trim();

        if(email === "" || !email.endsWith("@gmail.com") || password === ""  || re_password != password){
            alert  ("password username validate!")
        }
        
        else{
            alert ("Register succesfull!")
            window.location.href=("../../store/html/main-page/home.html");
    return 0;
        }
    }