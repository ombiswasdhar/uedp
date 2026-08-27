import React from 'react';
import './Nav.css';

export type NavItem = 'Shop' | 'Vehicles' | 'Taxis' | 'About' | 'search';

export interface NavProps {
  /** Figma Node ID: 17:1960 */
  testId?: string;
  activeItem?: NavItem;
  onItemClick?: (item: NavItem) => void;
}

export const Nav: React.FC<NavProps> = ({ 
  testId = 'nav-component',
  activeItem = 'Shop',
  onItemClick
}) => {
  const items: NavItem[] = ['Shop', 'Vehicles', 'Taxis', 'About'];

  return (
    <nav className="nav-root" data-testid={testId}>
      {/* Logo Placeholder (Maps to 'with_name 1') */}
      <div className="nav-logo">
        <span className="nav-logo-text">LOGO</span>
      </div>

      {/* Links Container */}
      <div className="nav-container">
        {/* Search Icon */}
        <button 
          className={`nav-search-btn ${activeItem === 'search' ? 'active' : ''}`}
          onClick={() => onItemClick?.('search')}
          aria-label="Search"
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>

        {/* Text Links */}
        {items.map((item) => (
          <button
            key={item}
            className={`nav-link ${activeItem === item ? 'active' : ''}`}
            onClick={() => onItemClick?.(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};
