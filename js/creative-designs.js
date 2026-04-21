const creativeDesigns = [
    { title: "Berry Fibre Hotspot Landing", path: "assets/creative-designs/Berry Fibre Hotspot Landing.jpg", category: "Web Design", story: "A high-conversion landing page designed for a local ISP to simplify user onboarding." },
    { title: "Adventurer Day 2023", path: "assets/creative-designs/Adventurer Day 2023 Poster speaker Fidel lelei.jpg", category: "Poster", story: "Elevating event visibility through striking typography and layout." },
    { title: "Afrobeat Mix Vol 2", path: "assets/creative-designs/Afrobeat Mix Vol 2 Poster.JPG", category: "Poster", story: "Capturing the rhythm and energy of African music in a single frame." },
    { title: "Funeral Program Design", path: "assets/creative-designs/Benson ontweka Omari Funeral poster image.jpg", category: "Poster", story: "A dignified tribute celebrating a life well-lived through respectful design." },
    { title: "Chronixx Mixtape", path: "assets/creative-designs/Chronixx Mixtape djbazeh poster.jpg", category: "Mixtape Cover", story: "Visualizing the soul of reggae for a local artist's breakthrough release." },
    { title: "Class of 2023", path: "assets/creative-designs/Class of 2023.jpg", category: "Commemorative", story: "Freezing a moment in time for a generation of graduates." },
    { title: "Computer Packages Book Cover", path: "assets/creative-designs/Computer Packages Cover book.jpg", category: "Book Cover", story: "Simplifying complex tech education with an inviting, modern cover." },
    { title: "Development Day v2", path: "assets/creative-designs/Embakasi Garisson Development Day 2.JPG", category: "Event", story: "Empowering community progress with clear, professional event branding." },
    { title: "Embakasi Development Day", path: "assets/creative-designs/Embakasi Garisson Development Day.JPG", category: "Event", story: "Driving engagement for vital infrastructure and development initiatives." },
    { title: "Internet Packages Flyer", path: "assets/creative-designs/First Basics Internet Packages poster.JPG", category: "Flyer", story: "Connecting the community with vibrant, high-impact service brochures." },
    { title: "Global Youth Day", path: "assets/creative-designs/Global Youth Day Bababdogo Shadow mountain childrens home Poster.png", category: "Poster", story: "Rallying youth support for a local children's home through compassion." },
    { title: "Cyber Services Flyer", path: "assets/creative-designs/HI2 Cyber Services poster.jpg", category: "Poster", story: "Modernizing the identity of a local cyber hub for the digital age." },
    { title: "Customer Service Week", path: "assets/creative-designs/Happy Customer Service week first basics flyer.jpg", category: "Flyer", story: "Expressing gratitude and brand values during appreciation weeks." },
    { title: "Mazingira Day", path: "assets/creative-designs/Happy Mazingira day First basics poster.jpg", category: "Poster", story: "Promoting environmental consciousness through green, eco-centric design." },
    { title: "Photo Studio Branding", path: "assets/creative-designs/Hi2 Photo Studio poster.png", category: "Branding", story: "Framing the perfect shot with a professional studio identity." },
    { title: "Investment Services Banner", path: "assets/creative-designs/Humble Crib Investment Services Banner.jpg", category: "Banner", story: "Building trust and showcasing financial growth with clean aesthetics." },
    { title: "All Time Tech Logo", path: "assets/creative-designs/JAK All time tech logo.jpg", category: "Logo", story: "The foundation of a technical brand: minimal, strong, and scalable." },
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
    { title: "Huntsman Motors Poster", path: "assets/creative-designs/huntsmanmotors poster.jpg", category: "Branding", story: "Defining the visual identity for a leader in premium automotive care." },
    { title: "PLP Recognition", path: "assets/creative-designs/plp acception poster.jpg", category: "Poster", story: "A proud moment of technical achievement turned into visual art." }
];

let currentIndex = 0;
const galleryIncrement = 6;
const galleryGrid = document.getElementById('creative-designs-grid');
const loadMoreBtn = document.getElementById('load-more-designs');

function renderDesigns(limit) {
    if (!galleryGrid) return;

    const toRender = creativeDesigns.slice(currentIndex, currentIndex + limit);
    
    toRender.forEach(design => {
        const item = document.createElement('div');
        item.className = 'break-inside-avoid mb-6 group cursor-pointer animate-fade-in';
        item.innerHTML = `
            <div class="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 bg-surface border border-border/50">
                <img src="${design.path}" alt="${design.title}" class="w-full h-auto transition-transform duration-700 group-hover:scale-110" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span class="text-primary-400 text-[10px] font-bold uppercase tracking-widest mb-1">${design.category}</span>
                    <h3 class="text-white font-headline text-base font-semibold mb-1">${design.title}</h3>
                    <p class="text-gray-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">${design.story}</p>
                </div>
            </div>
        `;
        
        item.addEventListener('click', () => window.open(design.path, '_blank'));
        galleryGrid.appendChild(item);
    });

    currentIndex += toRender.length;
    
    if (currentIndex >= creativeDesigns.length && loadMoreBtn) {
        const btnText = loadMoreBtn.querySelector('span');
        if (btnText) btnText.textContent = "Gallery Complete";
        loadMoreBtn.classList.add('opacity-50', 'cursor-not-allowed');
        loadMoreBtn.disabled = true;
    }
}

function injectFeaturedCreative() {
    const mainGrid = document.querySelector('#projects-grid .grid');
    if (!mainGrid) return;

    // Pick 3 high-quality ones for the main grid
    const featured = [
        creativeDesigns[0],  // Berry Fibre Hotspot Landing
        creativeDesigns[20], // PLP Coding Safari
        creativeDesigns[32]  // Huntsman Motors
    ];

    featured.forEach(design => {
        const article = document.createElement('article');
        article.className = 'card-interactive group';
        article.dataset.category = 'creative';
        article.innerHTML = `
            <div class="aspect-video rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-primary-50 to-primary-100 border border-border/50">
                <img src="${design.path}" alt="${design.title}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
            </div>
            <div class="space-y-3">
                <div class="flex flex-wrap gap-2">
                    <span class="tech-badge">Creative</span>
                    <span class="tech-badge">${design.category}</span>
                </div>
                <h3 class="font-headline text-h3 font-semibold text-text-primary group-hover:text-primary transition-colors">
                    ${design.title}</h3>
                <p class="text-body-sm text-text-secondary leading-relaxed">
                    ${design.story}
                </p>
                <a href="#creative-gallery" class="text-primary hover:underline inline-flex items-center space-x-1 font-medium text-sm">
                    <span>View Showcase</span><i class="fas fa-arrow-right text-xs"></i>
                </a>
            </div>
        `;
        mainGrid.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial render for gallery (limited to 6)
    renderDesigns(galleryIncrement);
    
    // Inject into main grid
    injectFeaturedCreative();

    // Load more listener
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => renderDesigns(galleryIncrement));
    }
    
    // Ensure "Creative" filter works by triggering a re-check of cards
    if (typeof filterProjects === 'function') {
        filterProjects();
    }
});
