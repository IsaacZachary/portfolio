const creativeDesigns = [
    { title: "Berry Fibre Hotspot Landing", path: "assets/creative-designs/Berry Fibre Hotspot Landing.png", category: "Web Design", story: "A high-conversion landing page designed for a local ISP for seamless user onboarding." },
    { title: "Adventurer Day 2023", path: "assets/creative-designs/Adventurer Day 2023 Poster speaker Fidel lelei.jpg", category: "Poster", story: "Elevating event visibility through striking typography and layout." },
    { title: "Afrobeat Mix Vol 2", path: "assets/creative-designs/Afrobeat Mix Vol 2 Poster.JPG", category: "Poster", story: "Capturing the rhythm and energy of African music in a single frame." },
    { title: "Funeral Program Design", path: "assets/creative-designs/Benson ontweka Omari Funeral poster image.jpg", category: "Poster", story: "A dignified tribute celebrating a life well-lived through respectful design." },
    { title: "Chronixx Mixtape", path: "assets/creative-designs/Chronixx Mixtape djbazeh poster.jpg", category: "Mixtape Cover", story: "Visualizing the soul of reggae for a local artist's breakthrough release." },
    { title: "Class of 2023", path: "assets/creative-designs/Class of 2023.jpg", category: "Commemorative", story: "Freezing a moment in time for a generation of graduates." },
    { title: "Computer Packages Book Cover", path: "assets/creative-designs/Computer Packages Cover book.jpg", category: "Book Cover", story: "Simplifying complex tech education with an inviting, modern cover." },
    { title: "Garrison Development Day", path: "assets/creative-designs/Embakasi Garisson Development Day.JPG", category: "Event Branding", story: "Empowering community progress with clear, professional event branding and development initiatives." },
    { title: "Internet Packages Flyer", path: "assets/creative-designs/First Basics Internet Packages poster.JPG", category: "Flyer", story: "Connecting the community with vibrant, high-impact service brochures." },
    { title: "Global Youth Day", path: "assets/creative-designs/Global Youth Day Bababdogo Shadow mountain childrens home Poster.png", category: "Poster", story: "Rallying youth support for a local children's home through compassion." },
    { title: "Cyber Services Flyer", path: "assets/creative-designs/HI2 Cyber Services poster.jpg", category: "Poster", story: "Modernizing the identity of a local cyber hub for the digital age." },
    { title: "Customer Service Week", path: "assets/creative-designs/Happy Customer Service week first basics flyer.jpg", category: "Flyer", story: "Expressing gratitude and brand values during appreciation weeks." },
    { title: "Mazingira Day", path: "assets/creative-designs/Happy Mazingira day First basics poster.jpg", category: "Poster", story: "Promoting environmental consciousness through green, eco-centric design." },
    { title: "Photo Studio Branding", path: "assets/creative-designs/Hi2 Photo Studio poster.png", category: "Branding", story: "Framing the perfect shot with a professional studio identity." },
    { title: "Investment Services Banner", path: "assets/creative-designs/Humble Crib Investment Services Banner.jpg", category: "Banner", story: "Building trust and showcasing financial growth with clean aesthetics." },
    { title: "Tech Services Banner", path: "assets/creative-designs/JAK all time tech services banner.jpg", category: "Banner", story: "Broadcasting technical expertise for a growing repair ecosystem." },
    { title: "KW Kenya Awards UI", path: "assets/creative-designs/KW Kenya Awards UI page 1 hero.png", category: "UI Design", story: "Where design meets code—crafting the digital stage for national awards." },
    { title: "Birthday Celebration", path: "assets/creative-designs/Kamothos Birthday party cover.jpg", category: "Invite", story: "Adding personal warmth to digital invitations for milestone events." },
    { title: "PLP Coding Safari", path: "assets/creative-designs/PLP Vibe Coding AI Safari TUK Edition poster.jpg", category: "Poster", story: "Inspiring the next wave of engineers with a wild tech aesthetic." },
    { title: "TechCare Africa Poster", path: "assets/creative-designs/Presenting TechCare frica poster.jpg", category: "Poster", story: "Launching a support network that cares for Africa's digital heartbeat." },
    { title: "Flash Sale Poster", path: "assets/creative-designs/Quick Sale Poster.JPG", category: "Poster", story: "Driving urgent action with high-contrast, retail-focused messaging." },
    { title: "Jumia Agent Poster", path: "assets/creative-designs/Rajab Said Jumia Black Friday poster sales officer.jpg", category: "Flyer", story: "Empowering local agents with professional e-commerce marketing tools." },
    { title: "Cocktail Celebration", path: "assets/creative-designs/Red Cocktail Celebration Instagram Post.png", category: "Social Media", story: "Crafting digital buzz for hospitality and social gatherings." },
    { title: "Weekly Menu Design", path: "assets/creative-designs/SWAHILI BITES WEEKLY MENU poster.jpg", category: "Menu", story: "Making every bite look delicious through appetising layout design." },
    { title: "Sifa Internet Branding", path: "assets/creative-designs/Sifa Internet.JPG", category: "Branding", story: "Establishing a reliable ISP presence in a competitive local market." },
    { title: "Music Cover Design", path: "assets/creative-designs/Stuck on you cover.jpg", category: "Music Cover", story: "Translating emotional tracks into compelling digital artwork." },
    { title: "Beauty College Flyer", path: "assets/creative-designs/Tetra Beauty College Flyer.png", category: "Flyer", story: "Recruiting future stylists with a touch of elegance and professionalism." },
    { title: "Day Care Services", path: "assets/creative-designs/Tetra Day Care Poster.png", category: "Poster", story: "Communicating trust and safety for the community's youngest members." },
    { title: "Leadership Engagement", path: "assets/creative-designs/With PLP Principal.jpg", category: "Social", story: "Documenting and celebrating key milestones in educational leadership." },
    { title: "Women's Day Special", path: "assets/creative-designs/happy womens day humble crib poster.jpg", category: "Poster", story: "Celebrating empowerment and progress with vibrant floral aesthetics." },
    { title: "Huntsman Motors Poster", path: "assets/creative-designs/huntsmanmotors poster.jpg", category: "Branding", story: "Defining the visual identity for a leader in premium automotive care." }
];

