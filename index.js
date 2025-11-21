import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(__dirname));

// --- DATA ---
const myName = "Kurt Angelo Labandelo";
const mySection = "BSIT SM 4102"; 
const myBounty = "6,000,000,000";

// --- IMAGES ---
const myImage = "/labandelo.jpeg";
const mihawkImage = "/mihawk.jpeg"; 
const myQuote = "A man should not fear defeat. He should fear never fighting.";
const quoteAuthor = "Dracule Mihawk";

app.get('/', (req, res) => {
  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Wanted: Cloud Engineer</title>
        <link href="https://fonts.googleapis.com/css2?family=Rye&family=Cinzel:wght@700&family=Calistoga&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
        <style>
            :root {
                --poster-paper: #f4e4bc;
                --poster-ink: #2b2b2b;
                --hawk-red: #b22222;      /* Firebrick/Maroon */
                --hawk-crimson: #dc143c;  /* Crimson */
                --hawk-glow: #ff0000;     /* Pure Red for highlights */
                --blade-dark: #0a0a0a;
            }

            * { box-sizing: border-box; }

            body {
                background-color: #020000;
                /* Deep Crimson Void Background */
                background-image: radial-gradient(circle at 50% 100%, #3a0000 0%, #000000 85%);
                font-family: 'Roboto', sans-serif;
                color: #333;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                margin: 0;
                padding: 20px;
                overflow-x: hidden;
                perspective: 1000px;
            }

            /* --- CRIMSON AURA ENGINE --- */
            .aura-layer {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 0;
                filter: contrast(1.6) brightness(1.1); 
            }

            .particle {
                position: absolute;
                border-radius: 50%;
                opacity: 0;
                mix-blend-mode: screen;
            }

            /* 1. Base Aura (Thick, Dark Red) */
            .p-base {
                background: radial-gradient(circle, rgba(139, 0, 0, 0.6) 0%, rgba(0,0,0,0) 70%);
                bottom: -60px;
                animation: floatBase linear infinite;
                filter: blur(25px);
            }

            /* 2. Rising Slashes (Sharp, Crimson) */
            .p-slash {
                background: radial-gradient(circle, #ff4d4d 0%, rgba(178, 34, 34, 0.5) 60%, transparent 100%);
                bottom: -30px;
                animation: riseSlash linear infinite;
                filter: blur(6px);
            }

            /* 3. Hawk Eye Orbs (Tiny, Glowing) */
            .p-orb {
                background: #fff;
                bottom: 0;
                box-shadow: 0 0 15px var(--hawk-glow);
                animation: orbFloat linear infinite;
            }

            @keyframes floatBase {
                0% { transform: translateX(0) scale(1); opacity: 0; }
                20% { opacity: 0.5; }
                100% { transform: translateX(30px) translateY(-150px) scale(1.8); opacity: 0; }
            }

            @keyframes riseSlash {
                0% { transform: translateX(0) translateY(0) scale(1); opacity: 0; }
                10% { opacity: 1; }
                50% { transform: translateX(-10px) translateY(-40vh) scale(0.8, 1.5); }
                100% { transform: translateX(10px) translateY(-90vh) scale(0, 2); opacity: 0; }
            }

            @keyframes orbFloat {
                0% { transform: translateY(0) translateX(0); opacity: 1; }
                100% { transform: translateY(-100vh) translateX(calc(-80px + 160px * var(--rnd))); opacity: 0; }
            }

            /* --- TEXT EFFECTS --- */
            h1.main-title {
                font-family: 'Cinzel', serif;
                color: #fff;
                font-size: 4rem;
                font-weight: 700;
                /* Crimson Glow */
                text-shadow: 
                    0 0 10px var(--hawk-crimson),
                    0 0 20px var(--hawk-red),
                    0 0 40px var(--hawk-glow);
                margin-bottom: 60px;
                letter-spacing: 6px;
                z-index: 2;
                text-transform: uppercase;
                animation: glowPulse 3s infinite alternate, slideIn 1s ease-out;
            }

            @keyframes glowPulse {
                0% { text-shadow: 0 0 10px var(--hawk-red), 0 0 20px rgba(0,0,0,0); opacity: 0.9; }
                100% { text-shadow: 0 0 20px var(--hawk-crimson), 0 0 40px var(--hawk-red), 0 0 60px var(--hawk-glow); opacity: 1; }
            }

            .container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 80px;
                max-width: 1400px;
                align-items: center;
                z-index: 2;
            }

            .card-container { perspective: 1200px; }

            .card-3d {
                width: 340px;
                height: 560px;
                position: relative;
                transition: transform 0.08s linear;
                transform-style: preserve-3d;
                animation: float 6s ease-in-out infinite;
            }

            /* --- WANTED POSTER --- */
            .wanted-poster {
                background-color: var(--poster-paper);
                background-image: url('https://www.transparenttextures.com/patterns/paper.png');
                width: 100%;
                height: 100%;
                padding: 25px 20px;
                border: 1px solid #bfa77a;
                display: flex;
                flex-direction: column;
                align-items: center;
                box-shadow: 0 30px 60px rgba(0,0,0,0.7);
                transform: translateZ(0);
            }

            .wanted-poster::after {
                content: '';
                position: absolute;
                top: -12px; width: 16px; height: 16px;
                background: #111;
                border-radius: 50%;
                box-shadow: 0 2px 4px rgba(0,0,0,0.8);
                z-index: 5;
            }

            .wanted-title {
                font-family: 'Rye', serif;
                font-size: 4rem;
                color: var(--poster-ink);
                margin: 0 0 10px 0;
                line-height: 0.8;
                text-align: center;
                width: 100%;
            }

            .image-frame {
                width: 90%;
                height: 220px;
                background: #ddd;
                border: 5px solid var(--poster-ink);
                margin-bottom: 10px;
                overflow: hidden;
                transform: translateZ(20px);
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            }

            .wanted-image { width: 100%; height: 100%; object-fit: cover; filter: sepia(0.1); }

            .dead-or-alive {
                font-family: 'Calistoga', serif;
                font-size: 1.6rem;
                color: var(--poster-ink);
                text-transform: uppercase;
                letter-spacing: 1px;
                margin: 10px 0;
            }

            .wanted-name {
                font-family: 'Calistoga', serif;
                font-size: 1.9rem;
                color: #2c2c2c;
                text-transform: uppercase;
                margin: 0;
                line-height: 1.1;
                transform: translateZ(30px);
                text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
                word-break: break-word;
            }

            .section-stamp {
                margin: 15px 0;
                color: #c0392b;
                border: 3px solid #c0392b;
                padding: 2px 10px;
                transform: rotate(-8deg) translateZ(25px);
                font-size: 1.2rem;
                font-weight: bold;
                font-family: 'Courier New', Courier, monospace;
                opacity: 0.9;
            }

            .bounty-amount {
                font-family: 'Calistoga', serif;
                font-size: 1.8rem; 
                color: #2c2c2c;
                margin-top: auto;
                margin-bottom: 30px;
                letter-spacing: 0.5px;
            }

            .marine-footer {
                position: absolute;
                bottom: 15px; width: 100%; text-align: center;
                font-family: 'Calistoga', serif; font-size: 2.2rem;
                color: var(--poster-ink); opacity: 0.2; letter-spacing: 4px;
            }

            /* --- MIHAWK QUOTE CARD (RED/BLACK STYLE) --- */
            .quote-card {
                background: #0f0f0f;
                background-image: linear-gradient(160deg, #1a0505 0%, #000000 100%);
                width: 100%;
                height: 100%;
                padding: 30px 20px;
                border-radius: 4px;
                color: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                border: 1px solid #330000;
                box-shadow: 0 0 60px rgba(178, 34, 34, 0.3);
                overflow: hidden;
            }

            /* Glowing Red Edge */
            .quote-card::before {
                content: '';
                position: absolute;
                inset: -2px;
                background: linear-gradient(45deg, var(--hawk-red), #000, var(--hawk-glow), #000, var(--hawk-red));
                background-size: 400%;
                z-index: -1;
                border-radius: 4px;
                animation: borderGlow 3s linear infinite;
                opacity: 1;
            }

            /* Reddish Sheen */
            .shine {
                position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(178, 34, 34, 0.1) 50%, rgba(255,255,255,0) 100%);
                pointer-events: none; z-index: 10;
            }

            .mihawk-profile-image {
                width: 180px; height: 180px; border-radius: 50%;
                border: 4px solid var(--hawk-red); object-fit: cover;
                transform: translateZ(40px);
                box-shadow: 0 0 30px rgba(178, 34, 34, 0.5);
            }

            .mihawk-icons {
                font-size: 2.5rem; margin-top: 15px; transform: translateZ(20px);
                text-shadow: 0 0 15px var(--hawk-red);
            }

            blockquote {
                font-family: 'Cinzel', serif; font-size: 1.4rem; line-height: 1.5;
                margin: 20px 0; color: #ffe0e0; text-align: center;
                transform: translateZ(50px);
                text-shadow: 0 2px 10px rgba(0,0,0,0.9);
            }

            .quote-author {
                font-family: 'Cinzel', serif; font-size: 1.1rem; color: var(--hawk-glow);
                font-weight: bold; letter-spacing: 4px; text-transform: uppercase;
                transform: translateZ(20px); border-top: 1px solid #330000;
                padding-top: 15px; width: 80%;
            }

            /* ANIMATIONS */
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); }
            }
            @keyframes borderGlow { 0% { background-position: 0 0; } 100% { background-position: 400% 0; } }
            @keyframes slideIn { from { transform: translateY(-50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

            @media (max-width: 800px) {
                .main-title { font-size: 2.5rem; }
                .container { gap: 40px; }
            }
        </style>
    </head>
    <body>

        <!-- Crimson Aura Container -->
        <div class="aura-layer" id="aura"></div>

        <h1 class="main-title">The Strongest</h1>

        <div class="container">
            
            <!-- CARD 1: WANTED POSTER -->
            <div class="card-container">
                <div class="card-3d" id="poster">
                    <div class="shine"></div>
                    <div class="wanted-poster">
                        <div class="wanted-title">WANTED</div>
                        <div class="image-frame">
                            <img src="${myImage}" alt="Target" class="wanted-image">
                        </div>
                        <div class="dead-or-alive">DEAD OR ALIVE</div>
                        <div class="wanted-name">${myName}</div>
                        <div class="section-stamp">${mySection}</div>
                        <div class="bounty-amount">
                            <span>฿</span> ${myBounty}-
                        </div>
                        <div class="marine-footer">MARINE</div>
                    </div>
                </div>
            </div>

            <!-- CARD 2: MIHAWK QUOTE -->
            <div class="card-container">
                <div class="card-3d" id="quote">
                    <div class="shine"></div>
                    <div class="quote-card">
                        <img src="${mihawkImage}" alt="Mihawk" class="mihawk-profile-image">
                        <div class="mihawk-icons">⚔️👁️🍷</div>
                        <blockquote>
                            "${myQuote}"
                        </blockquote>
                        <div class="quote-author">- ${quoteAuthor}</div>
                    </div>
                </div>
            </div>

        </div>

        <script>
            // --- 1. AURA GENERATOR (UPDATED COLORS) ---
            const auraContainer = document.getElementById('aura');
            
            function spawnParticle(type) {
                const p = document.createElement('div');
                p.classList.add('particle', type);
                
                // Random X start position
                p.style.left = Math.random() * 100 + 'vw';
                
                let size, dur;
                
                if(type === 'p-base') {
                    size = Math.random() * 120 + 100; 
                    dur = Math.random() * 4 + 5; 
                } else if(type === 'p-slash') {
                    size = Math.random() * 60 + 20;
                    dur = Math.random() * 2 + 2; 
                } else { // orb
                    size = Math.random() * 6 + 3; 
                    dur = Math.random() * 2 + 1; 
                    p.style.setProperty('--rnd', Math.random());
                }
                
                p.style.width = size + 'px';
                p.style.height = size + 'px';
                p.style.animationDuration = dur + 's';
                
                auraContainer.appendChild(p);
                
                setTimeout(() => { p.remove(); }, dur * 1000);
            }

            // Generation Loops
            setInterval(() => spawnParticle('p-base'), 250);
            setInterval(() => spawnParticle('p-slash'), 60);
            setInterval(() => spawnParticle('p-orb'), 40);


            // --- 2. INTERACTIVE 3D TILT ---
            const cards = [document.getElementById('poster'), document.getElementById('quote')];

            document.addEventListener('mousemove', (e) => {
                const x = e.clientX;
                const y = e.clientY;
                const midX = window.innerWidth / 2;
                const midY = window.innerHeight / 2;

                // Aggressive tilt
                const rotateX = ((y - midY) / midY) * -20;
                const rotateY = ((x - midX) / midX) * 20;

                cards.forEach(card => {
                    card.style.animation = 'none'; 
                    card.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;

                    const shine = card.querySelector('.shine');
                    const moveX = ((x / window.innerWidth) * 100) - 50;
                    const moveY = ((y / window.innerHeight) * 100) - 50;
                    
                    // Red-tinted shine for Mihawk theme
                    shine.style.background = \`linear-gradient(
                        135deg, 
                        rgba(255,255,255,0) \${0 + moveX + moveY}%, 
                        rgba(178, 34, 34, 0.2) \${50 + moveX + moveY}%, 
                        rgba(255,255,255,0) \${100 + moveX + moveY}%
                    )\`;
                });
            });

            document.addEventListener('mouseleave', () => {
                cards.forEach((card) => {
                    card.style.transform = 'rotateX(0) rotateY(0)';
                    card.querySelector('.shine').style.background = 'none';
                    card.style.animation = 'float 6s ease-in-out infinite';
                });
            });
        </script>

    </body>
    </html>
  `;

  res.send(htmlResponse);
});

app.listen(port, () => {
  console.log(`🏴‍☠️ Setting sail on port ${port}`);
});