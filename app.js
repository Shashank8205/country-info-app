const API_BASE = 'https://restcountries.com/v3.1';

async function searchCountry() {
  const input = document.getElementById('search-input').value.trim();
  const result = document.getElementById('result');

  if (!input) {
    result.innerHTML = '<p class="error">⚠️ Please enter a country name!</p>';
    return;
  }

  result.innerHTML = '<p class="loading">🔍 Searching...</p>';

  try {
    const data = await fetchCountry(input);
    result.innerHTML = buildCard(data);
  } catch (err) {
    result.innerHTML = `<p class="error">❌ Country not found. Try again!</p>`;
  }
}

async function fetchCountry(name) {
  const res = await fetch(`${API_BASE}/name/${encodeURIComponent(name)}?fullText=false`);
  if (!res.ok) throw new Error('Not found');
  const data = await res.json();
  return data[0];
}

function buildCard(country) {
  const name       = country.name.common;
  const flag       = country.flags.png;
  const capital    = country.capital?.[0] || 'N/A';
  const population = country.population.toLocaleString();
  const region     = country.region;
  const subregion  = country.subregion || 'N/A';
  const currency   = getCurrency(country.currencies);
  const languages  = getLanguages(country.languages);
  const timezone   = country.timezones?.[0] || 'N/A';

  return `
    <div class="card">
      <img src="${flag}" alt="Flag of ${name}" />
      <div class="country-name">${name}</div>
      <div class="info-grid">
        <div class="info-item"><label>🏛 Capital</label><span>${capital}</span></div>
        <div class="info-item"><label>👥 Population</label><span>${population}</span></div>
        <div class="info-item"><label>🌍 Region</label><span>${region}</span></div>
        <div class="info-item"><label>📍 Subregion</label><span>${subregion}</span></div>
        <div class="info-item"><label>💰 Currency</label><span>${currency}</span></div>
        <div class="info-item"><label>🗣 Languages</label><span>${languages}</span></div>
        <div class="info-item"><label>🕐 Timezone</label><span>${timezone}</span></div>
      </div>
    </div>
  `;
}

function getCurrency(currencies) {
  if (!currencies) return 'N/A';
  return Object.values(currencies).map(c => `${c.name} (${c.symbol})`).join(', ');
}

function getLanguages(languages) {
  if (!languages) return 'N/A';
  return Object.values(languages).join(', ');
}

// Allow Enter key to search
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('search-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') searchCountry();
  });
});

// Export for testing
if (typeof module !== 'undefined') {
  module.exports = { getCurrency, getLanguages, buildCard };
}
