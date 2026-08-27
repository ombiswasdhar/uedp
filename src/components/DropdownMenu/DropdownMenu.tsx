import React, { useState } from 'react';
import './DropdownMenu.css';

export interface DropdownMenuProps {
  /** Figma Node ID: 65:1207 */
  testId?: string;
  selectMenuText?: string;
  items?: string[];
  onSelect?: (item: string) => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ 
  testId = 'dropdown-menu',
  selectMenuText = 'Most Recent',
  items = ['Item 01', 'Item 02', 'Item 03', 'Item 04', 'Item 05'],
  onSelect
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSelect = (item: string) => {
    if (onSelect) onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-menu-root" data-testid={testId}>
      {/* Trigger Button - Maps to Frame 1 */}
      <button 
        className="dropdown-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="dropdown-trigger-text">{selectMenuText}</span>
        <svg className="dropdown-chevron" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L6 5.5L11 1.5" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dropdown List - Maps to Group 1 / Variants */}
      {isOpen && (
        <div className="dropdown-list">
          {items.map((item, index) => (
            <div 
              key={item}
              className={`dropdown-item ${hoveredIndex === index ? 'hovered' : ''} ${index === 0 ? 'first-item' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleSelect(item)}
            >
              <span className="dropdown-item-text">{item}</span>
              {hoveredIndex === index && (
                <svg className="dropdown-item-icon" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M1 5.5L6 1.5L11 5.5" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
