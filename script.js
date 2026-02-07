const imgElement =
document.getElementById('image1');

const container = document.getElementById('mainContainer');
const sideText = document.getElementById('sideText')
const music = document.getElementById('bgMusic')

const imageSequence = [
    "rose.jpg",
    "shayari.jpeg",
    "rose-day-wishes.jpeg",
    "her-photo.jpeg"
];

const colorSequence = [
    "rgba(30, 64, 91, 1)",
    "rgba(223, 226, 217, 1)",
    "rgba(4, 33, 55, 1)",
    "rgba(4, 33, 55, 1)"
];

let currentIndex = 0;

document.body.style.backgroundColor = colorSequence[0]


imgElement.addEventListener('click',() => {
    
if (currentIndex >=
    imageSequence.length - 1) return;

    imgElement.classList.add('hidden');
    setTimeout(() => {
        currentIndex++;

        imgElement.src = imageSequence[currentIndex];

        document.body.style.backgroundColor = colorSequence[currentIndex];

            imgElement.onload = () => {

        imgElement.classList.remove('hidden');

            if (currentIndex === 
                imageSequence.length - 1) {
                
                container.classList.add('split-view');
                sideText.innerHTML = `
                <span class="line-1">My dear love 🌹💞 </span> <br> 
                <span class="line-2">Phoolon mein sabse haseen gulab hota hai, aur meri zindagi mein sabse khaas aap ho.</span> <br> 
                <span class="line-3">Happy Rose Day 🌹</span> <br> 
                <span class="line-4">My Love🌹</span> <br> 
                <span class="line-5">My Cutie💖 </span><br> 
                <span class="line-6">Love you 😘😘😘"</span>`;
                
                sideText.classList.add('text-visible');   
                
                startHearts();

                    music.play().catch(error => {
                        console.log("Autoplay blicked: Aapko Screen par Click karna hoga.");
                    });

                    setTimeout(() => {
                        music.pause();
                        music.currentTime = 0;
                   

                    clearInterval(heartInterval);
                const activeHearts = document.getElementById('activeHeartContainer');
                
                if(activeHearts) activeHearts.style.opacity = '0';
                    setTimeout(() => activeHearts?.remove(), 2000);

                    console.log("Show ended after 40 seconds");
                    }, 40000);
            }
        };
    }, 800);
});

function startHearts() {
    const heartContainer =
document.createElement('div');
    heartContainer.className = 'heart-container';
document.body.appendChild(heartContainer);

setInterval(() => {
    const heart = 
    document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML ='❤️';

    heart.style.left =
Math.random() *100 + "vw";
        heart.style.animationDuration
= (Math.random() * 2 + 3) + "s";
        heart.style.fontsize =
(Math.random() * 20 + 10) + "px";

heartContainer.appendChild(heart);

    setTimeout(() =>
    { heart.remove(); }, 4000);
    }, 300);
}



