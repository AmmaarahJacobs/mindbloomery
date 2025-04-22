// Smooth scrolling for navigation
document.querySelectorAll('.pixel-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        scrollToSection(targetId);
    });
});

function scrollToSection(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
        });
    }
}

// Mood tracker functionality
const moodSlider = document.getElementById('mood');
const moodDisplay = document.getElementById('mood-display');

moodSlider.addEventListener('input', function() {
    updateMoodDisplay(this.value);
});

function updateMoodDisplay(value) {
    const moods = ['😭', '😢', '😐', '🙂', '😊'];
    moodDisplay.textContent = moods[value - 1];
}

function saveMood() {
    const moodValue = moodSlider.value;
    const moods = ['Very Sad', 'Sad', 'Neutral', 'Happy', 'Very Happy'];
    alert(`Mood saved: ${moods[moodValue - 1]}`);
    // In a real app, you would save this to a database
}

// Profile form handling
function saveProfile() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    
    if (name && surname && email) {
        alert('Profile saved successfully!');
        // In a real app, you would save this to a database
    } else {
        alert('Please fill in all required fields.');
    }
}

// Affirmations Generator
const affirmations = [
    "I am worthy of love and respect.",
    "I choose to think positive thoughts.",
    "I am capable of achieving my goals.",
    "I embrace challenges as opportunities to grow.",
    "I am enough just as I am.",
    "I radiate positivity and confidence.",
    "I trust in my ability to handle whatever comes.",
    "I am creating a life I love.",
    "I deserve happiness and inner peace.",
    "I am constantly growing and evolving.",
    "I release all negative self-talk.",
    "I am surrounded by love and support.",
    "I believe in my dreams and aspirations.",
    "I am resilient and can get through anything.",
    "I choose to see the good in every situation.",
    "I am proud of how far I've come.",
    "I trust the journey of my life.",
    "I am open to all the joy life has to offer.",
    "I forgive myself and others.",
    "I am creating positive change in my life."
];

const affirmationText = document.getElementById('affirmation-text');
const generateBtn = document.getElementById('generate-affirmation');
const saveBtn = document.getElementById('save-affirmation');
const savedList = document.getElementById('saved-affirmations-list');

// Generate random affirmation
function generateAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    affirmationText.innerHTML = `<p>"${affirmations[randomIndex]}"</p>`;
    return affirmations[randomIndex];
}

