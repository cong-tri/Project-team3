const mainImage = document.getElementById("main-image");
    const images = document.querySelectorAll(".product__image");

    images.forEach((image) => {
        image.addEventListener("click", (event) => {
            mainImage.src = event.target.src;
            document
                .querySelector(".product__image--active")
                .classList.remove("product__image--active");
                event.target.classList.add("product__image--active");
        });
    });