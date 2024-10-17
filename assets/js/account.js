document.addEventListener("DOMContentLoaded", () => {
    const tabsNav = document.querySelector(".tabs-nav");
    const tabLinks = document.querySelectorAll(".tab-link");
    const contentSections = document.querySelectorAll(".content-section");
    const backButtons = document.querySelectorAll(".back-btn");
    const tabContent = document.querySelector(".tab-content");
  
    // Reset all content on page load for mobile
    resetContent();
  
    tabLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const target = link.dataset.target;
        showContent(target);
  
        // On mobile, hide the navigation and show the content
        if (window.innerWidth <= 768) {
          tabsNav.classList.add("hidden");
          tabContent.classList.add("active");
        }
      });
    });
  
    backButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabsNav.classList.remove("hidden");
        tabContent.classList.remove("active");
      });
    });
  
    function showContent(target) {
      tabLinks.forEach((link) =>
        link.classList.toggle("active", link.dataset.target === target)
      );
  
      contentSections.forEach((section) =>
        section.classList.toggle("active", section.id === target)
      );
    }
  
    function resetContent() {
      tabLinks.forEach((link) => link.classList.remove("active"));
      contentSections.forEach((section) => section.classList.remove("active"));
    }
  
    // Ensure tabs are shown properly on window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 850) {
        tabsNav.classList.remove("hidden");
        tabContent.classList.add("active");
      } else {
        resetContent();
        tabContent.classList.remove("active");
      }
    });
  });




  
// accordion 
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const openItem = document.querySelector('.accordion-header.active');
  
      // Close any previously open accordion
      if (openItem && openItem !== header) {
        openItem.classList.remove('active');
        openItem.nextElementSibling.style.maxHeight = 0;
      }
  
      // Toggle the clicked accordion
      header.classList.toggle('active');
      const content = header.nextElementSibling;
  
      if (header.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = 0;
      }
    });
  });
  
//   accordion end


// change password
// Select all visibility toggle icons and add click event listeners
const toggleVisibilityIcons = document.querySelectorAll('[class^="icon-toggle"]');

toggleVisibilityIcons.forEach((icon) => {
  icon.addEventListener('click', function () {
    const input = document.getElementById(this.dataset.input);
    const isPassword = input.getAttribute('type') === 'password';

    // Toggle input type
    input.setAttribute('type', isPassword ? 'text' : 'password');

    // Toggle icon between eye and eye-slash
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
  });
});

// change password end



// create pin

document.getElementById('pinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const pin = document.getElementById('transaction-pin').value;
    const confirmPin = document.getElementById('confirm-pin').value;
    const errorMessage = document.getElementById('error-message');
  
    errorMessage.style.display = 'none'; // Reset error message visibility
  
    // Validate PIN
    if (pin.length !== 6 || isNaN(pin)) {
      errorMessage.textContent = 'PIN must be exactly 6 digits.';
      errorMessage.style.display = 'block';
      return;
    }
  
    if (pin !== confirmPin) {
      errorMessage.textContent = 'PINs do not match.';
      errorMessage.style.display = 'block';
      return;
    }
  
    // Proceed with form submission or further processing
    alert('PIN created successfully!'); // Placeholder for actual submission
  });
  

// create pin end