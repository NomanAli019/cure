// document.addEventListener('DOMContentLoaded', function() {
//     const input = document.getElementById('fruitInput');
//     const dropdownList = document.querySelector('.dropdown-list');

//     input.addEventListener('focus', function() {
//         dropdownList.style.display = 'block';
//     });

//     input.addEventListener('blur', function() 
//     {
//         setTimeout(function() 
//         {
//             dropdownList.style.display = 'none';
//         }, 200);
//     });

//     dropdownList.addEventListener('click', function(event) 
//     {
//         if (event.target.tagName === 'LI') 
//         {
//             input.value = event.target.textContent;
//             dropdownList.style.display = 'none';
//         }
//     });
// });


function validateuser() {
    var loginemail = document.getElementById("loginemail").value;
    var loginpass = document.getElementById("loginpwd").value;
    window.location.href ="/patientlogin/asad@gmail.com/1234";
}





document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sect2").style.display = "none";
});


function opensignuppage() {
    document.getElementById("sect11").style.display = "none";

    document.getElementById("sect2").style.display = "block";   
}


function movetologin(){

    document.getElementById("sect2").style.display = "none";

    document.getElementById("sect11").style.display = "block";   
}
var gender = "";
function takegender(selectedGender) {
    gender = selectedGender;

}
var birthdate = "";
function getBirthdate() {
    birthdate = document.getElementById("birthdateid").value;

}

function getsignupdata(){
    var name = document.getElementById("FirstName").value ;
    var lastname = document.getElementById("LastName").value ;
    var phone = document.getElementById("Phone").value ;
    var homeaddress = document.getElementById("Address").value ;
    var soscontactname = document.getElementById("soscontactname").value ;
    var soscontactnumber = document.getElementById("soscontactnumber").value ;
    var medhistory = document.getElementById("Medhistory").value ;
    
    var email = document.getElementById("eml").value ;
    var password = document.getElementById("password").value ;
    var retypepassword = document.getElementById("Reppswrd").value ;

    console.log(name , " " , lastname , " " , birthdate  , " ",phone," ",homeaddress," ",soscontactname," ",soscontactnumber," ",medhistory , " " , gender, " ",email," ",password, " ",retypepassword," "  );

    if (password == retypepassword ){
        var signup_from_Data = [
            name,
           lastname,
           birthdate,
           gender,
            phone,
            homeaddress,
            medhistory,
            soscontactname,
            soscontactnumber,
            email,
          password
        ];
    }
    else{
        document.getElementById("password_alert").innerHTML = "Retyped password do not match the password!!!";
    }

    if (name != "" && lastname != "" && birthdate != "" && phone != "" && homeaddress != "" && soscontactname != "" && soscontactnumber != "" && medhistory != "" && gender != "" && email != "" && password != "" && retypepassword != ""){
        console.log("all data recived !");
        var jsondata = JSON.stringify(signup_from_Data);
        window.location.href = "/insertpatientdata?signupdata=" + encodeURIComponent(jsondata);
        
    }
    else{
        alert("there is a missing input in the form!");
    }

}