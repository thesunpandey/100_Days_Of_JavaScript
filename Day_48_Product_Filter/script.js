// Select all elements with the class 'btn' and 'store-product'
const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".store-product");

// Loop through each button and add a click event listener
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    // Remove the 'active' class from the currently active button
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    
    // Add the 'active' class to the clicked button
    this.className += " active";

    // Get the value of the 'data-filter' attribute from the clicked button
    const filter = e.target.dataset.filter;

    // Filter the products based on the clicked button's 'data-filter' value
    storeProducts.forEach((product) => {
      if (filter === "all") {
        // If 'all' is selected, show all products
        product.style.display = "block";
      } else if (product.classList.contains(filter)) {
        // If the product has the class matching the filter, show it
        product.style.display = "block";
      } else {
        // Otherwise, hide the product
        product.style.display = "none";
      }
    });
  });
}

// SEARCH FILTER
// Select the search input and all product name elements
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");
const noResult = document.querySelector(".no-result");

// Add a keyup event listener to the search input
search.addEventListener("keyup", filterProducts);

function filterProducts(e) {
  // Get the search input value and convert it to lowercase
  const text = e.target.value.toLowerCase();

  // Iterate over each product name
  productName.forEach((product) => {
    // Get the text content of the product name
    const item = product.textContent;

    // Check if the product name includes the search text
    if (item.toLowerCase().indexOf(text) != -1) {
      // If it does, show the product and hide the 'no result' message
      product.parentElement.parentElement.style.display = "block";
      noResult.style.display = "none";
    } else {
      // If it doesn't, hide the product and show the 'no result' message
      product.parentElement.parentElement.style.display = "none";
      noResult.style.display = "block";
    }
  });
}