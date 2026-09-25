/* =========================================================
   EventEase - FINAL app.js
   ========================================================= */


/* ================= VARIABLES ================= */

let bookingCount = 0;
let favouriteCount = 0;

let selectedBookings = [];

let selectedOfferName = "";
let selectedOfferPrice = 0;



/* =========================================================
/* ================= LOGIN ================= */

function login() {

    document.getElementById("loginModal")
        .classList.add("show");
}


/* ================= CLOSE LOGIN ================= */

function closeLogin() {

    document.getElementById("loginModal")
        .classList.remove("show");
}


/* ================= SUBMIT LOGIN ================= */

function submitLogin() {

    let name =
        document.getElementById("loginName").value.trim();

    let email =
        document.getElementById("loginEmail").value.trim();

    let password =
        document.getElementById("loginPassword").value;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }
    

    document.getElementById("welcomeUser").innerText =
        "Hi, " + name;

    document.getElementById("userProfile").style.display =
        "flex";

    document.querySelector(".login-btn").style.display =
        "none";

    document.querySelector(".signup-btn").style.display =
        "none";

    closeLogin();

    alert("🎉 Login Successful!\n\nWelcome " + name);
}


/* ================= SIGN UP ================= */

function signup() {

    document.getElementById("signupModal")
        .classList.add("show");
}


/* ================= CLOSE SIGNUP ================= */

function closeSignup() {

    document.getElementById("signupModal")
        .classList.remove("show");
}


/* ================= SUBMIT SIGNUP ================= */

function submitSignup() {

    let name =
        document.getElementById("signupName").value.trim();

    let email =
        document.getElementById("signupEmail").value.trim();

    let password =
        document.getElementById("signupPassword").value;

    let confirmPassword =
        document.getElementById("confirmPassword").value;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("❌ Passwords do not match.");
        return;
    }

    document.getElementById("welcomeUser").innerText =
        "Hi, " + name;

    document.getElementById("userProfile").style.display =
        "flex";

    document.querySelector(".login-btn").style.display =
        "none";

    document.querySelector(".signup-btn").style.display =
        "none";

    closeSignup();

    alert(
        "🎉 Account Created Successfully!\n\n" +
        "Welcome to EventEase, " + name
    );
}


/* ================= SHOW / HIDE PASSWORD ================= */

function togglePassword(inputId, button) {

    let input =
        document.getElementById(inputId);

    if (input.type === "password") {

        input.type = "text";
        button.innerText = "🙈";

    } else {

        input.type = "password";
        button.innerText = "👁️";
    }
}


/* =========================================================
   LOGOUT
   ========================================================= */

function logout() {

    let userProfile =
        document.getElementById("userProfile");

    let welcomeUser =
        document.getElementById("welcomeUser");

    if (userProfile) {
        userProfile.style.display = "none";
    }

    if (welcomeUser) {
        welcomeUser.innerText = "Hi!";
    }

    let loginBtn =
        document.querySelector(".login-btn");

    let signupBtn =
        document.querySelector(".signup-btn");

    if (loginBtn) {
        loginBtn.style.display = "inline-block";
    }

    if (signupBtn) {
        signupBtn.style.display = "inline-block";
    }

    alert("You have been logged out.");
}


/* =========================================================
   FAVOURITE
   ========================================================= */

function favorite(button) {

    if (!button) {
        return;
    }

    if (button.classList.contains("liked")) {

        button.classList.remove("liked");

        button.innerText = "♡";

        favouriteCount--;

        if (favouriteCount < 0) {
            favouriteCount = 0;
        }

        updateFavouriteCount();

        alert("Removed from Favourite.");

    } else {

        button.classList.add("liked");

        button.innerText = "♥";

        favouriteCount++;

        updateFavouriteCount();

        alert("Added to Favourite ❤️");
    }
}


/* =========================================================
   UPDATE FAVOURITE COUNT
   ========================================================= */

function updateFavouriteCount() {

    let element =
        document.getElementById("favouriteCount");

    if (element) {
        element.innerText = favouriteCount;
    }
}


