// ========== BANNER CLOSE ==========
document.getElementById('closeBanner')?.addEventListener('click', function() {
    document.getElementById('topBanner').classList.add('hidden');
});

// ========== TYPING ANIMATION FOR SEARCH PLACEHOLDER ==========
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    const fullPlaceholder = 'Search for your trendy wears...';
    let index = 0;
    function typePlaceholder() {
        if (index < fullPlaceholder.length) {
            searchInput.placeholder += fullPlaceholder.charAt(index);
            index++;
            setTimeout(typePlaceholder, 100);
        }
    }
    window.addEventListener('load', typePlaceholder);
}

// ========== MOBILE MENU TOGGLE ==========
const menuIcon = document.getElementById('menuIcon');
const mobileNav = document.getElementById('mobileNav');
if (menuIcon && mobileNav) {
    menuIcon.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });
}

// ========== SMOOTH SCROLL FOR ANCHOR LINKS (only on same page) ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            if (mobileNav) mobileNav.classList.remove('active');
        }
    });
});

// ========== HERO SLIDER (only on pages with slider) ==========
const slider = document.getElementById('slider');
if (slider) {
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    function updateSlider() { slider.style.transform = `translateX(-${currentIndex * 100}%)`; }
    prevBtn.addEventListener('click', () => { currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; updateSlider(); });
    nextBtn.addEventListener('click', () => { currentIndex = (currentIndex + 1) % totalSlides; updateSlider(); });
    setInterval(() => { currentIndex = (currentIndex + 1) % totalSlides; updateSlider(); }, 5000);
}

