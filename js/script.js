document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    if (page === 'question.html') {
        const btnNo = document.getElementById('btn-no');
        const btnYes = document.getElementById('btn-yes');
        let noClickCount = 0;
        const noTexts = [
            "Are you sure? 🥺",
            "Really sure? 😢",
            "Think again! 😭",
            "Last chance! 💔",
            "Surely not? 😩",
            "You might regret this! 😖",
            "Give it another thought! 🤔",
            "Are you absolutely certain? 🧐",
            "This could be a mistake! 😨",
            "Have a heart! ❤️",
            "Don't be so cold! 🥶",
            "Change of heart? 🥹",
            "Wouldn't you reconsider? 🥲",
            "Is that your final answer? 😰",
            "You're breaking my heart ;(",
        ];

        const moveButton = () => {
            const container = document.querySelector('.view.active');
            const containerRect = container.getBoundingClientRect();
            const btnRect = btnNo.getBoundingClientRect();

            const maxX = containerRect.width - btnRect.width;
            const maxY = containerRect.height - btnRect.height;

            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;

            btnNo.style.position = 'absolute';
            btnNo.style.left = `${randomX}px`;
            btnNo.style.top = `${randomY}px`;
        };

        btnNo.style.transition = "all 0.3s ease"; 

        btnNo.addEventListener('mouseover', () => {
             setTimeout(moveButton, 200); 
        });

        btnNo.addEventListener('touchstart', (e) => {
            e.preventDefault(); 
            btnNo.textContent = noTexts[noClickCount % noTexts.length];
            noClickCount++;

            moveButton();

            const currentSize = parseFloat(window.getComputedStyle(btnYes).fontSize);
            const newSize = currentSize * 1.3; 
            btnYes.style.fontSize = `${newSize}px`;
            
            const currentPaddingTop = parseFloat(window.getComputedStyle(btnYes).paddingTop);
            const currentPaddingRight = parseFloat(window.getComputedStyle(btnYes).paddingRight);
            btnYes.style.padding = `${currentPaddingTop * 1.1}px ${currentPaddingRight * 1.1}px`;
        });

        btnNo.addEventListener('click', (e) => {
            e.preventDefault();
            
            btnNo.textContent = noTexts[noClickCount % noTexts.length];
            noClickCount++;

            moveButton();

            const currentSize = parseFloat(window.getComputedStyle(btnYes).fontSize);
            const newSize = currentSize * 1.3; 
            btnYes.style.fontSize = `${newSize}px`;
            
            const currentPaddingTop = parseFloat(window.getComputedStyle(btnYes).paddingTop);
            const currentPaddingRight = parseFloat(window.getComputedStyle(btnYes).paddingRight);
            btnYes.style.padding = `${currentPaddingTop * 1.1}px ${currentPaddingRight * 1.1}px`;
        });
    }

    if (page === 'message.html') {
        launchConfetti();
        createBackgroundHearts();
    }
    
    if (page === 'question.html' || page === 'index.html' || page === '') {
        createBackgroundHearts();
    }
});



function createBackgroundHearts() {
    const container = document.createElement('div');
    container.className = 'bg-hearts-container';
    document.body.prepend(container);

    const colors = ['#FFD3AC', '#FFB5AB', '#E39A7B', '#DBB06B', '#E35D6A'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'bg-heart';
        heart.innerHTML = '♥';
        
        //random properties
        const size = Math.random() * 30 + 20; 
        const left = Math.random() * 100; 
        const duration = Math.random() * 5 + 5; 
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        heart.style.left = `${left}%`;
        heart.style.fontSize = `${size}px`;
        heart.style.color = color;
        heart.style.opacity = Math.random() * 0.5 + 0.3; 
        heart.style.animationDuration = `${duration}s`;
        
        container.appendChild(heart);
        
        //remove after animation
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }, 200);
}

function createFallingWhiteHearts() {
    const container = document.createElement('div');
    container.className = 'bg-hearts-container';
    document.body.prepend(container);

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        heart.innerHTML = '♥';
        
        //random properties
        const size = Math.random() * 20 + 10;
        const left = Math.random() * 100;
        const duration = Math.random() * 3 + 4;
        
        heart.style.left = `${left}%`;
        heart.style.fontSize = `${size}px`;
        heart.style.color = 'rgba(255, 255, 255, 0.7)';
        heart.style.animationDuration = `${duration}s`;
        
        container.appendChild(heart);
        
        //remove after animation
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }, 300);
}

function launchConfetti() {
    const colors = ['#FFD3AC', '#FFB5AB', '#E39A7B', '#DBB06B', '#FF69B4'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.top = '50%';
        confetti.style.left = '50%';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '100';
        confetti.style.pointerEvents = 'none';
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 5 + Math.random() * 10;
        const tx = Math.cos(angle) * 200 * (Math.random() + 0.5);
        const ty = Math.sin(angle) * 200 * (Math.random() + 0.5);
        
        confetti.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
        
        document.body.appendChild(confetti);
        
        requestAnimationFrame(() => {
            confetti.style.transform = `translate(${tx}px, ${ty}px)`;
            confetti.style.opacity = '0';
        });
        
        setTimeout(() => {
            confetti.remove();
        }, 1000);
    }
}
