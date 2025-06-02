// Kalp yağmuru efektini oluştur
for (let i = 0; i < 20; i++) {
    let heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's'; // 3-6 saniye arası
    document.body.appendChild(heart);

    // Animasyon bittiğinde kalbi kaldır
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Butonları seç
const yesBtn = document.querySelector('.yes-button');
const noBtn = document.querySelector('.no-button');

// Evet butonuna tıklanınca konfeti patlat ve butonu büyüt (max 1.5x)
yesBtn.addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    let style = window.getComputedStyle(yesBtn);
    let matrix = new WebKitCSSMatrix(style.transform);
    let scaleX = matrix.a || 1;

    let newScale = Math.min(scaleX + 0.1, 1.5);
    yesBtn.style.transform = `scale(${newScale})`;
});

// Hayır butonuna tıklanınca yeni sekmede özür sayfası aç
noBtn.addEventListener('click', () => {
    window.open('sorry.html', '_blank');
});