// ========== PRODUCT DATA ==========
const products = [
    // MEN
    { name: 'Men Black Jacket', price: 89, image:'https://wrogn.com/cdn/shop/files/WVJK9901S.webp?v=1760318263&width=720', gender: 'men', color: 'black', size: 'L', category: 'formal', priceVal: 89 },
    { name: 'Men Blue Jeans', price: 59, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&auto=format', gender: 'men', color: 'blue', size: 'M', category: 'casual', priceVal: 59 },
    { name: 'Men Red T-Shirt', price: 29, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSY2Zw7rspntuC59OSD_YpR7I_L-0e3HIt9ONJei6Ct9K7juulSQbxqBHew1ynf-SPZttf293inzU5ctguiW0HXhSTVpP_L', gender: 'men', color: 'red', size: 'S', category: 'casual', priceVal: 29 },
    { name: 'Men White Shirt', price: 45, image: 'https://rukminim2.flixcart.com/image/1600/2140/xif0q/shirt/a/o/y/m-full-sleeve-cotton-shirts-for-men-solstice-original-imagw3ehfapsgr2b.jpeg?q=60', gender: 'men', color: 'white', size: 'L', category: 'formal', priceVal: 45 },
    { name: 'Men Green Hoodie', price: 69, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ_hv0LvEDxGN14ofkXD1fbGYMvd8dc5krQALkzQ341-Fa1WNHsYUxAggCM2Jm-jDZo_4xOJvV-O19aqv-rgUU6wXeunIkkFqIq0EG6zSqHNNzxG5JZJLnkIw', gender: 'men', color: 'green', size: 'XL', category: 'sports', priceVal: 69 },
    { name: 'Men Party Blazer', price: 129, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format', gender: 'men', color: 'black', size: 'M', category: 'party', priceVal: 129 },
    // WOMEN
    { name: 'Women Red Dress', price: 79, image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400&auto=format', gender: 'women', color: 'black', size: 'S', category: 'party', priceVal: 79 },
    { name: 'Women Blue Top', price: 39, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&auto=format', gender: 'women', color: 'blue', size: 'M', category: 'casual', priceVal: 39 },
    { name: 'Women Red Heels', price: 59, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&auto=format', gender: 'women', color: 'red', size: 'S', category: 'party', priceVal: 59 },
    { name: 'Women White Blouse', price: 49, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format', gender: 'women', color: 'white', size: 'L', category: 'formal', priceVal: 49 },
    { name: 'Women Pink Sweater', price: 55, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSYfjwzph_DI7_ssxr2zVRB8QksCVf4Y5EsWDtTPj8OSgytfniPBYFl9761n8ZWjToICM5BvbootB4h-9x3YKl7_XkiUQuNbVgkOIQHXLo', gender: 'women', color: 'pink', size: 'M', category: 'casual', priceVal: 55 },
    // KIDS
    { name: 'Kids Blue Shorts', price: 25, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&auto=format', gender: 'kids', color: 'blue', size: 'S', category: 'casual', priceVal: 25 },
    { name: 'Kids Red T-Shirt', price: 19, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format', gender: 'kids', color: 'red', size: 'XS', category: 'casual', priceVal: 19 },
    { name: 'Kids Yellow Dress', price: 35, image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400&auto=format', gender: 'kids', color: 'yellow', size: 'M', category: 'party', priceVal: 35 },
    { name: 'Kids Green Pants', price: 29, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSbKkYZsimacE70MpbIY5JF8A97m7tXgvQNayYWXkYNsIpe1-geAEkwwVjath8iJelKC5eFU9to-gR-Z3qPNfn8jgx9KZXqYTKRxmnbucOeeSOPrMj0CxOp', gender: 'kids', color: 'green', size: 'L', category: 'formal', priceVal: 29 },
    { name: 'Kids Black Shoes', price: 39, image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&auto=format', gender: 'kids', color: 'black', size: 'M', category: 'sports', priceVal: 39 },
];

// Helper to filter products based on selected checkboxes in a panel
function filterProducts(gender) {
    const panel = document.querySelector(`.filter-panel[data-gender="${gender}"]`);
    if (!panel) return products.filter(p => p.gender === gender);

    // Get selected colors
    const colors = Array.from(panel.querySelectorAll('.filter-color:checked')).map(cb => cb.value);
    // Get selected price ranges
    const priceRanges = Array.from(panel.querySelectorAll('.filter-price:checked')).map(cb => cb.value);
    // Get selected sizes
    const sizes = Array.from(panel.querySelectorAll('.filter-size:checked')).map(cb => cb.value);
    // Get selected categories
    const cats = Array.from(panel.querySelectorAll('.filter-cat:checked')).map(cb => cb.value);

    return products.filter(p => {
        if (p.gender !== gender) return false;
        // Color filter
        if (colors.length > 0 && !colors.includes(p.color)) return false;
        // Size filter
        if (sizes.length > 0 && !sizes.includes(p.size)) return false;
        // Category filter
        if (cats.length > 0 && !cats.includes(p.category)) return false;
        // Price filter
        if (priceRanges.length > 0) {
            let matchPrice = false;
            for (let range of priceRanges) {
                const [min, max] = range.split('-').map(Number);
                if (p.priceVal >= min && p.priceVal <= max) { matchPrice = true; break; }
            }
            if (!matchPrice) return false;
        }
        return true;
    });
}

// Render a product grid
function renderGrid(containerId, productList, sale = false) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    grid.innerHTML = '';
    productList.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                ${sale ? '<span class="product-badge">sale</span>' : ''}
                <img src="${p.image}" alt="${p.name}">
                <div class="product-info">
                    <h3 class="product-title">${p.name}</h3>
                    <p class="product-price">$${p.price}</p>
                </div>
            </div>
        `;
    });
}

// Initial render for homepage sections
function renderHomepage() {
    renderGrid('newArrivalsGrid', products.slice(0,6));
    
}

// Initial render for collections page
function renderCollectionsPage() {
    // Render all gender grids
    renderGrid('menGrid', products.filter(p => p.gender === 'men'));
    renderGrid('womenGrid', products.filter(p => p.gender === 'women'));
    renderGrid('kidsGrid', products.filter(p => p.gender === 'kids'));

    // Attach filter change listeners to each panel
    document.querySelectorAll('.filter-panel').forEach(panel => {
        const gender = panel.dataset.gender;
        panel.addEventListener('change', () => {
            const filtered = filterProducts(gender);
            renderGrid(`${gender}Grid`, filtered);
        });
    });
}

// Decide which page we're on and render accordingly
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('newArrivalsGrid')) {
        renderHomepage();
    }
    if (document.getElementById('menGrid') && document.getElementById('womenGrid') && document.getElementById('kidsGrid')) {
        renderCollectionsPage();
    }
});

// ========== NEWSLETTER FORM ==========
document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) alert(`Thank you for subscribing with: ${email}`);
    this.reset();
});

// ========== CONTACT FORM ==========
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    this.reset();
});