// Save affirmation to list
function saveAffirmation() {
    const currentAffirmation = affirmationText.textContent.replace(/"/g, '').trim();
    if (currentAffirmation && !currentAffirmation.includes("Click the button")) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${currentAffirmation}</span>
            <button onclick="this.parentElement.remove()">✕</button>
        `;
        savedList.appendChild(li);
    }
}

// Event listeners
generateBtn.addEventListener('click', generateAffirmation);
saveBtn.addEventListener('click', saveAffirmation);

// Generate first affirmation on load
generateAffirmation();

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Article modal functionality
function openArticle(topic) {
    const modal = document.getElementById('article-modal');
    const content = document.getElementById('article-content');
    
    // Clear previous content
    content.innerHTML = '';
    
    // Add topic-specific content
    let articleContent = '';
    let exercises = '';
    
    switch(topic) {
        case 'anxiety':
            articleContent = `
                <h3>Understanding Anxiety</h3>
                <p>Anxiety is your body's natural response to stress. It's a feeling of fear or apprehension about what's to come. While occasional anxiety is a normal part of life, anxiety disorders involve more than temporary worry or fear.</p>
                <h3>Coping Mechanisms</h3>
                    Practice deep breathing exercises <br>
                    Limit caffeine and alcohol <br>
                    Get enough sleep <br>
                    Exercise regularly <br>
                    Practice mindfulness and meditation                                 
            `;
            exercises = `
                <div class="exercise">
                    <h4>5-4-3-2-1 Grounding Exercise</h4>
                    <p>When feeling anxious, try this:</p>
                        Name 5 things you can see <br>
                        Name 4 things you can touch <br>
                        Name 3 things you can hear <br>
                        Name 2 things you can smell <br>
                        Name 1 thing you can taste <br>                                   
                    <p>This helps bring your focus back to the present moment.</p>
                </div>
            `;
            break;
            
        case 'depression':
            articleContent = `
                <h3>Understanding Depression</h3>
                <p>Depression is a common and serious medical illness that negatively affects how you feel, the way you think and how you act. It causes feelings of sadness and/or a loss of interest in activities you once enjoyed.</p>
                <h3>Coping Mechanisms</h3>
                    Set small, achievable goals <br>
                    Maintain a routine <br>
                    Connect with others <br>
                    Challenge negative thoughts <br>
                    Consider professional help                               
            `;
            exercises = `
                <div class="exercise">
                    <h4>Positive Affirmations</h4>
                    <p>Repeat these affirmations daily:</p>
                        "I am worthy of love and happiness." <br>
                        "This feeling is temporary." <br>
                        "I have overcome challenges before, and I can do it again." <br>
                        "I am stronger than I think." 
                    <button class="pixel-button" onclick="alert('Affirmations can help rewire negative thought patterns.')">Why This Helps</button>
                </div>
            `;
            break;
            
        // Add content for other topics similarly
        case 'trauma':
            articleContent = `
                <h3>Understanding Trauma</h3>
                <p>Trauma is the response to a deeply distressing or disturbing event that overwhelms an individual's ability to cope, causes feelings of helplessness, diminishes their sense of self and their ability to feel a full range of emotions and experiences.</p>
                <h3>Coping Mechanisms</h3>
                    Practice self-care <br>
                    Establish safety <br>
                    Connect with supportive people <br>
                    Consider therapy (EMDR, CBT, etc.) <br>
                    Be patient with your healing process
            `;
            exercises = `
                <div class="exercise">
                    <h4>Safe Place Visualization</h4>
                    <p>Close your eyes and imagine a place where you feel completely safe and relaxed. Engage all your senses:</p>
                        What do you see? <br>
                        What do you hear? <br>
                        What do you smell? <br>
                        How does it feel? <br>
                    <p>Visit this place in your mind when you feel overwhelmed.</p>
                </div>
            `;
            break;
            
        case 'negative-self-talk':
            articleContent = `
                <h3>Understanding Negative Self-Talk</h3>
                <p>Negative self-talk is any inner dialogue you have with yourself that may be limiting your ability to believe in yourself and your own abilities to reach your potential.</p>
                <h3>Coping Mechanisms</h3>
                    Identify negative thought patterns <br>
                    Challenge the thoughts with evidence <br>
                    Replace with positive alternatives <br>
                    Practice self-compassion <br>
                    Surround yourself with positive influences <br>
            `;
            exercises = `
                <div class="exercise">
                    <h4>Thought Record Exercise</h4>
                    <p>When you notice negative self-talk:</p>
                        Write down the negative thought <br>
                        Identify the emotion it causes <br>
                        Challenge the thought's validity <br>
                        Replace with a more balanced thought: <br>
                        Change I always fail to - I sometimes struggle, but I also have many successes
                </div>
            `;
            break;
            
        case 'toxic-family':
            articleContent = `
                <h3>Understanding Toxic Family Dynamics</h3>
                <p>Toxic family relationships can cause stress, hurt, and other negative emotions. These relationships may be emotionally or physically damaging, or you may simply feel drained or unhappy after interacting with certain family members.</p>
                <h3>Coping Mechanisms</h3>
                    Set healthy boundaries <br>
                    Limit exposure when possible <br>
                    Don't take their behavior personally <br>
                    Build a support network outside the family <br>
                    Consider family therapy if appropriate
            `;
            exercises = `
                <div class="exercise">
                    <h4>Boundary Setting Practice</h4>
                    <p>Practice these boundary-setting statements:</p>
                    <p>
                        "I'm not comfortable with that topic. Let's talk about something else." <br>
                        "I need some space right now. I'll reach out when I'm ready." <br>
                        "I won't participate in conversations that put me down." <br>
                    </p>
                    <p>Role-play these with a trusted friend to build confidence.</p>
                </div>
            `;
            break;
            
        case 'negative-peers':
            articleContent = `
                <h3>Understanding Negative Peer Relationships</h3>
                <p>Negative peer relationships are those that leave you feeling drained, disrespected, or devalued. These relationships may involve criticism, manipulation, or other toxic behaviors.</p>
                <h3>Coping Mechanisms</h3>
                    Evaluate if the relationship is worth maintaining <br>
                    Communicate your feelings clearly <br>
                    Spend time with positive influences <br>
                    Practice assertiveness <br>
                    Don't be afraid to distance yourself 
            `;
            exercises = `
                <div class="exercise">
                    <h4>Relationship Evaluation</h4>
                    <p>Ask yourself about this relationship:</p>
                        How do I feel after interacting with this person? <br>
                        Is this relationship balanced? <br>
                        Does this person respect my boundaries? <br>
                        What would I advise a friend in this situation?
                    <button class="pixel-button" onclick="alert('Sometimes distancing yourself from negative influences is an act of self-care.')">Reminder</button>
                </div>
            `;
            break;
    }
    
    content.innerHTML = `
        <h2>${topic.charAt(0).toUpperCase() + topic.replace('-', ' ').slice(1)}</h2>
        ${articleContent}
        <h3>Interactive Exercise</h3>
        ${exercises}
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('article-modal').style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('article-modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Initialize mood display
updateMoodDisplay(moodSlider.value);

// Add some sample chat messages
window.addEventListener('DOMContentLoaded', function() {
    const sampleMessages = [
        "Welcome to our community chat! Feel free to share your thoughts anonymously.",
        "Remember to be kind and supportive to each other.",
        "Has anyone tried mindfulness for anxiety? I'd love to hear experiences."
    ];
    
    const chatMessages = document.getElementById('chat-messages');
    
    sampleMessages.forEach((msg, index) => {
        setTimeout(() => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('chat-message');
            messageElement.textContent = msg;
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, index * 1000);
    });
});

// Add this at the end of your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Create background container
    const bgContainer = document.createElement('div');
    bgContainer.className = 'pixel-bg';
    document.body.insertBefore(bgContainer, document.body.firstChild);
    
    // Create pixel flowers
    for (let i = 1; i <= 4; i++) {
        const flower = document.createElement('div');
        flower.className = `pixel-flower pixel-flower-${i}`;
        bgContainer.appendChild(flower);
    }
    
    // Create pixel splashes
    for (let i = 1; i <= 2; i++) {
        const splash = document.createElement('div');
        splash.className = `pixel-splash pixel-splash-${i}`;
        bgContainer.appendChild(splash);
    }
    
    // Add some random small pixel dots
    for (let i = 0; i < 20; i++) {
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.width = '4px';
        dot.style.height = '4px';
        dot.style.backgroundColor = Math.random() > 0.5 ? 'var(--pastel-green)' : 'var(--pastel-purple)';
        dot.style.borderRadius = '50%';
        dot.style.opacity = '0.3';
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animation = `float ${10 + Math.random() * 20}s infinite linear`;
        dot.style.animationDelay = `${Math.random() * 10}s`;
        bgContainer.appendChild(dot);
    }
});

// Update scrollToSection function to account for navbar height
function scrollToSection(targetId) {
    const navbarHeight = document.querySelector('.pixel-nav').offsetHeight;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight - 20,
            behavior: 'smooth'
        });
    }
}