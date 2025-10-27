let allProperties = [];

fetch('../assets/properties_egypt.json')
  .then(res => res.json())
  .then(data => {
    allProperties = data;
    populateFilters(data);
    renderProperties(data);
  });


// Map of amenity → Font Awesome icon
const amenityIcons = {
  "Wi-Fi": "fa-wifi",
  "Laundry": "fa-shirt",
  "Kitchen": "fa-utensils",
  "Private Bathroom": "fa-bath",
  "Balcony": "fa-building",
  "AC": "fa-snowflake",
  "Security": "fa-shield-halved",
  "Study Desk": "fa-chair",
  "Shared Kitchen": "fa-utensils",
  "Smart TV": "fa-tv"
};

// Populate dropdown options dynamically
function populateFilters(data) {
  const types = [...new Set(data.map(p => p.type))];
  const typeSelect = document.getElementById('filter-type');

  types.forEach(t => {
    const option = document.createElement('option');
    option.value = t;
    option.textContent = t;
    typeSelect.appendChild(option);
  });
}

// Core rendering function
function renderProperties(properties) {
  const container = document.getElementById('properties-container');
  container.innerHTML = '';

  if (properties.length === 0) {
    container.innerHTML = `<p class="text-center text-gray-textDark text-xl">No properties found.</p>`;
    return;
  }

  properties.forEach((p, index) => {
    const card = document.createElement('div');
    card.className = `
    bg-white rounded-2xl shadow-md overflow-hidden w-64 hover:shadow-xl hover:shadow-mint/60 transition cursor-pointer featured-card 
    transition-all duration-500 opacity-0 translate-y-5
    `;

    // Animate in sequence for a smoother effect
    setTimeout(() => {
      card.classList.remove('opacity-0', 'translate-y-5');
      card.classList.add('opacity-100', 'translate-y-0');
    }, index * 100);

     // Amenities section with icons
    const amenitiesHTML = p.amenities
      .map(a => {
        const icon = amenityIcons[a] || "fa-circle-question";
        return `
          <span title="${a}" class="flex items-center justify-start gap-[2px] transition-all duration-200 overflow-hidden hover:overflow-visible text-sm">
            <i class="fa-solid ${icon} text-textDark/60"></i>
            <span class="text-xs text-textDark/60 truncate">${a}</span>
          </span>`;
      })
      .join('');

    card.innerHTML = `
      <div class="relative">
        <img src="${p.image}" alt="${p.title}" class="w-full h-40 object-cover rounded-t-2xl">
        <div class="absolute top-2 left-2 bg-mint/30 backdrop-blur-md text-textDark text-sm font-semibold px-3 py-1 rounded-lg">
          ${p.type}
        </div>
        <div class="absolute top-2 right-2 bg-cream opacity-80 hover:opacity-100 transition rounded-lg size-7 flex items-center justify-center">
          <i class="fa-regular fa-heart text-mint cursor-pointer"></i>
        </div>
      </div>
      <div class="p-4 flex flex-col justify-between h-[180px]">
      <h3 class="font-semibold text-sm mb-1">${p.title}</h3>
      <div class="flex flex-col mt-auto">
      <p class="text-gray-500 text-sm flex items-center gap-1">
      <i class="fa-solid fa-location-dot text-mint-800"></i>
      ${p.location}
      </p>
      <div class="flex justify-between items-center mt-3">
      <span class="text-[#E44D26] font-semibold">EGP ${p.price.toLocaleString()} <span class="text-gray-500 text-sm">/mo</span></span>
      <span class="flex items-center gap-1 text-sm text-gray-600">
      <i class="fa-solid fa-star text-yellow-400"></i> ${p.rating}
      </span>
      </div>
      <div class="flex items-center gap-2 mt-3 text-sm">${amenitiesHTML}</div>
      </div>
      </div> 
    `;
    container.appendChild(card);
  });
  attachCardListeners();
}
function attachCardListeners() {
  // Toggle favorite heart
  document.querySelectorAll('.fa-heart').forEach((icon, index) => {
    if (index === 0) return;
    icon.addEventListener('click', e => {
      e.stopPropagation(); // prevent click triggering the card link
      icon.classList.toggle('fa-solid');
      icon.classList.toggle('fa-regular');
    });
  });

  // Redirect on card click
  document.querySelectorAll('.featured-card').forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = '../pages/details.html';
    });
  });
}


// Filter + live updates
const filters = ['filter-location', 'filter-type', 'filter-min-price', 'filter-max-price'];
filters.forEach(id => {
  document.getElementById(id).addEventListener('input', filterAndRender);
});

function filterAndRender() {
  const locationInput = document.getElementById('filter-location').value.toLowerCase();
  const type = document.getElementById('filter-type').value;
  const minPrice = parseInt(document.getElementById('filter-min-price').value) || 0;
  const maxPrice = parseInt(document.getElementById('filter-max-price').value) || Infinity;

  const filtered = allProperties.filter(p => {
    return (
      (locationInput === '' || p.location.toLowerCase().includes(locationInput)) &&
      (type === '' || p.type === type) &&
      p.price >= minPrice &&
      p.price <= maxPrice
    );
  });

  renderProperties(filtered);
}
