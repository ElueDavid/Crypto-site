// Element selections
const navHam = document.querySelector(".navham");
const sideBar = document.querySelector(".dashboard-sidebar");
const logoutLink = document.querySelector(".logout-link");
const lcBg = document.querySelector(".lc-background");
const lcLinks = document.querySelectorAll(".lc-link");

// Toggle sidebar visibility
navHam.addEventListener("click", () => {
    sideBar.classList.toggle("show");
});

// Show the logout modal on click
logoutLink.addEventListener("click", () => {
    lcBg.classList.add("active");
    console.log("Modal opened"); // Debugging
});

// Close the logout modal when any link inside is clicked
lcLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.stopPropagation(); // Stop event bubbling if needed
        lcBg.classList.remove("active");
        console.log("Modal closed"); // Debugging
    });
});
