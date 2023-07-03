// Dapatkan semua elemen tautan navigasi
const navLinks = document.querySelectorAll('.nav__link');

// Dapatkan tautan Home
const homeLink = document.querySelector('a[href="index.html"]');

// Fungsi untuk menghapus atribut "id" dengan nilai "intro-text" dari sebuah elemen
const removeIntroTextId = (element) => {
  if (element.hasAttribute('id') && element.getAttribute('id') === 'intro-text') {
    element.removeAttribute('id');
  }
};

// Loop melalui setiap elemen tautan navigasi
navLinks.forEach((link) => {
  // Tambahkan event listener untuk setiap tautan
  link.addEventListener('click', () => {
    // Hapus kelas "active-link" dari semua elemen tautan
    navLinks.forEach((navLink) => {
      navLink.classList.remove('active-link');
    });

    // Hapus atribut "id" dengan nilai "intro-text" dari tautan Home jika ada
    removeIntroTextId(homeLink);

    // Cek apakah tautan yang diklik adalah tautan Contact
    if (link.getAttribute('href') === '#contact') {
      // Hapus atribut "id" dengan nilai "intro-text" dari tautan Contact jika ada
      removeIntroTextId(link);

      // Tambahkan atribut "id" dengan nilai "intro-text" ke tautan Home
      homeLink.setAttribute('id', 'intro-text');
    }

    // Tambahkan kelas "active-link" ke tautan yang diklik
    link.classList.add('active-link');
  });
});