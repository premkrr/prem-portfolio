{/* <script>
function opentab(event, tabname, section) {
    // Variables for tab links and contents specific to the section
    let tablinks, tabcontents;

    // Check if the event is for the 'about' section
    if (section === 'about') {
        // Select tab links and contents specifically for the 'about' section
        tablinks = document.querySelectorAll("#about .tab-links");
        tabcontents = document.querySelectorAll("#about .tab-contents");
    } 
    // Check if the event is for the 'skills' section
    else if (section === 'skills') {
        // Select tab links and contents specifically for the 'skills' section
        tablinks = document.querySelectorAll("#skills .title h2");
        tabcontents = document.querySelectorAll("#skills .tab-contents");
    }

    // Loop through all the tab links to remove the active-link class
    tablinks.forEach(tablink => {
        tablink.classList.remove("active-link");
    });

    // Loop through all the tab contents to remove the active-tab class
    tabcontents.forEach(tabcontent => {
        tabcontent.classList.remove("active-tab");
    });

    // Add the active class to the clicked tab link and the respective content
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

</script>
 */}





















{/* <script>

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

</script */}




// <script>

//     var sidemenu = document.getElementById("sidemenu");

//     function openmenu(){
//         sidemenu.style.right = "0";
//     }
//     function closemenu(){
//         sidemenu.style.right = "-200px";
//     }

// </script>





// <script>
//     window.addEventListener('scroll', function() {
//     var nav = document.querySelector('nav');
//     nav.classList.toggle('scrolled', window.scrollY > 50);
// });

// </script> 