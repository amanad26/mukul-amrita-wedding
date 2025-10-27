 // Countdown
    const weddingDate = new Date('2025-11-25T19:00:00');
    function updateCountdown() {
      const now = new Date();
      const diff = weddingDate - now;
      if (diff <= 0) { clearInterval(interval); }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      document.getElementById('days').textContent = d;
      document.getElementById('hours').textContent = h;
      document.getElementById('mins').textContent = m;
      document.getElementById('secs').textContent = s;
    }
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // RSVP form
    document.getElementById('rsvp-form').addEventListener('submit', e => {
      e.preventDefault();
      const n = document.getElementById('guest-name').value;
      alert(`Thank you ${n}! Your RSVP has been received.`);
      e.target.reset();
    });


    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const galleryImgs = document.querySelectorAll(".gallery img");

    galleryImgs.forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
      });
    });

    function closeModal() {
      modal.style.display = "none";
    }

    // Close modal on clicking outside image
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });


    const videos = [
      "https://www.pexels.com/download/video/4286576/",
      "https://www.pexels.com/download/video/3936463/",
      "https://www.pexels.com/download/video/3122160/",
      "https://www.pexels.com/download/video/4124198/"
    ];

    const videoElement = document.getElementById("weddingVideo");
    let currentIndex = 0;

    // Function to load and play a video
    function playNextVideo() {
      videoElement.src = videos[currentIndex];
      videoElement.play().catch(() => {
        console.log("Autoplay blocked — user interaction required");
      });
      currentIndex = (currentIndex + 1) % videos.length; // loop back to first video
    }

    // Start playing first video
    playNextVideo();

    // When one ends, play the next
    videoElement.addEventListener("ended", playNextVideo);
