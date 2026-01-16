// Offer Bar
var offerBar = document.querySelector(".offer-bar")
document.getElementById("offer-close").addEventListener("click", function () {
    offerBar.style.display = "none"
})

// Side Nav Bar
var sideNavMenu = document.getElementById("side-navbar-activate")
var sideNavBar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function () {
    sideNavBar.style.marginLeft = "0px"
})
document.getElementById("side-navbar-close").addEventListener("click", function () {
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})

// Selectors for filter checkboxes and search input
const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
const searchInput = document.getElementById('searchInput');
const products = document.querySelectorAll('.product');

// Event listener for search input
searchInput.addEventListener('keyup', filterProducts);

// Event listeners for each filter checkbox
filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeFilters = Array.from(filterCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value.toLowerCase());

    products.forEach(product => {
        const productName = product.querySelector('h1').textContent.toLowerCase();
        const productTags = product.getAttribute('data-tags').toLowerCase().split(',');

        // Check if product name matches the search term
        const matchesSearch = productName.includes(searchTerm);

        // Check if product matches any active filters
        const matchesFilters = activeFilters.every(filter => productTags.includes(filter));

        // Display product if it matches search term and all active filters, or if no filters are selected
        if (matchesSearch && (matchesFilters || activeFilters.length === 0)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
