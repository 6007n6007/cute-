// ===============================
// BACKGROUND STARS
// ===============================

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 70; i++) {
    const star = document.createElement("div");

    star.className = "star-bg";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 4 + 2;
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay = Math.random() * 3 + "s";

    starsContainer.appendChild(star);
}


// ===============================
// PAGE CHANGE
// ===============================

function goToPage(pageNumber) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const targetPage = document.getElementById("page" + pageNumber);

    if (targetPage) {
        targetPage.classList.add("active");
        window.scrollTo(0, 0);
    }
}


// ===============================
// MODAL
// ===============================

const modal = document.getElementById("modal");
const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

function openModal(icon, title, text) {

    modalIcon.textContent = icon;
    modalTitle.textContent = title;
    modalText.textContent = text;

    modal.classList.add("show");
}

function closeModal() {
    modal.classList.remove("show");
}


// بستن پنجره با کلیک روی فضای بیرون

modal.addEventListener("click", function(event) {

    if (event.target === modal) {
        closeModal();
    }

});


// ===============================
// UNIVERSE CARDS
// ===============================

function openMessage(type) {

    if (type === "star") {

        openModal(
            "⭐",
            "یه ستاره برای تو",
            "تو از اون آدمایی هستی که حتی وقتی خودت حواست نیست، می‌تونی فضای اطرافت رو قشنگ‌تر کنی."
        );

    }

    else if (type === "heart") {

        openModal(
            "♡",
            "یه چیز کوچیک",
            "لازم نیست همیشه بهترین نسخه‌ی خودت باشی. همین که خودت باشی، خودش خیلی ارزشمنده."
        );

    }

    else if (type === "moon") {

        openModal(
            "☾",
            "برای روزای سخت",
            "اگه امروز خوب نبود، اشکالی نداره. قرار نیست هر روز فوق‌العاده باشه. فردا هنوز یه صفحه‌ی جدیده."
        );

    }

    else if (type === "gift") {

        openModal(
            "🎀",
            "یه هدیه‌ی کوچیک",
            "ممنونم که خودتی. برای مهربونی‌هات، انرژی قشنگت و تمام چیزهای کوچیکی که شاید خودت حتی متوجهشون نباشی."
        );

    }

}


// ===============================
// STAR GAME
// ===============================

const starMessages = [

    "تو خیلی بیشتر از چیزی که خودت فکر می‌کنی ارزش داری.",

    "بودنت گاهی بدون اینکه بفهمی، حال یه نفر رو بهتر می‌کنه.",

    "یکی از قشنگ‌ترین چیزها درباره‌ات اینه که لازم نیست برای خاص بودن تلاش کنی.",

    "حتی روزهایی که خسته‌ای هم ارزشمند هستی.",

    "تو لازم نیست خودت رو با هیچ‌کس مقایسه کنی؛ داستان تو مخصوص خودته.",

    "خیلی از چیزهایی که خودت عادی می‌بینی، برای بقیه قشنگ و خاصه.",

    "امیدوارم همیشه آدم‌هایی اطرافت باشن که ارزش واقعی بودنت رو ببینن.",

    "خوشحالم که تو، خودِ خودتی. همین."
];

let foundStars = 0;

const starButtons = document.querySelectorAll(".click-star");

const counter = document.getElementById("starCounter");

const constellationButton =
    document.getElementById("constellationBtn");


function showStar(index) {

    const star = starButtons[index];

    if (!star) {
        return;
    }

    if (star.classList.contains("found")) {
        return;
    }

    star.classList.add("found");

    foundStars++;

    counter.textContent =
        foundStars + " / 8 stars found";

    openModal(
        "⭐",
        "پیام ستاره",
        starMessages[index]
    );

    if (foundStars === 8) {

        counter.textContent =
            "8 / 8 ✦ constellation complete!";
            constellationButton.classList.remove("hidden");
    }
}


// ===============================
// COMPLIMENTS
// ===============================

