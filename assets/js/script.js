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
// Inspired By
// https://codepen.io/abeatrize/pen/LJqYey
var _a, _b;
// Bongo Cat originally created by @StrayRogue and @DitzyFlama
const ID = "bongo-cat";
const s = (selector) => `#${ID} ${selector}`;
const notes = document.querySelectorAll(".note");
for (let note of notes) {
  (_a = note === null || note === void 0 ? void 0 : note.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(note.cloneNode(true));
  (_b = note === null || note === void 0 ? void 0 : note.parentElement) === null || _b === void 0 ? void 0 : _b.appendChild(note.cloneNode(true));
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
const style = getComputedStyle(document.documentElement);
const green = style.getPropertyValue("--green");
const pink = style.getPropertyValue("--pink");
const blue = style.getPropertyValue("--blue");
const orange = style.getPropertyValue("--orange");
const cyan = style.getPropertyValue("--cyan");
gsap.set(music.note, { scale: 0, autoAlpha: 1 });
const animatePawState = (selector) => gsap.fromTo(selector, { autoAlpha: 0 }, {
  autoAlpha: 1,
  duration: 0.01,
  repeatDelay: 0.19,
  yoyo: true,
  repeat: -1,
});
const tl = gsap.timeline();
tl.add(animatePawState(cat.pawLeft.up), "start")
  .add(animatePawState(cat.pawRight.down), "start")
  .add(animatePawState(cat.pawLeft.down), "start+=0.19")
  .add(animatePawState(cat.pawRight.up), "start+=0.19")
  .timeScale(1.6);
gsap.from(".terminal-code line", {
  drawSVG: "0%",
  duration: 0.1,
  stagger: 0.1,
  ease: "none",
  repeat: -1,
});
// typing for pipe function doesn't seem to be working for usage when partially applied?
const noteElFn = gsap.utils.pipe(gsap.utils.toArray, gsap.utils.shuffle);
const noteEls = noteElFn(music.note);
const numNotes = noteEls.length / 3;
const notesG1 = noteEls.splice(0, numNotes);
const notesG2 = noteEls.splice(0, numNotes);
const notesG3 = noteEls;
const colorizer = gsap.utils.random([green, pink, blue, orange, cyan, "#a3a4ec", "#67b5c0", "#fd7c6e"], true);
const rotator = gsap.utils.random(-50, 50, 1, true);
const dir = (amt) => `${gsap.utils.random(["-", "+"])}=${amt}`;
const animateNotes = (els) => {
  els.forEach((el) => {
    gsap.set(el, {
      stroke: colorizer(),
      rotation: rotator(),
      x: gsap.utils.random(-25, 25, 1),
    });
  });
  return gsap.fromTo(els, {
    autoAlpha: 1,
    y: 0,
    scale: 0,
  }, {
    duration: 2,
    autoAlpha: 0,
    scale: 1,
    ease: "none",
    stagger: {
      from: "random",
      each: 0.5,
    },
    rotation: dir(gsap.utils.random(20, 30, 1)),
    x: dir(gsap.utils.random(40, 60, 1)),
    y: gsap.utils.random(-200, -220, 1),
    onComplete: () => animateNotes(els),
  });
};
tl.add(animateNotes(notesG1)).add(animateNotes(notesG2), ">0.05").add(animateNotes(notesG3), ">0.25");

