// Display an alert after 3 seconds
setTimeout(function() {
    alert("Selamat datang di toko online kami!");
}, 3000);

// Define variables for changing hero text color
const heroText = document.querySelector("#hero h2");
const colors = ["#FF5733", "#33FF57", "#3357FF"]; // Fixed color codes and quotes
let colorIndex = 0;

function changeHeroTextColor() {
    heroText.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Fixed typo
}

// Change color every 2 seconds
setInterval(changeHeroTextColor, 2000);

// Define variables for changing hero background images
let currentImageIndex = 0;
const images = ['sepatu1.jpg', 'sepatu2.jpg', 'sepatu3.jpg']; // Fixed image array

function changeHeroImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Fixed typo
    document.querySelector(
        "#hero"
    ).style.backgroundImage = `url('${images[currentImageIndex]}')`; // Fixed template string syntax
}

// Change image every 2 seconds
setInterval(changeHeroImage, 2000);

// Add zoom effect to product images
const productImages = document.querySelectorAll(".product-card img"); // Fixed method name

productImages.forEach((image) => {
    image.addEventListener("click", () => {
        image.style.transform = "scale(1.5)";
        image.style.transition = "transform 0.5s"; // Fixed typo
    });
    image.addEventListener("mouseleave", () => { // Fixed typo
        image.style.transform = "scale(1)";
    });
});

// Add click event to CTA buttons
document.querySelectorAll(".cta").forEach(function (button) { // Fixed method name
    button.addEventListener("click", function (event) { // Fixed syntax
        event.preventDefault(); // Fixed typo
        alert("Terima kasih telah membeli produk ini");
    });
});

// Add scroll-to-top button
const scrollToBtn = document.createElement("button");
scrollToTopBtn.textContent = "^"; // Fixed property name
scrollToTopBtn.id = "scrollToTopBtn";
document.body.appendChild(scrollToTopBtn);

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener("scroll", () => { // Fixed syntax
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Scroll to the top when the button is clicked
scrollToBtn.addEventListener("click", () => { // Fixed syntax
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


