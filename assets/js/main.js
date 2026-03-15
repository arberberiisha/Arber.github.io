// ==========================================
// 1. Navigation Bar Scroll Effect
// ==========================================
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg', 'bg-dark/95');
        nav.classList.remove('bg-dark/90');
    } else {
        nav.classList.remove('shadow-lg', 'bg-dark/95');
        nav.classList.add('bg-dark/90');
    }
});


// ==========================================
// 2. Project Data (Now with multiple images!)
// ==========================================
const projectDetails = [
    {
        title: "Visit.al",
        date: "Sep 2023",
        // Added the extra images from your folder
        images: [
            "assets/images/visital.png",
            "assets/images/hotelView.png",
            "assets/images/mapVisital.png"
        ],
        description: "A comprehensive booking platform. Hotel owners can manage listings, upload room details, and manage availability. Clients can easily search, reserve rooms, and leave verified reviews. Built with a scalable microservices architecture to handle high traffic during peak seasons.",
        stack: ["Spring Boot", "MySQL", "Hibernate"]
    },
    {
        title: "Real-Time Chat App",
        date: "Jun 2022",
        // Just one image here, the slider arrows will hide automatically
        images: [
            "assets/images/chat.png"
        ],
        description: "A highly responsive messaging application supporting real-time data transfer. Features include direct messages, group chats, typing indicators, and secure user authentication to ensure privacy and data integrity.",
        stack: ["Java", "WebSockets", "Spring Security"]
    },
    {
        title: "Oneri",
        date: "Apr 2021",
        // Added all the Oneri screenshots!
        images: [
            "assets/images/oneri.png",
            "assets/images/oneri1.png",
            "assets/images/oneri2.png",
            "assets/images/oneri3.png",
            "assets/images/oneri4.png"
        ],
        description: "An internal sales management system designed to track team performance. It allows managers to handle active orders, calculate revenue, and monitor exact order statuses in real-time.",
        stack: ["Spring Boot", "PostgreSQL"]
    },
    {
        title: "DataDear",
        date: "Feb 2023",
        images: [
            "assets/images/datadear.png"
        ],
        description: "A powerful backend integration tool for finance teams. It securely links enterprise accounting software like Xero, QuickBooks, and WorkflowMax directly to spreadsheet workflows for live financial analysis.",
        stack: ["REST APIs", "OAuth"]
    },
    {
        title: "Elexico",
        date: "Jun 2022",
        images: [
            "assets/images/elexico.png"
        ],
        description: "A complete job management ecosystem tailored for HR departments. Features include posting job listings, finding candidates, automatically generating employee contracts, and executing complex salary calculations.",
        stack: ["Spring Boot", "Docker"]
    }
];


// ==========================================
// 3. Modal & Slider Logic
// ==========================================
const projectButtons = document.querySelectorAll('#projects button');

// Global variables to track the current slider state
let currentSlideIndex = 0;
let currentProjectImages = [];

projectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        openModal(index);
    });
});

function openModal(index) {
    const project = projectDetails[index];
    
    // Reset slider state for the newly opened project
    currentProjectImages = project.images;
    currentSlideIndex = 0;
    
    // Generate the HTML for the tech stack tags
    const tagsHtml = project.stack.map(tag => 
        `<span class="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">${tag}</span>`
    ).join('');

    // Construct the Modal HTML
    const modalHtml = `
        <div id="project-modal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-0 transition-opacity duration-300">
            <div class="absolute inset-0 bg-darker/90 backdrop-blur-sm cursor-pointer" onclick="closeModal()"></div>
            
            <div class="relative bg-dark border border-gray-700 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform scale-95 transition-transform duration-300 flex flex-col md:flex-row">
                
                <button onclick="closeModal()" class="absolute top-4 right-4 bg-gray-800/80 backdrop-blur hover:bg-gray-700 text-gray-300 hover:text-white rounded-full p-2 transition-colors z-20">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                
                <div class="md:w-1/2 relative bg-gray-900 flex items-center justify-center group min-h-[250px]">
                    <img id="modal-image" src="${currentProjectImages[0]}" alt="${project.title}" class="w-full h-full object-contain p-4 transition-opacity duration-300">
                    
                    ${currentProjectImages.length > 1 ? `
                        <button onclick="changeSlide(-1)" class="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-primary text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all z-10">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <button onclick="changeSlide(1)" class="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-primary text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all z-10">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                        <div class="absolute bottom-4 right-4 bg-black/70 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                            <span id="slide-counter">1</span> / ${currentProjectImages.length}
                        </div>
                    ` : ''}
                </div>
                
                <div class="p-8 md:w-1/2 flex flex-col justify-center">
                    <span class="text-sm font-bold text-gray-400 mb-2">${project.date}</span>
                    <h3 class="text-3xl font-extrabold text-white mb-4">${project.title}</h3>
                    <p class="text-gray-300 leading-relaxed mb-6 text-sm">${project.description}</p>
                    
                    <div class="flex flex-wrap gap-2 mb-8">
                        ${tagsHtml}
                    </div>
                </div>
            </div>
        </div>
    `;

    // Inject modal into the page
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    document.body.style.overflow = 'hidden';

    // Trigger animation
    setTimeout(() => {
        const modal = document.getElementById('project-modal');
        modal.classList.remove('opacity-0');
        modal.querySelector('.transform').classList.remove('scale-95');
    }, 10);
}

// Function to handle the slider next/prev clicks
function changeSlide(direction) {
    currentSlideIndex += direction;
    
    // Loop back to start or end if we go out of bounds
    if (currentSlideIndex >= currentProjectImages.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = currentProjectImages.length - 1;
    }

    const imgElement = document.getElementById('modal-image');
    const counterElement = document.getElementById('slide-counter');
    
    // Smooth fade effect
    imgElement.style.opacity = '0.4';
    
    setTimeout(() => {
        imgElement.src = currentProjectImages[currentSlideIndex];
        if (counterElement) {
            counterElement.innerText = currentSlideIndex + 1;
        }
        imgElement.style.opacity = '1';
    }, 150);
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('opacity-0');
    modal.querySelector('.transform').classList.add('scale-95');
    
    setTimeout(() => {
        modal.remove();
        document.body.style.overflow = '';
    }, 300);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('project-modal')) {
        closeModal();
    }
});