/*===== Contat Form =====*/
function showNotification(message, type) {
  var notificationCard = document.createElement("div");
  notificationCard.classList.add("notification-card");
  notificationCard.classList.add(type);

  var icon = document.createElement("div");
  icon.classList.add("icon");
  icon.innerHTML = "<i class='fas fa-check-circle'></i>";
  notificationCard.appendChild(icon);

  var messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.innerText = message;
  notificationCard.appendChild(messageElement);

  document.body.appendChild(notificationCard);

  setTimeout(function () {
    notificationCard.classList.add("show");
  }, 50);

  setTimeout(function () {
    notificationCard.remove();
  }, 3000); // Durasi tampilan pemberitahuan (dalam milidetik)
}



function sendMail() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var message = messageInput.value.trim();

  if (name === "" || email === "" || message === "") {
    showNotification("Please complete all fields", "error");
    return; // Menghentikan fungsi jika form tidak diisi lengkap
  }

  var params = {
    from_name: name,
    email: email,
    message: message,
    reply_to: email
  };

  emailjs.send("service_08q2r7h", "template_fsmv278", params)
    .then(function (res) {
      showNotification("Thanks for sending the message");
      resetForm(nameInput, emailInput, messageInput);

      // Mengubah button menjadi "Thanks"
      const btn = document.querySelector("#btn");
      const btnText = document.querySelector("#btnText");
      btnText.innerHTML = "Thanks";
      btn.classList.add("active");
    })
    .catch(function (error) {
      showNotification("Error: " + error, "error");
    });
}

function resetForm(...inputs) {
  inputs.forEach(function (input) {
    input.value = "";
  });
}

/*===== bendera =====*/
// const flag = document.getElementById("flag");
// for (let i = 0; i < flag.offsetWidth; i++) {
//   const flag_image = document.createElement("div");
//   flag_image.className = "flag__image";
//   flag_image.style.backgroundPosition = -i + "px 0";
//   flag_image.style.animationDelay = i * 10 + "ms";
//   flag.appendChild(flag_image);
// }

"use strict";

const ID = "bongo-cat";
const s = (selector) => `#${ID} ${selector}`;
const notes = document.querySelectorAll(".note");
for (let note of notes) {
  const parentElement = note?.parentElement;
  if (parentElement) {
    parentElement.appendChild(note.cloneNode(true));
    parentElement.appendChild(note.cloneNode(true));
  }
}

const music = { note: s(".music .note") };
const cat = {
  pawRight: {
    up: s(".paw-right .up"),
    down: s(".paw-right .down"),
  },
  pawLeft: {
    up: s(".paw-left .up"),
    down: s(".paw-left .down"),
  },
};

const colorizer = () => anime.random(["#00ff00", "#ff00ff", "#0000ff", "#ff6600", "#00ffff", "#a3a4ec", "#67b5c0", "#fd7c6e"]);
const rotator = () => anime.random(-50, 50);
const dir = (amt) => `${anime.random(["-", "+"])}=${amt}`;

const animatePawState = (selector) => {
  anime({
    targets: selector,
    opacity: [0, 1],
    duration: 10,
    delay: 190,
    direction: 'alternate',
    loop: true,
  });
};

anime({
  targets: ".terminal-code line",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "linear",
  duration: 100,
  delay: anime.stagger(100, { from: "random" }),
  direction: "alternate",
  loop: true,
});

const animateNotes = (els) => {
  els.forEach((el) => {
    anime.set(el, {
      stroke: colorizer(),
      rotate: rotator(),
      translateX: anime.random(-25, 25),
    });
  });
  anime({
    targets: els,
    opacity: [1, 0],
    scale: [0, 1],
    duration: 2000,
    easing: "linear",
    delay: anime.stagger(500, { from: "random" }),
    rotate: dir(anime.random(20, 30)),
    translateX: dir(anime.random(40, 60)),
    translateY: anime.random(-200, -220),
    complete: () => animateNotes(els),
  });
};

animatePawState(cat.pawLeft.up);
animatePawState(cat.pawRight.down);
animatePawState(cat.pawLeft.down);
animatePawState(cat.pawRight.up);

const noteElFn = anime.random;
const noteEls = noteElFn(music.note);
const numNotes = noteEls.length / 3;
const notesG1 = noteEls.splice(0, numNotes);
const notesG2 = noteEls.splice(0, numNotes);
const notesG3 = noteEls;

animateNotes(notesG1);
setTimeout(() => animateNotes(notesG2), 50);
setTimeout(() => animateNotes(notesG3), 250);


