// signupform

const form = document.getElementById("signupForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const firstName=document.getElementById("firstName").value;
const lastName=document.getElementById("lastName").value;
const email=document.getElementById("email").value;
const phone=document.getElementById("phone").value;
const password=document.getElementById("password").value;
const confirmPassword=document.getElementById("confirmPassword").value;
const address=document.getElementById("address").value;

if(password!==confirmPassword){

alert("Passwords do not match!");

return;

}

const user={

firstName:firstName,
lastName:lastName,
email:email,
phone:phone,
password:password,
address:address

};

localStorage.setItem("user",JSON.stringify(user));

alert("Account Created Successfully!");

window.location.href="login.html";

});

}

const facebookSignup = document.getElementById("facebookSignup");

if (facebookSignup) {

    facebookSignup.addEventListener("click", function () {

        localStorage.setItem("userEmail", "facebook_user");
        localStorage.setItem("userProvider", "facebook");

        alert("Account created with Facebook!");

        window.location.href = "login.html";

    });

}

const googleSignup = document.getElementById("googleSignup");

if (googleSignup) {

    googleSignup.addEventListener("click", function () {

        localStorage.setItem("userEmail", "google_user");
        localStorage.setItem("userProvider", "google");

        alert("Account created with Google!");

        window.location.href = "login.html";

    });

}

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("loginEmail").value;
const password=document.getElementById("loginPassword").value;

const user=JSON.parse(localStorage.getItem("user"));

if(user==null){

alert("No account found!");

return;

}

if(email===user.email && password===user.password){

alert("Welcome "+user.firstName+"!");

window.location.href="index.html";

}
else{

alert("Incorrect Email or Password");

}

});
}




const facebookLogin = document.getElementById("facebookLogin");

if (facebookLogin) {

    facebookLogin.addEventListener("click", function () {

        const provider = localStorage.getItem("userProvider");

        if (provider === "facebook") {

            alert("Login Successful!");

            window.location.href = "index.html";

        } else {

            alert("No Facebook account found. Please sign up first.");

        }

    });

}

const googleLogin = document.getElementById("googleLogin");

if (googleLogin) {

    googleLogin.addEventListener("click", function () {

        const provider = localStorage.getItem("userProvider");

        if (provider === "google") {

            alert("Login Successful!");

            window.location.href = "index.html";

        } else {

            alert("No Google account found. Please sign up first.");

        }

    });

}


// Terms Modal
const termsLink = document.getElementById("termsLink");
const termsModal = document.getElementById("termsModal");
const closeTerms = document.getElementById("closeTerms");

if (termsLink) {
    termsLink.addEventListener("click", function(e){
        e.preventDefault();
        termsModal.classList.add("show");
    });

    closeTerms.addEventListener("click", function(){
        termsModal.classList.remove("show");
    });
}

// Privacy Modal
const privacyLink = document.getElementById("privacyLink");
const privacyModal = document.getElementById("privacyModal");
const closePrivacy = document.getElementById("closePrivacy");

if (privacyLink) {
    privacyLink.addEventListener("click", function(e){
        e.preventDefault();
        privacyModal.classList.add("show");
    });

    closePrivacy.addEventListener("click", function(){
        privacyModal.classList.remove("show");
    });
}