let currentIndex = 0;
const galleryIncrement = 8;
const galleryGrid = document.getElementById('creative-designs-grid');
const loadMoreBtn = document.getElementById('load-more-designs');

// Simple Lightbox Modal
const createLightbox = () => {
    if (document.getElementById('lightbox-modal')) return document.getElementById('lightbox-modal');
    
    const modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.className = 'fixed inset-0 z-[100] hidden bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out';
    modal.innerHTML = `
        <div class="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
            <button class="absolute top-4 right-4 text-white text-4xl hover:text-primary transition-colors cursor-pointer">&times;</button>
            <img id="lightbox-img" src="" alt="" class="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300">
            <div id="lightbox-caption" class="mt-6 text-center">
                <h3 class="text-white font-headline text-2xl font-bold mb-2"></h3>
                <p class="text-gray-400 text-sm max-w-2xl mx-auto"></p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.tagName === 'BUTTON' || e.target.closest('button')) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    return modal;
};

const modal = createLightbox();

function openPreview(design) {
    const img = modal.querySelector('#lightbox-img');
    const title = modal.querySelector('#lightbox-caption h3');
    const desc = modal.querySelector('#lightbox-caption p');
    
    img.src = design.path;
    title.textContent = design.title;
    desc.textContent = design.story;
    
    modal.classList.remove('hidden');
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
            <div class="relative w-full aspect-square overflow-hidden rounded-[2.5rem] shadow-md transition-all duration-700 bg-black border border-border/10 hover:shadow-2xl hover:-translate-y-3">
                
                <!-- Blurred Surroundings (Frame) -->
                <div class="absolute inset-0 opacity-40 blur-xl scale-110">
                    <img src="${design.path}" alt="" class="w-full h-full object-cover">
                </div>

                <!-- Main Image - Contained to show everything -->
                <div class="relative w-full h-full flex items-center justify-center p-2">
                    <img src="${design.path}" alt="${design.title}" class="max-w-full max-h-full object-contain transition-transform duration-1000 group-hover:scale-105" loading="lazy">
                </div>
                
                <!-- High-Visibility Solid Overlay -->
                <div class="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 z-20">
                    <div class="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        <span class="inline-block px-4 py-1.5 bg-white text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">
                            ${design.category}
                        </span>
                        <h3 class="text-white font-headline text-2xl font-bold mb-3 leading-tight underline decoration-white/30 underline-offset-8">
                            ${design.title}
                        </h3>
                        <p class="text-white/90 text-sm leading-relaxed line-clamp-3 font-medium">
                            ${design.story}
                        </p>
                    </div>
                </div>

                <div class="absolute top-8 right-8 w-14 h-14 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100 shadow-2xl z-30">
                    <i class="fas fa-search-plus text-primary text-lg"></i>
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

    // Fixed 3 featured items as requested, with robust matching
    const featuredTitles = ["KW Kenya Awards UI", "Tetra Beauty College Flyer", "Photo Studio Branding"];
    const featured = creativeDesigns.filter(d => featuredTitles.some(t => d.title.toLowerCase().includes(t.toLowerCase())));

    featured.forEach(design => {
        const article = document.createElement('article');
        article.className = 'card-interactive group bg-surface border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl rounded-[2rem] overflow-hidden flex flex-col';
        article.dataset.category = 'creative';
        article.innerHTML = `
            <div class="aspect-video overflow-hidden bg-black relative cursor-pointer" onclick="window.location.href='creative-designs.html'">
                <div class="absolute inset-0 opacity-40 blur-lg scale-110">
                    <img src="${design.path}" alt="" class="w-full h-full object-cover">
                </div>
                <img src="${design.path}" alt="${design.title}" class="relative w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 p-4">
                <div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
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
                <div class="pt-6 mt-auto border-t border-border/50">
                    <a href="creative-designs.html" class="inline-flex items-center space-x-2 text-primary font-bold text-sm tracking-wide group/link">
                        <span>more</span>
                        <i class="fas fa-arrow-right text-[10px] group-hover/link:translate-x-1 transition-transform"></i>
                    </a>
                </div>
            </div>
        `;
        mainGrid.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initFilters();
    renderDesigns(galleryIncrement, 'all');
    injectFeaturedCreative();

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => renderDesigns(galleryIncrement, 'current'));
    }
});

