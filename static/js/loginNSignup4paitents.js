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


document.addEventListener("DOMContentLoaded", function() {
    // Hide the section with ID "sect2" when the page loads
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


