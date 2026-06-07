window.addEventListener('DOMContentLoaded', function() {
            
            //memilih elemen untuk class yang akan di animasikan
            const daftarSection = document.querySelectorAll(".fadeIn");

            //jeda animasi
            setTimeout(function() {
                
               //Loop Function
                daftarSection.forEach(function(section) {
                    
                    section.classList.add("tampil"); // pemberian class untuk elemen
                });

            }, 300); // Jeda 0.3 detik

        });