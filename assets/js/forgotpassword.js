const otpInputs = document.querySelectorAll('.otp-box');
const sendCodeBtn = document.getElementById('send-code-btn');
const timerText = document.getElementById('timer');
const resendText = document.getElementById('resend-text');

let countdown;
let timer = 60; // Set the timer to 60 seconds

// Function to start the countdown timer
function startTimer() {
    timer = 60; // Reset timer to 60 seconds
    resendText.style.display = 'block'; // Show resend text
    sendCodeBtn.disabled = true; // Disable button during countdown

    countdown = setInterval(() => {
        timer--; // Decrement the timer
        timerText.textContent = timer; // Update the displayed timer

        // Stop the countdown when timer reaches 0
        if (timer <= 0) {
            clearInterval(countdown);
            resendText.innerHTML = "You can now <b>resend the code</b>."; // Update message
            sendCodeBtn.disabled = false; // Enable button again
        }
    }, 1000);
}

// Enable OTP inputs and start the timer on button click
sendCodeBtn.addEventListener('click', () => {
    otpInputs.forEach(input => input.disabled = false); // Enable inputs
    otpInputs[0].focus(); // Focus the first input
    startTimer(); // Start the timer
});

// Handle OTP input field navigation
otpInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus(); // Move to the next input if filled
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index > 0 && e.target.value === '') {
            otpInputs[index - 1].focus(); // Move back on backspace if empty
        }
    });
});

// Toggle password visibility
const togglePassword1 = document.getElementById('togglePassword1');
const togglePassword2 = document.getElementById('togglePassword2');
const newPassword = document.getElementById('new-password');
const confirmPassword = document.getElementById('confirm-password');

togglePassword1.addEventListener('click', () => {
    const type = newPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    newPassword.setAttribute('type', type);
    togglePassword1.classList.toggle('fa-eye-slash');
    togglePassword1.classList.toggle('fa-eye');
});

togglePassword2.addEventListener('click', () => {
    const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', type);
    togglePassword2.classList.toggle('fa-eye-slash');
    togglePassword2.classList.toggle('fa-eye');
});
