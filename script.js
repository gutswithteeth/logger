function summonVoid() {
    document.documentElement.requestFullscreen();
    const loadingContainer = document.getElementById('loadingContainer');
    loadingContainer.style.display = 'flex';
    
    playCreepySound();
    createPentagrams();
    
    setTimeout(() => {
        const infoContainer = document.getElementById('infoContainer');
        infoContainer.style.display = 'block';
        loadingContainer.style.display = 'none';
        
        const info = `
            <h2>The Void's Harvest</h2>
            ${createInfoItem("Moment of Soul Capture", new Date().toLocaleString())}
            ${createInfoItem("Digital Essence Signature", navigator.userAgent)}
            ${createInfoItem("Void Window Dimensions", `${window.screen.width}x${window.screen.height}`)}
            ${createInfoItem("Abyss Color Depth", `${window.screen.colorDepth}-bit`)}
            ${createInfoItem("Mortal Realm", navigator.platform)}
            ${createInfoItem("Tongue of the Damned", navigator.language)}
            ${createInfoItem("Traces of Past Rituals", navigator.cookieEnabled ? "Etched in Blood" : "Cleansed")}
            ${createInfoItem("Cloak of Shadows", navigator.doNotTrack ? "Impenetrable" : "Torn Asunder")}
            ${createInfoItem("Ethereal Connection", navigator.onLine ? "Bound to the Void" : "Adrift in Darkness")}
            ${createInfoItem("Fragments of Shattered Psyche", navigator.hardwareConcurrency)}
            ${createInfoItem("Temporal Anomaly", new Date().getTimezoneOffset())}
            ${createInfoItem("Arcane Script Version", navigator.appVersion)}
            ${createInfoItem("Ethereal Vendor", navigator.vendor)}
            ${createInfoItem("Dimensional Coordinates", "Fetching...")}
        `;
        
        infoContainer.innerHTML = info;
        
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const ipInfo = document.createElement('div');
                ipInfo.className = 'info-item';
                ipInfo.innerHTML = `<span class="info-label">Void-Touched IP:</span> <span>${data.ip}</span>`;
                infoContainer.appendChild(ipInfo);
            })
            .catch(error => console.error('Error fetching IP:', error));

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const coordsInfo = document.createElement('div');
                coordsInfo.className = 'info-item';
                coordsInfo.innerHTML = `<span class="info-label">Dimensional Coordinates:</span> <span>${position.coords.latitude}, ${position.coords.longitude}</span>`;
                infoContainer.appendChild(coordsInfo);
            });
        }

        scheduleRandomScares();
    }, 5000);
}

function createInfoItem(label, value) {
    return `<div class="info-item"><span class="info-label">${label}:</span> <span>${value}</span></div>`;
}

function createPentagrams() {
    const background = document.getElementById('background');
    background.innerHTML = '';
    for (let i = 0; i < 13; i++) {
        const pentagram = document.createElement('img');
        pentagram.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Pentagram.svg/1200px-Pentagram.svg.png';
        pentagram.className = 'pentagram';
        pentagram.style.width = `${Math.random() * 100 + 50}px`;
        pentagram.style.left = `${Math.random() * 100}%`;
        pentagram.style.top = `${Math.random() * 100}%`;
        pentagram.style.animation = `flicker ${Math.random() * 10 + 5}s infinite`;
        background.appendChild(pentagram);
    }
}

function playCreepySound() {
    const audio = new Audio('https://freesound.org/data/previews/367/367942_5121236-lq.mp3');
    audio.loop = true;
    audio.play();
}

function scheduleRandomScares() {
    setInterval(() => {
        if (Math.random() < 0.2) { // 20% chance every 10 seconds
            showJumpScare();
        }
    }, 10000);
}

function showJumpScare() {
    const jumpScare = document.getElementById('jumpScare');
    jumpScare.style.display = 'flex';
    const scareSound = new Audio('https://freesound.org/data/previews/415/415209_5121236-lq.mp3');
    scareSound.play();
    setTimeout(() => {
        jumpScare.style.display = 'none';
    }, 500);
}

const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});
