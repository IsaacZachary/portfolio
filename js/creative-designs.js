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
}function injectWideBanners() {
    const wideRow = document.getElementById('wide-banners-row');
    if (!wideRow) return;

    const wideTitles = ["Humble Crib Investment Services Banner", "Berry Fibre Hotspot Landing", "Class of 2023"];
    const wideDesigns = creativeDesigns.filter(d => wideTitles.includes(d.title));

    wideDesigns.forEach(design => {
        const item = document.createElement('div');
        item.className = 'group cursor-pointer animate-fade-in transition-all duration-700';
        item.innerHTML = `
            <div class="relative h-full flex flex-col bg-white rounded-[1.5rem] shadow-sm hover:shadow-xl border border-border/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div class="aspect-video w-full overflow-hidden bg-black relative">
                    <div class="absolute inset-0 opacity-30 blur-lg scale-110">
                        <img src="${design.path}" alt="" class="w-full h-full object-cover">
                    </div>
                    <img src="${design.path}" alt="${design.title}" class="relative w-full h-full object-contain p-4 transition-transform duration-1000 group-hover:scale-105">
                </div>
                <div class="p-8 flex flex-col flex-grow space-y-3">
                    <span class="text-primary text-[10px] font-bold uppercase tracking-widest block">${design.category}</span>
                    <h3 class="text-text-primary font-headline text-xl font-bold group-hover:text-primary transition-colors">${design.title}</h3>
                    <p class="text-text-secondary text-xs line-clamp-2">${design.story}</p>
                    <div class="pt-4 mt-auto border-t border-border/10">
                        <span class="inline-flex items-center text-primary font-bold text-sm group/link">
                            <span>more</span>
                            <i class="fas fa-arrow-right text-[10px] ml-2 group-hover/link:translate-x-1 transition-transform"></i>
                        </span>
                    </div>
                </div>
            </div>
        `;
        item.addEventListener('click', () => openPreview(design));
        wideRow.appendChild(item);
    });
}

function renderDesigns(limit, filter = 'all') {
    if (!galleryGrid) return;

    if (filter !== 'current') {
        galleryGrid.innerHTML = '';
        currentIndex = 0;
    }

    const wideTitles = ["Humble Crib Investment Services Banner", "Berry Fibre Hotspot Landing", "Class of 2023"];
    const currentFilter = filter === 'current' ? (document.querySelector('#creative-filters .filter-btn.active')?.dataset.filter || 'all') : filter;
    
    // Exclude wide ones from general grid
    const filtered = currentFilter === 'all' 
        ? creativeDesigns.filter(d => !wideTitles.includes(d.title))
        : creativeDesigns.filter(d => d.category.includes(currentFilter) || d.title.includes(currentFilter));

    const toRender = filtered.slice(currentIndex, currentIndex + limit);
    
    toRender.forEach(design => {
        const item = document.createElement('div');
        item.className = 'creative-card group cursor-pointer animate-fade-in opacity-0 translate-y-8 h-full';
        item.innerHTML = `
            <div class="relative h-full flex flex-col bg-white rounded-[1.5rem] shadow-sm hover:shadow-xl border border-border/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <!-- Image Container - Changed to Rectangular 4:3 -->
                <div class="aspect-[4/3] w-full overflow-hidden bg-black relative">
                    <div class="absolute inset-0 opacity-30 blur-lg scale-110">
                        <img src="${design.path}" alt="" class="w-full h-full object-cover">
                    </div>
                    <img src="${design.path}" alt="${design.title}" class="relative w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110" loading="lazy">
                </div>

                <!-- Card Content -->
                <div class="p-8 flex flex-col flex-grow space-y-4">
                    <div>
                        <span class="inline-block px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest rounded-md mb-3 border border-primary/10">
                            ${design.category}
                        </span>
                        <h3 class="font-headline text-2xl font-bold text-text-primary group-hover:text-primary transition-colors leading-tight">
                            ${design.title}
                        </h3>
                    </div>
                    
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

    const featuredTitles = ["KW Kenya Awards UI", "Beauty College Flyer", "Photo Studio Branding"];
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

document.addEventListener('DOMContentLoaded', () => {
    initFilters();
    injectWideBanners();
    renderDesigns(galleryIncrement, 'all');
    injectFeaturedCreative();

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => renderDesigns(galleryIncrement, 'current'));
    }
});


