function showMessage() {
    alert("Terima kasih telah mengunjungi portofolio saya!");
}

function changeWallpaper(imageSrc) {
    // Mengubah background-image pada body secara dinamis
    // Kita tetap sertakan linear-gradient supaya tulisan tetap terbaca (overlay gelap)
    document.body.style.backgroundImage = `linear-gradient(rgba(18, 18, 18, 0.85), rgba(18, 18, 18, 0.85)), url('${imageSrc}')`;
    
    // Opsional: Beri notifikasi kecil
    console.log("Wallpaper berhasil diubah ke: " + imageSrc);
}

window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    
    // Memberikan jeda sedikit agar transisi terasa smooth
    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 1000); // 1000ms = 1 detik jeda
});

