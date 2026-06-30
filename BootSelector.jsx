import React, { useState } from 'react';
import './BootSelector.css';

const BootSelector = () => {
  const [selections, setSelections] = useState({
    style: 'casual',
    skin: 'leather',
    brand: 'timberland',
    priceMin: 50,
    priceMax: 300
  });

  const bootStyles = [
    { id: 'work', label: 'Work Boot', description: 'Heavy-duty industrial' },
    { id: 'hiking', label: 'Hiking Boot', description: 'Outdoor trail' },
    { id: 'casual', label: 'Casual Boot', description: 'Everyday wear' },
    { id: 'dress', label: 'Dress Boot', description: 'Formal occasions' },
    { id: 'fancy', label: 'Fancy Boot', description: 'Premium dress' }
  ];

  const skinTypes = [
    { id: 'leather', label: 'Leather', icon: '🟤' },
    { id: 'suede', label: 'Suede', icon: '🌫️' },
    { id: 'nubuck', label: 'Nubuck', icon: '✨' },
    { id: 'synthetic', label: 'Synthetic', icon: '🔷' },
    { id: 'canvas', label: 'Canvas', icon: '⬜' }
  ];

  const brands = [
    'Timberland',
    'Doc Martens',
    'Red Wing',
    'Clarks',
    'Merrell',
    'Salomon',
    'The North Face',
    'Sorel',
    'Danner',
    'La Sportiva'
  ];

  const handleStyleChange = (style) => {
    setSelections({ ...selections, style });
  };

  const handleSkinChange = (skin) => {
    setSelections({ ...selections, skin });
  };

  const handleBrandChange = (e) => {
    setSelections({ ...selections, brand: e.target.value.toLowerCase() });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setSelections({
      ...selections,
      [name]: parseInt(value)
    });
  };

  const getStyleSpectrum = () => {
    const styleIndex = bootStyles.findIndex(s => s.id === selections.style);
    return ((styleIndex / (bootStyles.length - 1)) * 100) || 0;
  };

  return (
    <div className="boot-selector-container">
      <header className="boot-selector-header">
        <h1>🥾 Boot Selector Widget</h1>
        <p>Find your perfect boot</p>
      </header>

      <div className="selector-grid">
        {/* Boot Style Section */}
        <section className="selector-section">
          <h2>Boot Style</h2>
          <div className="style-spectrum">
            <div className="spectrum-bar">
              <div className="spectrum-fill" style={{ width: `${getStyleSpectrum()}%` }}></div>
            </div>
            <span className="spectrum-label work">👷 Work</span>
            <span className="spectrum-label fancy">💎 Fancy</span>
          </div>
          <div className="style-options">
            {bootStyles.map(style => (
              <button
                key={style.id}
                className={`style-button ${selections.style === style.id ? 'active' : ''}`}
                onClick={() => handleStyleChange(style.id)}
              >
                <div className="style-name">{style.label}</div>
                <div className="style-description">{style.description}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Boot Skin Type Section */}
        <section className="selector-section">
          <h2>Boot Skin Type</h2>
          <div className="skin-options">
            {skinTypes.map(skin => (
              <button
                key={skin.id}
                className={`skin-button ${selections.skin === skin.id ? 'active' : ''}`}
                onClick={() => handleSkinChange(skin.id)}
              >
                <span className="skin-icon">{skin.icon}</span>
                <span className="skin-label">{skin.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Brand Section */}
        <section className="selector-section">
          <h2>Brand</h2>
          <select
            value={selections.brand.charAt(0).toUpperCase() + selections.brand.slice(1)}
            onChange={handleBrandChange}
            className="brand-select"
          >
            {brands.map(brand => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </section>

        {/* Price Point Section */}
        <section className="selector-section">
          <h2>Price Point</h2>
          <div className="price-range">
            <div className="price-inputs">
              <div className="price-input-group">
                <label>Min: ${selections.priceMin}</label>
                <input
                  type="range"
                  name="priceMin"
                  min="0"
                  max="500"
                  step="10"
                  value={selections.priceMin}
                  onChange={handlePriceChange}
                  className="range-input"
                />
              </div>
              <div className="price-input-group">
                <label>Max: ${selections.priceMax}</label>
                <input
                  type="range"
                  name="priceMax"
                  min="0"
                  max="500"
                  step="10"
                  value={selections.priceMax}
                  onChange={handlePriceChange}
                  className="range-input"
                />
              </div>
            </div>
            <div className="price-display">
              <span className="price-range-text">${selections.priceMin} - ${selections.priceMax}</span>
            </div>
          </div>
        </section>
      </div>

      {/* Summary Section */}
      <section className="summary-section">
        <h3>Your Selection</h3>
        <div className="summary-items">
          <div className="summary-item">
            <span className="summary-label">Style:</span>
            <span className="summary-value">{bootStyles.find(s => s.id === selections.style)?.label}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Material:</span>
            <span className="summary-value">{skinTypes.find(s => s.id === selections.skin)?.label}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Brand:</span>
            <span className="summary-value">{selections.brand.charAt(0).toUpperCase() + selections.brand.slice(1)}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Price Range:</span>
            <span className="summary-value">${selections.priceMin} - ${selections.priceMax}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BootSelector;
