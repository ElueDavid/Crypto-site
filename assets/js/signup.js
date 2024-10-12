const dropdown = document.getElementById('dropdown');
const dropdownList = document.getElementById('dropdown-list');
const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#password');

// Fetch African countries from REST Countries API
async function loadAfricanCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/region/africa');
        const countries = await response.json();

        // Sort countries alphabetically by name
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

        // Populate the dropdown list
        countries.forEach(country => {
            const option = document.createElement('div');
            option.innerHTML = `
                <img src="https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png" 
                     alt="${country.name.common} flag">
                ${country.name.common}
            `;
            option.addEventListener('click', () => {
                dropdown.textContent = country.name.common;
                dropdownList.style.display = 'none';
            });
            dropdownList.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching countries:', error);
        dropdown.textContent = 'Error loading countries';
    }
}

// Toggle dropdown visibility
dropdown.addEventListener('click', () => {
    dropdownList.style.display = dropdownList.style.display === 'none' ? 'block' : 'none';
});

// Load countries on page load
window.onload = loadAfricanCountries;



// password toggle section

togglePassword.addEventListener('click', function () {
    // Toggle the type attribute of the password input
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle the eye and eye-slash icons
    if (this.classList.contains('fa-eye-slash')) {
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    } else {
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    }
});

// password toggle section