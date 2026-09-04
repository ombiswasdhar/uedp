import React, { useState } from 'react';
import './Switch.css';

export interface SwitchProps {
  /**
   * Initial state of the switch. If provided, acts as uncontrolled component initial state.
   */
  defaultSelected?: boolean;
  /**
   * Controlled state of the switch.
   */
  selected?: boolean;
  /**
   * If true, the switch is disabled.
   */
  disabled?: boolean;
  /**
   * Callback fired when the state changes.
   */
  onChange?: (selected: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({
  defaultSelected = false,
  selected: controlledSelected,
  disabled = false,
  onChange,
}) => {
  const [internalSelected, setInternalSelected] = useState(defaultSelected);
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isControlled = controlledSelected !== undefined;
  const isSelected = isControlled ? controlledSelected : internalSelected;

  const handleClick = () => {
    if (disabled) return;
    const newState = !isSelected;
    if (!isControlled) {
      setInternalSelected(newState);
    }
    onChange?.(newState);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={`switch-container ${isSelected ? 'selected' : 'unselected'} ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => !disabled && setIsPressed(false)}
      onMouseLeave={() => {
        !disabled && setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onFocus={() => !disabled && setIsFocused(true)}
      onBlur={() => !disabled && setIsFocused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      role="switch"
      aria-checked={isSelected}
      aria-disabled={disabled}
    >
      <div className="switch-track">
        <div className={`switch-thumb-container ${isPressed ? 'pressed' : ''}`}>
          {/* State Layer (Ripple/Focus) */}
          <div className={`switch-state-layer ${isHovered ? 'hovered' : ''} ${isFocused ? 'focused' : ''} ${isPressed ? 'pressed' : ''}`} />
          {/* Thumb */}
          <div className="switch-thumb" />
        </div>
      </div>
    </div>
  );
};
