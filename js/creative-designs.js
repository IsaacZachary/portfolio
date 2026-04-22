const creativeDesigns = [
    { title: "Safari Wheels Poster", path: "assets/creative-designs/SAFARI WHEELs poSTER.png", category: "Poster", story: "Showcasing robust off-road spirit with bold typography and dynamic layout." },
    { title: "Willinge Technologies CCTV", path: "assets/creative-designs/WILLINGE TECHNOLOGIEs poSTER CCTV.jpg", category: "Poster", story: "Highlighting security solutions with sleek, modern technology displays." },
    { title: "Mobkazi Flyer V12", path: "assets/creative-designs/MOBKAZI FLYER V12.png", category: "Flyer", story: "Marketing the comprehensive business management OS in a clean corporate format." },
    { title: "Sifa Net Flyer", path: "assets/creative-designs/Sifa Net flyer 2.png", category: "Flyer", story: "Promoting high-speed connectivity solutions tailored for home and business users." },
    { title: "Graphics Training Poster", path: "assets/creative-designs/gRAPHICs training poSTER   .png", category: "Poster", story: "An engaging call-to-action for aspiring designers to join intensive creative training." },
    { title: "Tetra Beauty College Flyer", path: "assets/creative-designs/Tetra Beauty College Flyer.png", category: "Flyer", story: "Recruiting future stylists with a touch of elegance and professionalism." },
    { title: "SWAHILI BITES WEEKLY MENU", path: "assets/creative-designs/SWAHILI BITES WEEKLY MENU poster.jpg", category: "Menu", story: "Making every bite look delicious through appetising layout design." },
    { title: "Jumia Agent Poster", path: "assets/creative-designs/Rajab Said Jumia Black Friday poster sales officer.jpg", category: "Flyer", story: "Empowering local agents with professional e-commerce marketing tools." },
    { title: "Cyber Services Flyer", path: "assets/creative-designs/HI2 Cyber Services poster.jpg", category: "Poster", story: "Modernizing the identity of a local cyber hub for the digital age." },
    { title: "Global Youth Day", path: "assets/creative-designs/Global Youth Day Bababdogo Shadow mountain childrens home Poster.png", category: "Poster", story: "Rallying youth support for a local children's home through compassion." },
    { title: "Mazingira Day", path: "assets/creative-designs/Happy Mazingira day First basics poster.jpg", category: "Poster", story: "Promoting environmental consciousness through green, eco-centric design." },
    { title: "Music Cover Design", path: "assets/creative-designs/Stuck on you cover.jpg", category: "Music Cover", story: "Translating emotional tracks into compelling digital artwork." },
    { title: "KW Kenya Awards UI", path: "assets/creative-designs/KW Kenya Awards UI page 1 hero.png", category: "UI Design", story: "Where design meets code—crafting the digital stage for national awards." },
    { title: "Photo Studio Branding", path: "assets/creative-designs/Hi2 Photo Studio poster.png", category: "Branding", story: "Framing the perfect shot with a professional studio identity." },
    { title: "Cocktail Celebration", path: "assets/creative-designs/Red Cocktail Celebration Instagram Post.png", category: "Social Media", story: "Crafting digital buzz for hospitality and social gatherings." },
    { title: "Berry Fibre Hotspot Landing", path: "assets/creative-designs/Berry Fibre Hotspot Landing.png", category: "Web Design", story: "A high-conversion landing page designed for a local ISP for seamless user onboarding." },
    { title: "Humble Crib Investment Services Banner", path: "assets/creative-designs/Humble Crib Investment Services Banner.jpg", category: "Banner", story: "Building trust and showcasing financial growth with clean aesthetics." },
    { title: "Adventurer Day 2023", path: "assets/creative-designs/Adventurer Day 2023 Poster speaker Fidel lelei.jpg", category: "Poster", story: "Elevating event visibility through striking typography and layout." },
    { title: "Afrobeat Mix Vol 2", path: "assets/creative-designs/Afrobeat Mix Vol 2 Poster.JPG", category: "Poster", story: "Capturing the rhythm and energy of African music in a single frame." },
    { title: "Funeral Program Design", path: "assets/creative-designs/Benson ontweka Omari Funeral poster image.jpg", category: "Poster", story: "A dignified tribute celebrating a life well-lived through respectful design." },
    { title: "Chronixx Mixtape", path: "assets/creative-designs/Chronixx Mixtape djbazeh poster.jpg", category: "Mixtape Cover", story: "Visualizing the soul of reggae for a local artist's breakthrough release." },
    { title: "Class of 2023", path: "assets/creative-designs/Class of 2023.jpg", category: "Commemorative", story: "Freezing a moment in time for a generation of graduates." },
    { title: "Computer Packages Book Cover", path: "assets/creative-designs/Computer Packages Cover book.jpg", category: "Book Cover", story: "Simplifying complex tech education with an inviting, modern cover." },
    { title: "Garrison Development Day", path: "assets/creative-designs/Embakasi Garisson Development Day.JPG", category: "Event Branding", story: "Empowering community progress with clear, professional event branding and development initiatives." },
    { title: "Internet Packages Flyer", path: "assets/creative-designs/First Basics Internet Packages poster.JPG", category: "Flyer", story: "Connecting the community with vibrant, high-impact service brochures." },
    { title: "Customer Service Week", path: "assets/creative-designs/Happy Customer Service week first basics flyer.jpg", category: "Flyer", story: "Expressing gratitude and brand values during appreciation weeks." },
    { title: "Tech Services Banner", path: "assets/creative-designs/JAK all time tech services banner.jpg", category: "Banner", story: "Broadcasting technical expertise for a growing repair ecosystem." },
    { title: "Birthday Celebration", path: "assets/creative-designs/Kamothos Birthday party cover.jpg", category: "Invite", story: "Adding personal warmth to digital invitations for milestone events." },
    { title: "PLP Coding Safari", path: "assets/creative-designs/PLP Vibe Coding AI Safari TUK Edition poster.jpg", category: "Poster", story: "Inspiring the next wave of engineers with a wild tech aesthetic." },
    { title: "TechCare Africa Poster", path: "assets/creative-designs/Presenting TechCare frica poster.jpg", category: "Poster", story: "Launching a support network that cares for Africa's digital heartbeat." },
    { title: "Flash Sale Poster", path: "assets/creative-designs/Quick Sale Poster.JPG", category: "Poster", story: "Driving urgent action with high-contrast, retail-focused messaging." },
    { title: "Sifa Internet Branding", path: "assets/creative-designs/Sifa Internet.JPG", category: "Branding", story: "Establishing a reliable ISP presence in a competitive local market." },
    { title: "Day Care Services", path: "assets/creative-designs/Tetra Day Care Poster.png", category: "Poster", story: "Communicating trust and safety for the community's youngest members." },
    { title: "Leadership Engagement", path: "assets/creative-designs/With PLP Principal.jpg", category: "Social", story: "Documenting and celebrating key milestones in educational leadership." },
    { title: "Women's Day Special", path: "assets/creative-designs/happy womens day humble crib poster.jpg", category: "Poster", story: "Celebrating empowerment and progress with vibrant floral aesthetics." },
    { title: "Huntsman Motors Poster", path: "assets/creative-designs/huntsmanmotors poster.jpg", category: "Branding", story: "Defining the visual identity for a leader in premium automotive care." }
];

