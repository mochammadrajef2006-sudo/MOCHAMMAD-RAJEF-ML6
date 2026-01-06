function tampilkanWaktu() {
  const jamElement = document.getElementById("jam");
  if (!jamElement) return;

  const now = new Date();
  const jam = now.getHours().toString().padStart(2, '0');
  const menit = now.getMinutes().toString().padStart(2, '0');
  const detik = now.getSeconds().toString().padStart(2, '0');

  jamElement.innerHTML = "Waktu: " + jam + ":" + menit + ":" + detik;
}

// Jalankan pertama kali
tampilkanWaktu();

// Update setiap 1 detik
setInterval(tampilkanWaktu, 1000);