/* =========================================================
   VIEW DETAILS
   ========================================================= */

function viewDetails(eventName) {

    let details = {

        "Live Music Night":
        "📍 Pune, Maharashtra\n📅 25 August 2026\n💰 ₹1,299\n⭐ 4.8",

        "Football Championship":
        "📍 Pune, Maharashtra\n📅 30 August 2026\n💰 ₹799\n⭐ 4.6",

        "Web Development Workshop":
        "📍 Pune, Maharashtra\n📅 5 September 2026\n💰 ₹499\n⭐ 4.7",

        "Stand-up Comedy Night":
        "📍 Pune, Maharashtra\n📅 10 September 2026\n💰 ₹349\n⭐ 4.5",

        "Acoustic Evening":
        "📍 Pune, Maharashtra\n📅 15 September 2026\n💰 ₹699\n⭐ 4.7",

        "Cricket Tournament":
        "📍 Pune, Maharashtra\n📅 20 September 2026\n💰 ₹599\n⭐ 4.6",

        "Python Programming Workshop":
        "📍 Pune, Maharashtra\n📅 25 September 2026\n💰 ₹399\n⭐ 4.8",

        "Comedy Festival":
        "📍 Pune, Maharashtra\n📅 1 October 2026\n💰 ₹499\n⭐ 4.6",

        "Tech Innovation Expo":
        "📍 Pune, Maharashtra\n📅 5 October 2026\n💰 ₹899\n⭐ 4.9",

        "Food & Taste Festival":
        "📍 Pune, Maharashtra\n📅 10 October 2026\n💰 ₹299\n⭐ 4.5"
    };

    if (!details[eventName]) {

        alert("Event details not available.");

        return;
    }

    alert(
        "🎉 EVENT DETAILS\n\n" +
        eventName +
        "\n\n" +
        details[eventName]
    );
}


/* =========================================================
   NORMAL BOOKING
   ========================================================= */

function bookEvent(eventName) {

    let prices = {

        "Live Music Night": 1299,

        "Football Championship": 799,

        "Web Development Workshop": 499,

        "Stand-up Comedy Night": 349,

        "Acoustic Evening": 699,

        "Cricket Tournament": 599,

        "Python Programming Workshop": 399,

        "Comedy Festival": 499,

        "Tech Innovation Expo": 899,

        "Food & Taste Festival": 299
    };

    let price = prices[eventName];

    if (!price) {

        alert("Event price not available.");

        return;
    }


    let tickets =
        prompt(
            "🎟️ BOOK EVENT\n\n" +
            "Event: " + eventName +
            "\nPrice per ticket: ₹" + price +
            "\n\nEnter number of tickets:"
        );


    if (tickets === null) {
        return;
    }


    tickets = Number(tickets);


    if (
        !Number.isInteger(tickets) ||
        tickets < 1
    ) {

        alert(
            "⚠️ Please enter a valid number."
        );

        return;
    }


    let total =
        price * tickets;


    let confirmBooking =
        confirm(

            "🎟️ BOOKING SUMMARY\n\n" +

            "Event: " +
            eventName +

            "\nTickets: " +
            tickets +

            "\nPrice per ticket: ₹" +
            price +

            "\nTotal: ₹" +
            total +

            "\n\nConfirm Booking?"
        );


    if (!confirmBooking) {
        return;
    }


    /* SAVE BOOKING */

    selectedBookings.push({

        type: "event",

        event: eventName,

        tickets: tickets,

        price: total
    });


    bookingCount++;


    updateBookingCount();


    alert(

        "🎉 BOOKING SUCCESSFUL!\n\n" +

        "Event: " +
        eventName +

        "\nTickets: " +
        tickets +

        "\nTotal Amount: ₹" +
        total
    );
}


/* =========================================================
   BOOKING COUNT
   ========================================================= */

function updateBookingCount() {

    let element =
        document.getElementById("bookingCount");

    if (element) {

        element.innerText =
            bookingCount;
    }
}


