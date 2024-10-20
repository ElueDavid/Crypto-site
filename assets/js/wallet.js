// Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const withdrawBtn = document.getElementById('withdraw-btn');
    const fundBtn = document.getElementById('fund-btn');
    const fwmWithdrawBtn = document.getElementById('fwm-withdraw-btn');
    const fwmFundBtn = document.getElementById('fwm-fund-btn');
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    const modals = document.querySelectorAll('.crypto-modal');

    // Open specific modal
    function openModal(modalId) {
        document.getElementById(modalId).classList.remove('hidden');
    }

    // Close specific modal
    function closeModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
    }

    // Attach event listeners to open modals
    withdrawBtn.addEventListener('click', () => openModal('withdraw-modal'));
    fundBtn.addEventListener('click', () => openModal('fund-modal'));

    // Open modals from fiat wallet modal buttons
    fwmWithdrawBtn.addEventListener('click', () => openModal('withdraw-modal'));
    fwmFundBtn.addEventListener('click', () => openModal('fund-modal'));

    // Close modal when clicking cancel buttons
    modalCloseButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const modalId = e.target.getAttribute('data-modal');
            closeModal(modalId);
        });
    });

    // Close modal on any button click inside it
    modals.forEach((modal) => {
        modal.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                closeModal(modal.id);
            }
        });

        // Close modal when clicking outside the modal content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
});

// Existing tab switching logic

document.addEventListener('DOMContentLoaded', () => {
    const tab1Btn = document.getElementById('tab1-btn');
    const tab2Btn = document.getElementById('tab2-btn');
    const tabIndicator = document.querySelector('.tab-indicator');
    const tab1Content = document.getElementById('tab1-content');
    const tab2Content = document.getElementById('tab2-content');

    function switchTab(tabNumber) {
        if (tabNumber === 1) {
            tab1Btn.classList.add('active');
            tab2Btn.classList.remove('active');
            tab1Content.classList.remove('hidden');
            tab2Content.classList.add('hidden');
            tabIndicator.style.left = '0%';
        } else {
            tab2Btn.classList.add('active');
            tab1Btn.classList.remove('active');
            tab2Content.classList.remove('hidden');
            tab1Content.classList.add('hidden');
            tabIndicator.style.left = '50%';
        }
    }

    tab1Btn.addEventListener('click', () => switchTab(1));
    tab2Btn.addEventListener('click', () => switchTab(2));
});

// Wallet modal opening logic

document.addEventListener('DOMContentLoaded', () => {
    const walletCards = document.querySelectorAll('.wallet-card');
    const walletModal = document.getElementById('wallet-modal');

    // Open wallet modal
    walletCards.forEach(card => {
        card.addEventListener('click', () => {
            walletModal.classList.remove('hidden');
        });
    });

    // Close wallet modal logic
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    modalCloseButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const modalId = e.target.getAttribute('data-modal');
            closeModal(modalId);
        });
    });

    // Close wallet modal by clicking outside the content
    walletModal.addEventListener('click', (e) => {
        if (e.target === walletModal) {
            walletModal.classList.add('hidden');
        }
    });
});

// Get elements for fiat wallet modal
const fiatWalletCard = document.getElementById('fiatWalletCard');
const fwmBg = document.getElementById('fwmBg');
const closeModalBtn = document.getElementById('closeModalBtn');

// Function to open the modal
function openFiatWalletModal() {
    fwmBg.classList.remove('hidden');
}

// Function to close the modal
function closeFiatWalletModal() {
    fwmBg.classList.add('hidden');
}

// Event listeners for fiat wallet card modal
fiatWalletCard.addEventListener('click', openFiatWalletModal);
closeModalBtn.addEventListener('click', closeFiatWalletModal);
fwmBg.addEventListener('click', (event) => {
    if (event.target === fwmBg) {
        closeFiatWalletModal();
    }
});





const ctx = document.getElementById('cryptoChart').getContext('2d');

// Dummy data for demonstration purposes
const cryptoData = {
    labels: ['BTC/USDT', 'ETH/USDT', 'TON/USDT', 'LTC/USDT', 'XRP/USDT'],
    datasets: [{
        label: 'Price',
        data: [30000, 2000, 0.5, 150, 0.45], // Replace with real-time data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: true,
    }]
};

const cryptoChart = new Chart(ctx, {
    type: 'line', // You can change to 'bar', 'pie', etc.
    data: cryptoData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});





document.addEventListener('DOMContentLoaded', () => {
    const withdrawBtn = document.getElementById('crypto-withdraw-btn');
    const withdrawModal = document.getElementById('crypto-withdraw-modal');
    const closeModalButtons = document.querySelectorAll('.crypto-modal-close');
    const toggleBalanceVisibilityBtn = document.getElementById('crypto-toggle-balance-visibility');
    const balanceAmount = document.getElementById('crypto-balance-amount');
    const maxBalanceBtn = document.getElementById('crypto-max-balance-btn');
    const cryptoAddressInput = document.getElementById('crypto-address');

    // Open the withdraw modal
    withdrawBtn.addEventListener('click', () => {
        withdrawModal.classList.remove('hidden');
    });

    // Close modal functionality
    closeModalButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            withdrawModal.classList.add('hidden');
        });
    });

    // Toggle balance visibility with Font Awesome eye icon
    let balanceVisible = false;
    toggleBalanceVisibilityBtn.addEventListener('click', (event) => {
        balanceVisible = !balanceVisible;
        balanceAmount.style.display = balanceVisible ? 'inline' : 'none';
        toggleBalanceVisibilityBtn.innerHTML = balanceVisible ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>'; // Change icon based on visibility
        event.stopPropagation(); // Prevent the click from closing the modal
    });

    // Set max balance (for demonstration purposes, you can replace this with actual logic)
    maxBalanceBtn.addEventListener('click', () => {
        cryptoAddressInput.value = '0.001'; // Example max balance, replace with real data
    });
});







document.addEventListener('DOMContentLoaded', () => {
    const fundBtn = document.getElementById('crypto-funding-fund-btn');
    const fundModal = document.getElementById('crypto-funding-modal');
    const closeModalButtons = document.querySelectorAll('.crypto-funding-modal-close');
    const copyAddressBtn = document.getElementById('crypto-funding-copy-address-btn');
    const copyIndicator = document.getElementById('crypto-funding-copy-indicator');
    const fundAddress = document.getElementById('crypto-funding-address').innerText;

    // Open the fund wallet modal
    fundBtn.addEventListener('click', () => {
        fundModal.classList.remove('hiddenindicator');
        generateQRCode(fundAddress); // Generate QR code when modal opens
    });

    // Close modal functionality
    closeModalButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            fundModal.classList.add('hiddenindicator');
        });
    });

    // Copy the funding address to the clipboard
    copyAddressBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(fundAddress).then(() => {
            copyIndicator.classList.remove('hidden');
            setTimeout(() => {
                copyIndicator.classList.add('hidden');
            }, 2000); // Hide after 2 seconds
        });
    });
});

// Function to generate QR code
function generateQRCode(address) {
    $('#crypto-funding-qr-code').empty(); // Clear previous QR code
    $('#crypto-funding-qr-code').qrcode({
        text: address,
        width: 150,
        height: 150
    });
}