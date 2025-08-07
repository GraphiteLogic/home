// JavaScript for GraphiteLogic landing page

document.addEventListener("DOMContentLoaded", function () {
    // Form submission handling
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Basic validation
        if (!data.company || !data.role || !data.email) {
            alert("Please fill in all required fields.");
            return;
        }

        // Show success message (replace with actual form handling)
        showSuccessMessage();

        // You would typically send this data to your backend here
        console.log("Form submitted:", data);

        // Reset form
        form.reset();
    });

    // Success message display
    function showSuccessMessage() {
        const button = document.querySelector('button[type="submit"]');
        const originalText = button.textContent;

        button.textContent = "Thank You!";
        button.disabled = true;
        button.classList.add("btn-success");
        button.classList.remove("btn-primary");

        // Create and show success alert
        const alertDiv = document.createElement("div");
        alertDiv.className = "alert alert-success mt-3";
        alertDiv.innerHTML =
            "<strong>Thank you!</strong> We've received your insights and will be in touch soon.";

        const cardBody = document.querySelector(".card-body");
        cardBody.appendChild(alertDiv);

        // Reset button after 3 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.classList.add("btn-primary");
            button.classList.remove("btn-success");
            alertDiv.remove();
        }, 3000);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

    // Add animation on scroll for feature cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll(".col-md-4").forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
    });
});