const compliments = [

    "تو از اون آدمایی هستی که حتی وجودشون بهترین دغدغه هست.",

    "خاص بودن همیشه به متفاوت بودن نیست؛ گاهی به نوع تصورات دیگران ازت ربط داره .",

    " و از تو بهترین تصوویر در ذهنم وجود داره.",

    "شخصیت قشنگت فقط توی حرف‌هات نیست؛ توی جزئیات رفتارت هم دیده می‌شه.",

    "شاید همیشه خودت متوجه نشی، ولی بعضی آدم‌ها به خاطر وجودت روز بهتری دارن.",

    "تو می‌تونی هم قوی باشی و هم احساساتی؛ لازم نیست یکی رو انتخاب کنی.",

    "هیچ نسخه‌ی دیگری از تو وجود نداره و همین تو رو خاص می‌کنه.",

    "امیدوارم همیشه آدم‌هایی اطرافت باشن که ارزش واقعی بودنت رو ببینن.",

    "تا ابد و یک روز قرار بهتربن آدم زندگیه یکسری افراد بمونی",

    "تو فرشته ای هستی که از فرشته بودن فقط بال رو کم داره."
];

let complimentIndex = 0;

function newCompliment() {

    const compliment =
        document.getElementById("compliment");

    complimentIndex++;

    if (complimentIndex >= compliments.length) {
        complimentIndex = 0;
    }

    compliment.style.opacity = "0";

    setTimeout(function() {

        compliment.textContent =
            compliments[complimentIndex];

        compliment.style.opacity = "1";

    }, 200);
}


// ===============================
// OPEN WHEN
// ===============================

const envelopeMessages = [

    [
        "☁️",
        "برای روز بد",
        "امروز هرچقدر هم بد بوده، قرار نیست تمام داستانت باشه. یه نفس عمیق بکش و به خودت فرصت بده."
    ],

    [
        "🌙",
        "وقتی به خودت شک کردی",
        "شاید فقط خسته‌ای. استراحت کن و دوباره به خودت فرصت بده. یک لحظه‌ی سخت، ارزش واقعی تو رو تعیین نمی‌کنه."
    ],

    [
        "⭐",
        "برای یک لبخند",
        "هی تو! فقط خواستم یادآوری کنم که یه آدم خیلی خاص الان این صفحه رو باز کرده. حالا یه لبخند کوچولو بده."
    ],

    [
        "🪽",
        "وقتی خسته‌ای",
        "لازم نیست همیشه بدوی. بعضی وقت‌ها آروم رفتن هم حرکته. استراحت کردن شکست نیست."
    ]

];


function openEnvelope(index) {

    const message = envelopeMessages[index];

    if (!message) {
        return;
    }

    openModal(
        message[0],
        message[1],
        message[2]
    );
}


// ===============================
// RESTART
// ===============================

function restart() {

    foundStars = 0;

    starButtons.forEach(function(star) {
        star.classList.remove("found");
    });

    counter.textContent =
        "0 / 8 stars found";

    constellationButton.classList.add("hidden");

    goToPage(1);
}


// ===============================
// RANDOM SPARKLES
// ===============================

const sparkleContainer =
    document.getElementById("sparkles");

setInterval(function() {

    const sparkle =
        document.createElement("div");

    sparkle.textContent =
        Math.random() > 0.5 ? "✦" : "✧";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.color =
        Math.random() > 0.5 ? "#d6b5ff" : "#ffb9d7";

    sparkle.style.fontSize =
        Math.random() * 12 + 10 + "px";

    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "1";

    sparkleContainer.appendChild(sparkle);

    sparkle.animate(
        [
            {
                opacity: 0,
                transform: "scale(0.5)"
            },
            {
                opacity: 1,
                transform: "scale(1.2)"
            },
            {
                opacity: 0,
                transform: "scale(0.5) translateY(-20px)"
            }
        ],
        {
            duration: 2000,
            easing: "ease-in-out"
        }
    );

    setTimeout(function() {
        sparkle.remove();
    }, 2000);

}, 700);