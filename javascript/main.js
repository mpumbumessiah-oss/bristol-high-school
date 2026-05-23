// ======================================
// VIDEO PLAYLIST
// ======================================

const videoPlayer = document.getElementById("video-player");

const videoSources = [
    "images/.mp4/Nze 0438.mp4",
    "images/.mp4/Nze 0914.mp4"
];

let currentVideoIndex = 0;

const VIDEO_DURATION_LIMIT = 30;


// PLAY NEXT VIDEO
function playNextVideo() {

    if (!videoPlayer) return;

    currentVideoIndex =
        (currentVideoIndex + 1) % videoSources.length;

    const source =
        videoPlayer.querySelector("source");

    if (source) {

        source.src =
            videoSources[currentVideoIndex];

        videoPlayer.load();

        videoPlayer.play().catch(error => {

            console.log(
                "Autoplay blocked:",
                error
            );

        });

    }

}


// VIDEO EVENTS
if (videoPlayer) {

    videoPlayer.addEventListener(
        "timeupdate",
        () => {

            if (
                videoPlayer.currentTime >=
                VIDEO_DURATION_LIMIT
            ) {

                playNextVideo();

            }

        }
    );

    videoPlayer.addEventListener(
        "ended",
        playNextVideo
    );

}



// ======================================
// NEWS MODAL
// ======================================

const newsCards =
    document.querySelectorAll(".news__card");

const newsModal =
    document.getElementById("news-modal");

const closeModalBtn =
    document.getElementById("close-modal");

const modalTitle =
    document.getElementById("modal-title");

const modalDescription =
    document.getElementById("modal-description");

const modalFullText =
    document.getElementById("modal-full-text");

const modalImage =
    document.getElementById("modal-image");


// NEWS DATA
const newsData = {

    1: {
        title:
            "School Achieves Top Rankings",

        fullText:
            "Bristol High School ranked among the top schools in the country for academic excellence."
    },

    2: {
        title:
            "Annual Sports Day Celebrations",

        fullText:
            "Students showcased athletic talent and teamwork during sports competitions."
    },

    3: {
        title:
            "Science Exhibition Success",

        fullText:
            "Students presented innovative science and technology projects."
    },

    4: {
        title:
            "Cultural Festival Highlights",

        fullText:
            "Students celebrated music, dance, drama and cultural diversity."
    },

    5: {
        title:
            "Graduation Ceremony",

        fullText:
            "The graduation ceremony honored academic excellence and leadership."
    },

    6: {
        title:
            "Scholarship Awards",

        fullText:
            "Outstanding students received scholarships and awards."
    },

    7: {
        title:
            "Community Service Drive",

        fullText:
            "Students participated in environmental and community outreach activities."
    },

    8: {
        title:
            "New School Facilities",

        fullText:
            "The school launched modern facilities to improve learning."
    }

};


// OPEN MODAL
newsCards.forEach(card => {

    card.addEventListener("click", () => {

        const cardId =
            card.getAttribute("data-id");

        const data =
            newsData[cardId];

        if (!data) return;


        const imageElement =
            card.querySelector(
                ".news__card-image img"
            );

        const paragraph =
            card.querySelector(
                ".news__card-content p"
            );


        // SET MODAL CONTENT
        if (modalTitle) {

            modalTitle.textContent =
                data.title;

        }

        if (modalDescription) {

            modalDescription.textContent =
                paragraph
                    ? paragraph.textContent
                    : "";

        }

        if (modalFullText) {

            modalFullText.textContent =
                data.fullText;

        }

        if (modalImage && imageElement) {

            modalImage.src =
                imageElement.src;

        }


        // OPEN MODAL
        if (newsModal) {

            newsModal.classList.add(
                "active"
            );

        }

    });

});


// CLOSE MODAL BUTTON
if (closeModalBtn) {

    closeModalBtn.addEventListener(
        "click",
        () => {

            if (newsModal) {

                newsModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


// CLOSE MODAL ON OUTSIDE CLICK
if (newsModal) {

    newsModal.addEventListener(
        "click",
        (e) => {

            if (e.target === newsModal) {

                newsModal.classList.remove(
                    "active"
                );

            }

        }
    );

}



// ======================================
// FEATURED POSTS AUTO SLIDER
// ======================================

const featuredTrack =
    document.querySelector(
        ".featured-track"
    );

if (featuredTrack) {

    const featuredCards =
        Array.from(
            featuredTrack.children
        );


    // DUPLICATE FIRST CARDS
    featuredCards.forEach(card => {

        const clone =
            card.cloneNode(true);

        featuredTrack.appendChild(clone);

    });


    let offset = 0;

    const speed = 0.7;


    function animateSlider() {

        offset -= speed;

        if (
            Math.abs(offset) >=
            featuredTrack.scrollWidth / 2
        ) {

            offset = 0;

        }

        featuredTrack.style.transform =
            `translateX(${offset}px)`;


        requestAnimationFrame(
            animateSlider
        );

    }


    animateSlider();

}



// ======================================
// MOBILE MENU
// ======================================

const menu =
    document.querySelector(
        ".nav__menu"
    );

const openBtn =
    document.querySelector(
        "#open-menu-btn"
    );

const closeBtn =
    document.querySelector(
        "#close-menu-btn"
    );


if (menu && openBtn && closeBtn) {

    // OPEN MENU
    openBtn.addEventListener(
        "click",
        () => {

            menu.style.display =
                "flex";

            openBtn.style.display =
                "none";

            closeBtn.style.display =
                "inline-block";

        }
    );


    // CLOSE MENU
    closeBtn.addEventListener(
        "click",
        () => {

            menu.style.display =
                "none";

            closeBtn.style.display =
                "none";

            openBtn.style.display =
                "inline-block";

        }
    );

}