let currentIndex = 0;
const galleryIncrement = 8;
const galleryGrid = document.getElementById('creative-designs-grid');
const loadMoreBtn = document.getElementById('load-more-designs');
// Lightbox — z-index above navbar (9999), fully opaque
const createLightbox = () => {
    let modal = document.getElementById('lightbox-modal');
    if (modal) return modal;
    modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.97);display:none;align-items:center;justify-content:center;flex-direction:column;padding:1rem;cursor:zoom-out;';
    modal.innerHTML = `
        <button id="lb-close" style="position:fixed;top:1rem;right:1.25rem;color:#fff;font-size:2.5rem;line-height:1;background:rgba(255,255,255,0.1);border:none;border-radius:50%;width:2.75rem;height:2.75rem;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:10000;">&times;</button>
        <div style="display:flex;flex-direction:column;align-items:center;max-width:94vw;">
            <img id="lb-img" src="" alt="" style="max-width:90vw;max-height:76vh;width:auto;height:auto;object-fit:contain;border-radius:0.5rem;box-shadow:0 30px 70px rgba(0,0,0,0.8);display:block;">
            <div id="lb-cap" style="margin-top:1rem;padding:0.6rem 1.25rem;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:0.75rem;text-align:center;max-width:560px;">
                <h3 id="lb-title" style="color:#fff;font-size:1.05rem;font-weight:700;margin:0 0 0.25rem;"></h3>
                <p id="lb-desc" style="color:rgba(255,255,255,0.65);font-size:0.8rem;margin:0;"></p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) closeLightbox(); });
    modal.querySelector('#lb-close').addEventListener('click', closeLightbox);
    return modal;
};

const modal = createLightbox();

function closeLightbox() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openPreview(design) {
    document.getElementById('lb-img').src = design.path;
    document.getElementById('lb-title').textContent = design.title;
    document.getElementById('lb-desc').textContent = design.story;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function renderDesigns(limit, filter = 'all') {
    if (!galleryGrid) return;

    if (filter !== 'current') {
        galleryGrid.innerHTML = '';
        currentIndex = 0;
    }

    const currentFilter = filter === 'current' ? (document.querySelector('#creative-filters .filter-btn.active')?.dataset.filter || 'all') : filter;
    
    const filtered = currentFilter === 'all' 
        ? creativeDesigns 
        : creativeDesigns.filter(d => d.category.includes(currentFilter) || d.title.includes(currentFilter));

    const toRender = filtered.slice(currentIndex, currentIndex + limit);
    
    toRender.forEach(design => {
        const item = document.createElement('div');
        item.className = 'creative-card group cursor-pointer animate-fade-in opacity-0 translate-y-8 h-full';
        item.innerHTML = `
            <div class="relative h-full flex flex-col bg-white rounded-[2rem] shadow-sm hover:shadow-xl border border-border/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <!-- Image Container - Same as Project Cards -->
                <div class="aspect-video w-full overflow-hidden bg-black relative">
                    <div class="absolute inset-0 opacity-40 blur-lg scale-110">
                        <img src="${design.path}" alt="" class="w-full h-full object-cover">
                    </div>
                    <img src="${design.path}" alt="${design.title}" class="relative w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110" loading="lazy">
                </div>

                <!-- Card Content - Same as Project Cards -->
                <div class="p-8 flex flex-col flex-grow space-y-4">
                    <div class="flex items-center justify-between">
                        <span class="tech-badge bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-wider px-3 py-1">
                            ${design.category}
                        </span>
                    </div>
                    
                    <h3 class="font-headline text-2xl font-bold text-text-primary group-hover:text-primary transition-colors leading-tight">
                        ${design.title}
                    </h3>
                    
                    <p class="text-text-secondary text-sm leading-relaxed line-clamp-3">
                        ${design.story}
                    </p>

                    <div class="pt-6 mt-auto border-t border-border/10 flex items-center">
                        <span class="inline-flex items-center text-primary font-bold text-sm tracking-wide group/link">
                            <span>more</span>
                            <i class="fas fa-arrow-right text-[10px] ml-2 group-hover/link:translate-x-1 transition-transform"></i>
                        </span>
                    </div>
                </div>
            </div>
        `;
        
        item.addEventListener('click', () => openPreview(design));
        galleryGrid.appendChild(item);
        
        setTimeout(() => {
            item.classList.remove('opacity-0', 'translate-y-8');
        }, (galleryGrid.children.length % limit) * 100);
    });

    currentIndex += toRender.length;
    
    if (loadMoreBtn) {
        if (currentIndex >= filtered.length) {
            loadMoreBtn.classList.add('hidden');
        } else {
            loadMoreBtn.classList.remove('hidden');
        }
    }
}

function initFilters() {
    const filterBtns = document.querySelectorAll('#creative-filters .filter-btn');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active', 'bg-primary', 'text-white'));
            btn.classList.add('active', 'bg-primary', 'text-white');
            renderDesigns(galleryIncrement, btn.dataset.filter);
        });
    });
}

function injectFeaturedCreative() {
    const mainGrid = document.querySelector('#projects-grid .grid');
    if (!mainGrid) return;

    const featuredTitles = ["KW Kenya Awards UI", "Tetra Beauty College Flyer", "Photo Studio Branding"];
    const featured = creativeDesigns.filter(d => featuredTitles.some(t => d.title.toLowerCase().includes(t.toLowerCase())));

    featured.forEach(design => {
        const article = document.createElement('article');
        article.className = 'group bg-white border border-border/40 shadow-sm hover:shadow-xl rounded-[2rem] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col';
        article.dataset.category = 'creative';
        article.innerHTML = `
            <div class="aspect-video overflow-hidden bg-black relative cursor-pointer" onclick="window.location.href='creative-designs.html'">
                <div class="absolute inset-0 opacity-40 blur-lg scale-110">
                    <img src="${design.path}" alt="" class="w-full h-full object-cover">
                </div>
                <img src="${design.path}" alt="${design.title}" class="relative w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 p-4">
            </div>
            <div class="p-8 space-y-4 flex-grow flex flex-col">
                <div class="flex items-center justify-between">
                    <span class="tech-badge bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-wider px-3 py-1">${design.category}</span>
                </div>
                <h3 class="font-headline text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                    ${design.title}</h3>
                <p class="text-body-sm text-text-secondary leading-relaxed line-clamp-3">
                    ${design.story}
                </p>
                <div class="pt-6 mt-auto border-t border-border/10">
                    <a href="creative-designs.html" class="inline-flex items-center space-x-2 text-primary font-bold text-sm tracking-wide group/link">
                        <span>more</span>
                        <i class="fas fa-arrow-right text-[10px] ml-2 group-hover/link:translate-x-1 transition-transform"></i>
                    </a>
                </div>
            </div>
        `;
        mainGrid.appendChild(article);
    });
}

// Interactive Hero Logic (Typing & Slider)
function initHeroInteractivity() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    const phrases = ["Digital Dreams", "Brand Identities", "Visual Mastery", "High-Impact Ads", "Creative Futures"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();

    // Background Slider with dot updates
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.slide-dot');
    if (slides.length > 0) {
        let currentSlide = 0;

        const goToSlide = (index) => {
            slides[currentSlide].classList.add('opacity-0');
            slides[currentSlide].classList.remove('opacity-100');
            if (dots[currentSlide]) dots[currentSlide].classList.replace('bg-white', 'bg-white/40');

            currentSlide = index % slides.length;

            slides[currentSlide].classList.remove('opacity-0');
            slides[currentSlide].classList.add('opacity-100');
            if (dots[currentSlide]) dots[currentSlide].classList.replace('bg-white/40', 'bg-white');
        };

        dots.forEach(dot => {
            dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)));
        });

        setInterval(() => goToSlide(currentSlide + 1), 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initFilters();
    initHeroInteractivity();
    renderDesigns(galleryIncrement, 'all');
    injectFeaturedCreative();

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => renderDesigns(galleryIncrement, 'current'));
    }
    
    // Hidden internal Tool for updating Array Data
    initHiddenAdminUI();
});

function initHiddenAdminUI() {
    let keyBuffer = '';
    const secretCode = 'galleryadmin';

    document.addEventListener('keydown', (e) => {
        keyBuffer += e.key.toLowerCase();
        if (keyBuffer.length > secretCode.length) {
            keyBuffer = keyBuffer.slice(1);
        }
        if (keyBuffer === secretCode) {
            openAdminPanel();
            keyBuffer = '';
        }
    });
}

function openAdminPanel() {
    let panel = document.getElementById('admin-panel');
    if (!panel) {
        panel = document.createElement('div');
        panel.id = 'admin-panel';
        panel.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:99999;color:white;padding:2rem;overflow-y:auto;font-family:monospace;';
        
        panel.innerHTML = `
            <div class="max-w-4xl mx-auto bg-gray-900 p-8 rounded-2xl relative shadow-2xl border border-gray-700">
                <button id="close-admin" style="position:absolute;top:1rem;right:1rem;background:none;border:none;color:white;font-size:2rem;cursor:pointer;">&times;</button>
                <h2 class="text-2xl font-bold mb-4 text-primary">Hidden Gallery Admin Panel</h2>
                <p class="mb-6 text-gray-400">Because there is no database, use this tool to easily generate your new Code for <span class="bg-black px-2 py-1 rounded text-green-400">c:\\Users\\Ba3eh\\Documents\\MyWebsite\\portfolio\\js\\creative-designs.js</span></p>
                
                <div class="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <label class="block text-xs uppercase text-gray-500 mb-1">Title</label>
                        <input id="new-item-title" class="w-full bg-black border border-gray-700 p-3 rounded text-white" placeholder="e.g. New Event Poster">
                    </div>
                    <div>
                        <label class="block text-xs uppercase text-gray-500 mb-1">Category</label>
                        <select id="new-item-cat" class="w-full bg-black border border-gray-700 p-3 rounded text-white">
                            <option value="Poster">Poster</option>
                            <option value="Flyer">Flyer</option>
                            <option value="Branding">Branding</option>
                            <option value="Menu">Menu</option>
                            <option value="Web Design">Web Design</option>
                        </select>
                    </div>
                    <div class="col-span-2">
                        <label class="block text-xs uppercase text-gray-500 mb-1">Image Filename (Assuming you put it in assets/creative-designs/)</label>
                        <div class="flex">
                            <span class="bg-gray-800 border border-gray-700 border-r-0 p-3 rounded-l text-gray-400">assets/creative-designs/</span>
                            <input id="new-item-file" class="flex-1 bg-black border border-gray-700 p-3 rounded-r text-white" placeholder="e.g. event-poster.jpg">
                        </div>
                    </div>
                    <div class="col-span-2">
                        <label class="block text-xs uppercase text-gray-500 mb-1">Story / Subtext</label>
                        <textarea id="new-item-story" class="w-full bg-black border border-gray-700 p-3 rounded text-white" rows="2" placeholder="Briefly describe the design concept..."></textarea>
                    </div>
                </div>
                
                <button id="generate-code" class="btn-primary px-6 py-3 rounded font-bold w-full mb-8">Generate Code</button>

                <label class="block text-xs uppercase text-gray-500 mb-1">Copy & Paste This Output Replacing Your Existing Array in 'creative-designs.js'</label>
                <textarea id="admin-output" class="w-full h-64 bg-black border border-gray-700 rounded p-4 text-green-400 font-mono text-sm" readonly></textarea>
            </div>
        `;
        document.body.appendChild(panel);

        document.getElementById('close-admin').addEventListener('click', () => panel.style.display = 'none');
        document.getElementById('generate-code').addEventListener('click', () => {
            const title = document.getElementById('new-item-title').value;
            const category = document.getElementById('new-item-cat').value;
            const file = document.getElementById('new-item-file').value;
            const story = document.getElementById('new-item-story').value;

            if(!title || !file) {
                 alert("Title and filename are required");
                 return;
            }

            const newObj = {
                title: title,
                path: 'assets/creative-designs/' + file,
                category: category,
                story: story
            };

            const newArray = [newObj, ...creativeDesigns];
            document.getElementById('admin-output').value = `const creativeDesigns = [\n` + newArray.map(m => `    { title: "${m.title}", path: "${m.path}", category: "${m.category}", story: "${m.story.replace(/"/g, '\\"')}" }`).join(',\n') + `\n];`;
            
            // clear form
            document.getElementById('new-item-title').value = '';
            document.getElementById('new-item-file').value = '';
            document.getElementById('new-item-story').value = '';
        });
    } else {
        panel.style.display = 'block';
    }
}


