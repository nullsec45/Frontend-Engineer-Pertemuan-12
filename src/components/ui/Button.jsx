// Button.jsx
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  font-size: ${({ theme, size = 'md' }) => theme.button.sizes[size].fontSize};
  padding: ${({ theme, size = 'md' }) => theme.button.sizes[size].padding};
  
  background-color: ${({ theme, variant = 'primary' }) => {
    switch (variant) {
      case 'primary': return theme.colors.primary
      case 'secondary': return theme.colors.secondary
      default: return theme.colors.primary
    }
  }};
  
  color: ${({ theme }) => theme.colors.text};
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`

const Button = ({ 
  children, 
  size = 'md', 
  variant = 'primary',
  onClick, 
  disabled = false, 
  type = 'button',
  ...props 
}) => {
  return (
    <StyledButton 
      size={size}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button
