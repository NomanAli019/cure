function movetohome(){
    window.location.href = "/";
}
var dropdownGlobalArray = [];
// THE CORDINATES FOR FINDING A DOCTORS 
$(document).ready(function(){
    $('.cities-dropdown').on('click', function () {
        // Get the text of the clicked item
        var clickedcity = $(this).text();
        console.log(clickedcity);
        dropdownGlobalArray[0] = clickedcity;
        checkBothDropdwon(); 
    });
    $('.specialtie-dropdown').on('click' , function(){
        var clickedsepecility = $(this).text();
        console.log( clickedsepecility);
        dropdownGlobalArray[1] = clickedsepecility;
        checkBothDropdwon();
    });

    $('.diseases-get').on('click' , function(){
        var checkDiseases = $(this).text();
        console.log(checkDiseases);
    });
    $('.symptom-get').on('click',function(){
        var checkSymptoms = $(this).text();
        console.log(checkSymptoms);
    });

});

function checkBothDropdwon(){
    var searchbtn = document.getElementById('searchSubmitBtn');
    if (dropdownGlobalArray[0] && dropdownGlobalArray[1]){
        
        searchbtn.disabled = false;
    }
    else{
        alert("YOU MUST SELECT A CITY AND A DOCTOR SPECILITY TO FIND A NEAR BY DOCTOR")
        searchbtn.disabled = true;
    }
}

function movetodoctorpage(){
    var city = dropdownGlobalArray[0];
    var speciality = dropdownGlobalArray[1];
    page = 1
    window.location.href="/doctorsinfo/" + city+"/"+speciality+"/"+page;
}



function loadMoreDoctors() {
    
    var cityValue = document.getElementById('doctorcordinates').innerText;
    var specialityValue = document.getElementById('doctorcordinates2').innerText;
    var pageno = parseInt(document.getElementById('doctorcordinates3').innerText);
    load = pageno+1;
    console.log(cityValue )
    console.log(load)
    window.location.href="/doctorsinfo/" + cityValue+"/"+specialityValue+"/"+load;
    // Append the new doctors to the list
   
}

function movetoservicepage(){
    window.location.href="/services";
}

function movetoaboutpage(){
    window.location.href="/about"
}

function movetologin(){
    window.location.href="/login"
}