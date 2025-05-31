import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  variant?: 'default' | 'primary' | 'secondary';
}

export const IconButton = ({
  icon,
  label,
  variant = 'default',
  className = '',
  ...props
}: IconButtonProps) => {
  const baseStyles = 'p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#4A90E2]';
  
  const variantStyles = {
    default: 'hover:bg-[#2A2A2A]',
    primary: 'bg-[#2A2A2A] hover:bg-[#3A3A3A]',
    secondary: 'bg-transparent hover:bg-[#2A2A2A]',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
}; 