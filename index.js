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
const myTitle = "Cloud Engineer / Architect";
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
        <title>Profile: ${myName}</title>
        <!-- Fonts: Cinzel (Regal), Rajdhani (Tech), Italiana (Elegant) -->
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Rajdhani:wght@300;500;700&family=Italiana&display=swap" rel="stylesheet">
        <style>
            :root {
                --crimson-dark: #2a0a0a;
                --crimson-bright: #ff0f0f;
                --crimson-glow: #ff3333;
                --void-black: #050505;
                --glass-border: rgba(255, 50, 50, 0.3);
                --text-gold: #e5c100;
            }

            * { box-sizing: border-box; margin: 0; padding: 0; }

            body {
                background-color: var(--void-black);
                color: #fff;
                font-family: 'Rajdhani', sans-serif;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                perspective: 1500px; /* Deep 3D space */
            }

            /* --- DYNAMIC BACKGROUND --- */
            .void-bg {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: radial-gradient(circle at 50% 50%, #1a0000 0%, #000000 80%);
                z-index: -2;
            }
            
            .fog {
                position: absolute;
                top: -50%; left: -50%; width: 200%; height: 200%;
                background-image: url('https://www.transparenttextures.com/patterns/stardust.png');
                animation: fogDrift 60s linear infinite;
                opacity: 0.4;
                z-index: -1;
            }

            @keyframes fogDrift {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }

            /* --- MAIN CONTAINER (The Monolith) --- */
            .monolith {
                position: relative;
                width: 1100px;
                height: 650px;
                background: rgba(10, 5, 5, 0.6);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid var(--glass-border);
                border-radius: 4px;
                display: flex;
                box-shadow: 0 0 80px rgba(255, 0, 0, 0.15), inset 0 0 100px rgba(0,0,0,0.8);
                transform-style: preserve-3d;
                transition: transform 0.2s ease-out;
                overflow: hidden;
                animation: entranceZoom 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                opacity: 0;
            }

            /* Glowing Red Edge Pulse */
            .monolith::before {
                content: '';
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                border-radius: 4px;
                box-shadow: inset 0 0 30px var(--crimson-dark);
                pointer-events: none;
                z-index: 10;
            }

            /* --- LEFT SIDE: USER PROFILE --- */
            .profile-side {
                flex: 1.2;
                padding: 60px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                border-right: 1px solid rgba(255,50,50,0.1);
                position: relative;
                z-index: 2;
            }

            .profile-img-container {
                width: 180px;
                height: 180px;
                margin-bottom: 40px;
                position: relative;
            }

            .profile-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
                border: 2px solid var(--crimson-bright);
                filter: grayscale(80%) contrast(1.2);
                transition: all 0.5s ease;
                box-shadow: 0 0 30px rgba(255, 0, 0, 0.2);
            }

            .monolith:hover .profile-img {
                filter: grayscale(0%) contrast(1.1);
                box-shadow: 0 0 50px rgba(255, 0, 0, 0.5);
            }

            /* Rotating Tech Ring around image */
            .tech-ring {
                position: absolute;
                top: -10px; left: -10px; right: -10px; bottom: -10px;
                border: 1px dashed var(--crimson-glow);
                border-radius: 50%;
                animation: spin 20s linear infinite;
            }

            .user-name {
                font-family: 'Cinzel', serif;
                font-size: 3.5rem;
                font-weight: 700;
                line-height: 0.9;
                margin-bottom: 10px;
                background: linear-gradient(to right, #fff, #ccc);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                text-shadow: 0 5px 15px rgba(0,0,0,0.5);
            }

            .user-role {
                font-family: 'Rajdhani', sans-serif;
                font-size: 1.2rem;
                color: var(--crimson-bright);
                text-transform: uppercase;
                letter-spacing: 4px;
                margin-bottom: 40px;
                display: flex;
                align-items: center;
            }

            .user-role::after {
                content: '';
                height: 1px;
                flex: 1;
                background: linear-gradient(90deg, var(--crimson-bright), transparent);
                margin-left: 20px;
            }

            /* Data Stats Grid */
            .stats-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
            }

            .stat-box h4 {
                font-size: 0.8rem;
                color: #666;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-bottom: 5px;
            }

            .stat-value {
                font-size: 1.8rem;
                font-family: 'Rajdhani', sans-serif;
                font-weight: 700;
                color: #fff;
            }

            .bounty-value {
                color: var(--text-gold);
                text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
            }

            /* --- RIGHT SIDE: MIHAWK SPIRIT --- */
            .spirit-side {
                flex: 1;
                position: relative;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                padding: 60px;
                background: linear-gradient(to left, rgba(0,0,0,0.8), transparent);
            }

            /* Background Character Image */
            .spirit-bg {
                position: absolute;
                top: 0; right: 0;
                width: 120%;
                height: 100%;
                object-fit: cover;
                object-position: top center;
                opacity: 0.6;
                mask-image: linear-gradient(to right, transparent, black 40%);
                -webkit-mask-image: linear-gradient(to right, transparent, black 40%);
                transition: transform 6s ease;
                z-index: 0;
            }

            .monolith:hover .spirit-bg {
                transform: scale(1.05);
            }

            .quote-container {
                position: relative;
                z-index: 2;
                border-left: 4px solid var(--crimson-bright);
                padding-left: 30px;
                background: linear-gradient(90deg, rgba(0,0,0,0.8), transparent);
                backdrop-filter: blur(5px);
            }

            .quote-text {
                font-family: 'Italiana', serif;
                font-size: 1.8rem;
                line-height: 1.4;
                color: #eee;
                margin-bottom: 20px;
                font-style: italic;
            }

            .quote-author {
                font-family: 'Cinzel', serif;
                font-size: 1rem;
                color: var(--crimson-bright);
                letter-spacing: 3px;
                text-transform: uppercase;
                font-weight: 700;
            }

            /* --- SLASH ANIMATION OVERLAY --- */
            .slash-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: #000;
                z-index: 100;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: slashExit 0.8s cubic-bezier(0.7, 0, 0.3, 1) 0.5s forwards;
            }

            .slash-line {
                position: absolute;
                width: 150%;
                height: 2px;
                background: #fff;
                box-shadow: 0 0 20px var(--crimson-bright);
                transform: rotate(-45deg) scaleX(0);
                animation: slashStrike 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            }

            @keyframes spin { 100% { transform: rotate(360deg); } }
            
            @keyframes entranceZoom {
                from { transform: scale(0.9) translateY(50px); opacity: 0; }
                to { transform: scale(1) translateY(0); opacity: 1; }
            }

            @keyframes slashStrike {
                0% { transform: rotate(-45deg) scaleX(0); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: rotate(-45deg) scaleX(1); opacity: 0; }
            }

            @keyframes slashExit {
                0% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
                100% { clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); opacity: 0; pointer-events: none; }
            }

            /* --- MOBILE --- */
            @media (max-width: 1000px) {
                .monolith { flex-direction: column; height: auto; width: 90%; margin: 20px 0; }
                .profile-side { border-right: none; border-bottom: 1px solid rgba(255,50,50,0.1); padding: 40px; }
                .spirit-side { height: 400px; padding: 30px; }
                .spirit-bg { width: 100%; mask-image: linear-gradient(to bottom, transparent, black 20%); }
                .user-name { font-size: 2.5rem; }
            }

        </style>
    </head>
    <body>

        <!-- INTRO SLASH ANIMATION -->
        <div class="slash-overlay">
            <div class="slash-line"></div>
        </div>

        <!-- BACKGROUND -->
        <div class="void-bg"></div>
        <div class="fog"></div>

        <!-- MAIN UI MONOLITH -->
        <div class="monolith" id="card">
            
            <!-- LEFT: USER INFO -->
            <div class="profile-side">
                <div class="profile-img-container">
                    <div class="tech-ring"></div>
                    <img src="${myImage}" alt="Profile" class="profile-img">
                </div>

                <h1 class="user-name">${myName}</h1>
                <div class="user-role">${myTitle}</div>

                <div class="stats-grid">
                    <div class="stat-box">
                        <h4>Class Section</h4>
                        <div class="stat-value">${mySection}</div>
                    </div>
                    <div class="stat-box">
                        <h4>Current Bounty</h4>
                        <!-- Counter handled by JS -->
                        <div class="stat-value bounty-value" id="bountyCounter">0</div>
                    </div>
                </div>
            </div>

            <!-- RIGHT: MIHAWK SPIRIT -->
            <div class="spirit-side">
                <img src="${mihawkImage}" alt="Mihawk" class="spirit-bg">
                
                <div class="quote-container">
                    <p class="quote-text">"${myQuote}"</p>
                    <div class="quote-author">— ${quoteAuthor}</div>
                </div>
            </div>

        </div>

        <script>
            // --- 1. 3D TILT INTERACTION ---
            const card = document.getElementById('card');
            const container = document.body;

            container.addEventListener('mousemove', (e) => {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 40; // Increased divisor for subtlety
                const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
                card.style.transform = \`rotateY(\${xAxis}deg) rotateX(\${yAxis}deg)\`;
            });

            container.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateY(0deg) rotateX(0deg)';
            });

            // --- 2. BOUNTY COUNTER ANIMATION ---
            // Counts up like a computer calculation
            const bountyElement = document.getElementById('bountyCounter');
            const targetBounty = 6000000000;
            const duration = 2500; // 2.5 seconds
            const startTimestamp = performance.now();

            function step(timestamp) {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                
                // Easing function for smooth finish
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                
                const currentVal = Math.floor(easeOutQuart * targetBounty);
                
                // Format with commas and symbol
                bountyElement.innerText = "฿ " + currentVal.toLocaleString();

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    bountyElement.innerText = "฿ " + targetBounty.toLocaleString() + "-";
                }
            }

            // Start counter after the slash animation (approx 1.5s delay)
            setTimeout(() => {
                window.requestAnimationFrame(step);
            }, 1500);

        </script>

    </body>
    </html>
  `;

  res.send(htmlResponse);
});

app.listen(port, () => {
  console.log(`🏴‍☠️ Setting sail on port ${port}`);
});