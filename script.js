// Fungsi untuk menampilkan pesan setelah subscribe
document.querySelector('.subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form melakukan reload
    const firstName = event.target[0].value; // Ambil nama depan
    const email = event.target[1].value; // Ambil email
    
    // Tampilkan pesan sukses
    alert(`Terima kasih, ${firstName}! Anda telah berlangganan dengan email: ${email}`);
    
    // Reset form
    event.target.reset();
});