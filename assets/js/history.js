// Get elements
const detailsButtons = document.querySelectorAll('.details-btn');
const modal = document.getElementById('details-modal');
const modalText = document.querySelector('.modal-text');
const closeBtn = document.querySelector('.close-btn');

// Show modal with transaction details
detailsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const transactionDetails = button.getAttribute('data-transaction');
    modalText.textContent = transactionDetails;
    modal.classList.add('show');
  });
});

// Close the modal
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('show');
  }
});