/* =========================================================
   SHOW BOOKINGS
   ========================================================= */

function showBookings() {

    if (selectedBookings.length === 0) {

        alert(
            "🎟️ MY BOOKINGS\n\n" +
            "No bookings yet."
        );

        return;
    }


    let message =
        "🎟️ MY BOOKINGS\n\n";


    selectedBookings.forEach(
        function(booking, index) {

            message +=
                "Booking " +
                (index + 1) +
                "\n";

            message +=
                "Event: " +
                booking.event +
                "\n";


            if (booking.type === "event") {

                message +=
                    "Tickets: " +
                    booking.tickets +
                    "\n";

                message +=
                    "Total: ₹" +
                    booking.price +
                    "\n";
            }


            if (booking.type === "offer") {

                message +=
                    "Offer: " +
                    booking.offer +
                    "\n";

                message +=
                    "Price: ₹" +
                    booking.price +
                    "\n";
            }


            message +=
                "--------------------\n";
        }
    );


    alert(message);
}


/* =========================================================
   OFFER SELECT
   ========================================================= */

function selectOffer(
    offerName,
    price
) {

    selectedOfferName =
        offerName;

    selectedOfferPrice =
        price;


    let modal =
        document.getElementById("offerModal");

    let offerNameElement =
        document.getElementById(
            "selectedOfferName"
        );

    let offerPriceElement =
        document.getElementById(
            "selectedOfferPrice"
        );

    let eventSelect =
        document.getElementById(
            "offerEventSelect"
        );


    if (!modal ||
        !offerNameElement ||
        !offerPriceElement ||
        !eventSelect) {

        alert(
            "⚠️ Offer popup is not found.\n\n" +
            "Please check your Offer Modal HTML."
        );

        return;
    }


    offerNameElement.innerText =
        offerName;

    offerPriceElement.innerText =
        price;

    eventSelect.value = "";


    modal.classList.add("show");
}


/* =========================================================
   CLOSE OFFER
   ========================================================= */

function closeOffer() {

    let modal =
        document.getElementById(
            "offerModal"
        );

    if (modal) {

        modal.classList.remove("show");
    }
}


/* =========================================================
   CONFIRM OFFER BOOKING
   ========================================================= */

function confirmOfferBooking() {

    let eventSelect =
        document.getElementById(
            "offerEventSelect"
        );


    if (!eventSelect) {

        alert(
            "⚠️ Event selection not found."
        );

        return;
    }


    let eventName =
        eventSelect.value;


    if (eventName === "") {

        alert(
            "⚠️ Please select an event."
        );

        return;
    }let confirmBooking =
        confirm(

            "🎟️ OFFER BOOKING\n\n" +

            "Offer: " +
            selectedOfferName +

            "\nEvent: " +
            eventName +

            "\nPrice: ₹" +
            selectedOfferPrice +

            "\n\nConfirm Booking?"
        );


    if (!confirmBooking) {
        return;
    }


    /* SAVE OFFER BOOKING */

    selectedBookings.push({

        type: "offer",

        offer:
            selectedOfferName,

        event:
            eventName,

        tickets: 1,

        price:
            selectedOfferPrice
    });


    bookingCount++;


    updateBookingCount();


    closeOffer();


    alert(

        "🎉 OFFER BOOKING SUCCESSFUL!\n\n" +

        "Offer: " +
        selectedOfferName +

        "\nEvent: " +
        eventName +

        "\nPrice: ₹" +
        selectedOfferPrice
    );
}


/* =========================================================
   SEARCH / RECOMMENDATIONS
   ========================================================= */

