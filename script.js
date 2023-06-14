document.addEventListener("DOMContentLoaded", function() {
  // Ajoutez un gestionnaire d'événement de clic pour le lien "Accueil"
  document.querySelector("a[href='#accueil']").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Ajoutez un gestionnaire d'événement de clic pour le lien "Services"
  document.querySelector("a[href='#services']").addEventListener("click", function(event) {
    event.preventDefault();
    const servicesSection = document.getElementById("services");
    const servicesSectionOffset = servicesSection.offsetTop;
    window.scrollTo({ top: servicesSectionOffset, behavior: 'smooth' });
  });

  // Ajoutez un gestionnaire d'événement de clic pour le lien "Contact"
  document.querySelector("a[href='#contact']").addEventListener("click", function(event) {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    const contactSectionOffset = contactSection.offsetTop;
    window.scrollTo({ top: contactSectionOffset, behavior: 'smooth' });
  });
});