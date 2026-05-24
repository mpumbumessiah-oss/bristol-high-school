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


// ======================================
// NEWS DATA
// ======================================

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


// ======================================
// OPEN NEWS MODAL
// ======================================

if (
    newsCards.length &&
    newsModal
) {

    newsCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const cardId =
                    card.getAttribute(
                        "data-id"
                    );

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


                // TITLE
                if (modalTitle) {

                    modalTitle.textContent =
                        data.title;

                }


                // DESCRIPTION
                if (modalDescription) {

                    modalDescription.textContent =
                        paragraph
                            ? paragraph.textContent
                            : "";

                }


                // FULL TEXT
                if (modalFullText) {

                    modalFullText.textContent =
                        data.fullText;

                }


                // IMAGE
                if (
                    modalImage &&
                    imageElement
                ) {

                    modalImage.src =
                        imageElement.src;

                    modalImage.alt =
                        data.title;

                }


                // OPEN MODAL
                newsModal.classList.add(
                    "active"
                );

            }
        );

    });

}


// ======================================
// CLOSE MODAL BUTTON
// ======================================

if (
    closeModalBtn &&
    newsModal
) {

    closeModalBtn.addEventListener(
        "click",
        () => {

            newsModal.classList.remove(
                "active"
            );

        }
    );

}


// ======================================
// CLOSE MODAL OUTSIDE CLICK
// ======================================

if (newsModal) {

    newsModal.addEventListener(
        "click",
        (e) => {

            if (
                e.target === newsModal
            ) {

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


    // DUPLICATE CARDS
    featuredCards.forEach(card => {

        const clone =
            card.cloneNode(true);

        featuredTrack.appendChild(
            clone
        );

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

const dropdownButtons =
    document.querySelectorAll(
        ".dropbtn"
    );


// ======================================
// OPEN MENU
// ======================================

if (
    menu &&
    openBtn &&
    closeBtn
) {

    openBtn.addEventListener(
        "click",
        () => {

            menu.classList.add(
                "open"
            );

            openBtn.style.display =
                "none";

            closeBtn.style.display =
                "inline-block";

        }
    );


    // ======================================
    // CLOSE MENU
    // ======================================

    closeBtn.addEventListener(
        "click",
        () => {

            menu.classList.remove(
                "open"
            );

            closeBtn.style.display =
                "none";

            openBtn.style.display =
                "inline-block";


            // CLOSE ALL DROPDOWNS
            document
                .querySelectorAll(
                    ".dropdown"
                )
                .forEach(dropdown => {

                    dropdown.classList.remove(
                        "active"
                    );

                });

        }
    );

}



// ======================================
// MOBILE DROPDOWNS
// ======================================

dropdownButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        if (window.innerWidth <= 1024) {

            e.preventDefault();

            const dropdown = this.closest(".dropdown");

            document.querySelectorAll(".dropdown").forEach(item => {
                if (item !== dropdown) {
                    item.classList.remove("active");
                }
            });

            dropdown.classList.toggle("active");
        }
    });

});

// ======================================
// CLOSE MENU AFTER CLICKING LINK
// ======================================

const navLinks =
    document.querySelectorAll(
        ".nav__menu a"
    );

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            if (
                window.innerWidth <= 1024
            ) {

                menu.classList.remove(
                    "open"
                );

                closeBtn.style.display =
                    "none";

                openBtn.style.display =
                    "inline-block";

            }

        }
    );

});