function getRecommendations() {

    let searchInput =
        document.getElementById(
            "searchInput"
        );

    let locationInput =
        document.getElementById(
            "locationInput"
        );

    let dateInput =
        document.getElementById(
            "dateInput"
        );


    if (!searchInput ||
        !locationInput ||
        !dateInput) {

        return;
    }


    let search =
        searchInput.value
        .toLowerCase()
        .trim();


    let location =
        locationInput.value
        .toLowerCase()
        .trim();


    let date =
        dateInput.value;


    let cards =
        document.querySelectorAll(
            ".event-card"
        );


    let found = 0;


    cards.forEach(
        function(card) {

            let title =
                card.querySelector("h3");

            if (!title) {
                return;
            }


            let name =
                title.innerText
                .toLowerCase();


            let category =
                (
                    card.getAttribute(
                        "data-category"
                    ) || ""
                ).toLowerCase();


            let cardLocation =
                (
                    card.getAttribute(
                        "data-location"
                    ) || ""
                ).toLowerCase();


            let cardDate =
                card.getAttribute(
                    "data-date"
                ) || "";


            let matchSearch =
                search === "" ||
                name.includes(search) ||
                category.includes(search);


            let matchLocation =
                location === "" ||
                cardLocation.includes(location);


            let matchDate =
                date === "" ||
                cardDate === date;

if (
                matchSearch &&
                matchLocation &&
                matchDate
            ) {

                card.style.display =
                    "block";

                found++;

            } else {

                card.style.display =
                    "none";
            }
        }
    );


    let recommendations =
        document.getElementById(
            "recommendations"
        );


    if (recommendations) {

        recommendations.scrollIntoView({
            behavior: "smooth"
        });
    }


    if (found === 0) {

        alert(
            "No matching events found.\n\n" +
            "Try Music, Sports, Education, " +
            "Comedy, Technology or Food."
        );

        showAllEvents();
    }
}


/* =========================================================
   CLEAR SEARCH
   ========================================================= */

function clearSearch() {

    let search =
        document.getElementById(
            "searchInput"
        );

    let location =
        document.getElementById(
            "locationInput"
        );

    let date =
        document.getElementById(
            "dateInput"
        );


    if (search) {
        search.value = "";
    }

    if (location) {
        location.value = "";
    }

    if (date) {
        date.value = "";
    }


    showAllEvents();
}


/* =========================================================
   SHOW ALL EVENTS
   ========================================================= */

function showAllEvents() {

    let cards =
        document.querySelectorAll(
            ".event-card"
        );


    cards.forEach(
        function(card) {

            card.style.display =
                "block";
        }
    );


    let recommendations =
        document.getElementById(
            "recommendations"
        );


    if (recommendations) {

        recommendations.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

function filterCategory(category) {

    let cards =
        document.querySelectorAll(
            ".event-card"
        );


    let found = 0;


    cards.forEach(
        function(card) {

            let cardCategory =
                card.getAttribute(
                    "data-category"
                );


            if (
                cardCategory === category
            ) {

                card.style.display =
                    "block";

                found++;

            } else {

                card.style.display =
                    "none";
            }
        }
    );


    let recommendations =
        document.getElementById(
            "recommendations"
        );


    if (recommendations) {

        recommendations.scrollIntoView({
            behavior: "smooth"
        });
    }


    if (found === 0) {

        alert(
            "No events available in " +
            category
        );
    }
}
/* =========================================================
   PROFILE
   ========================================================= */

function showProfile() {

    alert(

        "👤 MY PROFILE\n\n" +

        "Name: EventEase User\n" +

        "Email: user@eventease.com"
    );
}


/* =========================================================
   FAVOURITES
   ========================================================= */

function showFavourites() {

    alert(

        "❤️ FAVOURITE\n\n" +

        "Total Favourite Events: " +

        favouriteCount
    );
}


/* =========================================================
   GO TO RECOMMENDATIONS
   ========================================================= */

function goToRecommendations() {

    let section =
        document.getElementById(
            "recommendations"
        );


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================================================
   SEARCH ICON
   ========================================================= */

function focusSearch() {

    let search =
        document.getElementById(
            "searchInput"
        );


    if (search) {

        search.focus();

        search.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateBookingCount();

        updateFavouriteCount();

        console.log(
            "EventEase loaded successfully."
        );
    }
);