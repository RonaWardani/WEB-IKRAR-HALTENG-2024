// navbar 

const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function(){
  console.log(window.scrollY);
  if(window.scrollY > 1) {
    navbar.classList.replace('bg-transparent', 'nav-color');
  } else if (window.scrollY <= 0) {
    navbar.classList.replace('nav-color', 'bg-transparent')
  }

});


// profil paslon

function showDetails(role) {
  let title, content;
  if (role === 'bupati') {
      title = "Dr. Ikram M Sangadji, M.Si";
      content = "Dr. Ikram M. Sangadji, M.Si saat ini menjabat sebagai PJ Bupati Kabupaten Halmahera Tengah";
  } else if (role === 'wakil') {
      title = "Ir. Arief Jalaludin, MT";
      content = "Ir. Arief Jalaludin, MT saat ini menjabat sebagai Kepala Dinas PUPR Kabupaten Halmahera Tengah";
  }

  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalBody').innerText = content;
  var profileModal = new bootstrap.Modal(document.getElementById('profileModal'));
  profileModal.show();
}



// Kebijakan



document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.myCard');
    const maxCardsToShow = 4; // Number of cards to show initially
    let hiddenCards = [];
  
    // Hide cards exceeding the maxCardsToShow limit
    cards.forEach((card, index) => {
      if (index >= maxCardsToShow) {
        card.classList.add('hidden');
        hiddenCards.push(card);
      }
    });
  
    // Show hidden cards when "Show More" button is clicked
    document.getElementById('showMoreButton').addEventListener('click', function() {
      hiddenCards.forEach(card => card.classList.remove('hidden'));
      hiddenCards = [];
      this.classList.add('hidden'); // Hide the "Show More" button after showing all cards
      document.getElementById('hideButton').classList.remove('hidden'); // Show the "Hide" button
    });
  
    // Hide extra cards when "Hide" button is clicked
    document.getElementById('hideButton').addEventListener('click', function() {
      cards.forEach((card, index) => {
        if (index >= maxCardsToShow) {
          card.classList.add('hidden');
          hiddenCards.push(card);
        }
      });
      this.classList.add('hidden'); // Hide the "Hide" button after hiding the extra cards
      document.getElementById('showMoreButton').classList.remove('hidden'); // Show the "Show More" button
    });
  });



  // kontak
  document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icons a');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            icon.classList.add('hovered');
        });
        
        icon.addEventListener('mouseleave', function() {
            icon.classList.remove('hovered');
        });
    });
});