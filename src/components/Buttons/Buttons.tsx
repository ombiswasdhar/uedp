import React from 'react';
import './Buttons.css';

export type ButtonType = 'Fill' | 'Outline' | 'Ghost';

export interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma Node ID: 51:584 */
  testId?: string;
  variant?: ButtonType;
  /** Force a state for Storybook preview */
  forceState?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
}

export const Buttons: React.FC<ButtonsProps> = ({ 
  testId = 'button',
  variant = 'Fill',
  forceState,
  children,
  className = '',
  disabled,
  ...props 
}) => {
  // Determine if it's disabled either by HTML prop or Storybook forceState
  const isDisabled = disabled || forceState === 'disabled';

  return (
    <button 
      className={`buttons-root variant-${variant.toLowerCase()} ${forceState ? `force-${forceState}` : ''} ${className}`}
      data-testid={testId}
      disabled={isDisabled}
      {...props}
    >
      {children || 'Button'}
    </button>
  );
};
