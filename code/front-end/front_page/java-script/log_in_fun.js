  function logIn (){
        const email  = document.getElementById("email").value.trim();
        const password  = document.getElementById("password").value.trim();

        if(email === "" || !email.endsWith("@gmail.com") || (password .length<7)){
            alert  ("password username validate!")
        }
        
        else{
            window.location.href=("/code/front-end/store/html/main-page/home.html");
    return 0;
        }
        
        }

    

    function signUp (){
        window.location.href="/code/front-end/front_page/html/signUp.html";
        }