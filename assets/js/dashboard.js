document.querySelectorAll('.hide-ac').forEach((btn) => {
    btn.addEventListener('click', function () {
      const assetBalance = this.closest('.asset-balance');
      const digitElement = assetBalance.querySelector('.digit');
      const icon = this.querySelector('i');
  
      // Toggle between showing **** and the original value
      if (digitElement.dataset.originalValue) {
        // If original value is stored, switch back to the original number
        digitElement.textContent = digitElement.dataset.originalValue;
        digitElement.removeAttribute('data-original-value');
        icon.classList.replace('fa-eye-slash', 'fa-eye'); // Change icon to eye
      } else {
        // Store the original value and show ****
        digitElement.dataset.originalValue = digitElement.textContent;
        digitElement.textContent = '****';
        icon.classList.replace('fa-eye', 'fa-eye-slash'); // Change icon to eye-slash
      }
    });
  });
  


  // Select elements
const buyButton = document.querySelector('.transact-now span:nth-of-type(1)');
const sellButton = document.querySelector('.transact-now span:nth-of-type(2)');

const buyModalBg = document.querySelector('.buy-modal-bg');
const sellModalBg = document.querySelector('.sell-modal-bg');

const buyModalClose = buyModalBg.querySelector('.fa-circle-xmark');
const sellModalClose = sellModalBg.querySelector('.fa-circle-xmark');

const buySubmitButton = buyModalBg.querySelector('form button[type="submit"]');
const sellSubmitButton = sellModalBg.querySelector('form button[type="submit"]');

// Hide modals initially
buyModalBg.style.display = 'none';
sellModalBg.style.display = 'none';

// Function to open modal
function openModal(modal) {
  modal.style.display = 'flex';
}

// Function to close modal
function closeModal(modal) {
  modal.style.display = 'none';
}

// Event listeners to open modals
buyButton.addEventListener('click', () => openModal(buyModalBg));
sellButton.addEventListener('click', () => openModal(sellModalBg));

// Event listeners to close modals
buyModalClose.addEventListener('click', () => closeModal(buyModalBg));
sellModalClose.addEventListener('click', () => closeModal(sellModalBg));

// Close modals on submit buttons (optional if needed)
buySubmitButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form submission (optional)
  closeModal(buyModalBg);
});

sellSubmitButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form submission (optional)
  closeModal(sellModalBg);
});