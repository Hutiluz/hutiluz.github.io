document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidenav a');
    const sidenav = document.getElementById("sidenav");
    const menuToggle = document.getElementById("menu-toggle");

    // Navigaatio smooth scroll
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();  
            const targetId = this.getAttribute('href').substring(1);  
            const targetSection = document.getElementById(targetId);  

            window.scrollTo({
                top: targetSection.offsetTop, 
                behavior: 'smooth' 
            });

            // Close sidenav on link click
            if (window.innerWidth <= 768) {
                closeSidenav();
            }
        });
    });

    // Hakee napin
    const myButton = document.getElementById("myBtn");

    //Näyttää napin kun vieritetään alas
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
            myButton.style.display = "block";  // Näyttää napin
        } else {
            myButton.style.display = "none";  // Piilottaa napin
        }
    }

    // Palauttaa sivun alkuun
    myButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,  
            behavior: 'smooth'  
        });
    });

    // Hampurilaisvalikko
    menuToggle.onclick = function() {
        sidenav.classList.toggle('open'); // Avaa tai sulje navigointipalkki
    };

    function closeSidenav() {
        sidenav.classList.remove('open'); // Sulje navigointipalkki
    }
});
