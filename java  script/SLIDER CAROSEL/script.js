    const img = document.getElementById("media");
    const caption = document.getElementById("caption");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const auto = document.getElementById("auto");
    const dotsContainer = document.getElementById("dots");

    let index = 0;
    let intervalId;

    const mediaItems = [
      { src: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg", text: "Sunset Beauty" },
      { src: "https://images.pexels.com/photos/228094/pexels-photo-228094.jpeg", text: "Lake Side Peace" },
      { src: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg", text: "Mountain Hike" },
      { src: "https://images.pexels.com/photos/340779/pexels-photo-340779.jpeg", text: "Forest Path" },
      { src: "https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg", text: "Golden Fields" }
    ];

    // Create dots
    mediaItems.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => {
        index = i;
        showImage();
        clearInterval(intervalId);
      });
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function showImage() {
      img.style.opacity = 0;
      setTimeout(() => {
        img.src = mediaItems[index].src;
        caption.textContent = mediaItems[index].text;
        updateDots();
        img.style.opacity = 1;
      }, 300);
    }

    function updateDots() {
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    function nextImage() {
      index = (index + 1) % mediaItems.length;
      showImage();
    }

    function prevImage() {
      index = (index - 1 + mediaItems.length) % mediaItems.length;
      showImage();
    }

    function startAutoPlay() {
      clearInterval(intervalId);
      intervalId = setInterval(nextImage, 3000);
    }

    next.addEventListener("click", () => {
      nextImage();
      clearInterval(intervalId);
    });

    prev.addEventListener("click", () => {
      prevImage();
      clearInterval(intervalId);
    });

    auto.addEventListener("click", () => {
      startAutoPlay();
    });

    // Swipe support
    let startX = 0;
    const swipeArea = document.querySelector(".media-wrapper");
    swipeArea.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    swipeArea.addEventListener("touchend", (e) => {
      let endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextImage();
      else if (endX - startX > 50) prevImage();
    });

    // Initial load
    showImage();