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



$("#switch").click(function () {
  if ($("#switch").hasClass("switched")) {
    $("#switch").removeClass("switched");
    $("#circle").css("margin-left", "5%");
    $("#fullpage").removeClass("night");
  } else {
    $("#switch").addClass("switched");
    $("#circle").css("margin-left", "55%");
    $("#fullpage").addClass("night");
  }
});

$("#month-switch").click(function () {
  if ($("#month-switch").hasClass("switched")) {
    $("#month-switch").removeClass("switched");
    $("#circle").css("margin-left", "5%");
    $("#fullpage").removeClass("night");
  } else {
    $("#month-switch").addClass("switched");
    $("#circle").css("margin-left", "55%");
    $("#fullpage").addClass("night");
  }
});


// Dapatkan semua elemen tautan navigasi
const navLinks = document.querySelectorAll('.nav__link');

// Dapatkan tautan Home
const homeLink = document.querySelector('a[href="index.html"]');

// Loop melalui setiap elemen tautan navigasi
navLinks.forEach(link => {
  // Tambahkan event listener untuk setiap tautan
  link.addEventListener('click', () => {
    // Hapus kelas "active-link" dari semua elemen tautan
    navLinks.forEach(navLink => {
      navLink.classList.remove('active-link');
    });

    // Cek apakah tautan yang diklik adalah tautan Contact
    if (link.getAttribute('href') === '#contact') {
      // Hapus atribut "id" dengan nilai "intro-text" dari tautan Contact jika ada
      if (link.hasAttribute('id')) {
        link.removeAttribute('id');
      }

      // Cek apakah tautan Home memiliki atribut "id" dengan nilai "intro-text"
      if (homeLink.hasAttribute('id') && homeLink.getAttribute('id') === 'intro-text') {
        // Hapus atribut "id" dengan nilai "intro-text" dari tautan Home
        homeLink.removeAttribute('id');
      } else {
        // Tambahkan atribut "id" dengan nilai "intro-text" ke tautan Home
        homeLink.setAttribute('id', 'intro-text');
      }
    } else {
      // Hapus atribut "id" dengan nilai "intro-text" dari tautan Home jika ada
      if (homeLink.hasAttribute('id')) {
        homeLink.removeAttribute('id');
      }
    }

    // Tambahkan kelas "active-link" ke tautan yang diklik
    link.classList.add('active-link');
  });
});





