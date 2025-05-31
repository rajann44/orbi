"use client";

import { useState, useRef, useEffect } from 'react';

interface DropdownMenuItem {
  id: string;
  label: string;
  description: string;
  icon?: React.ReactNode;
}

interface DropdownMenuProps {
  items: DropdownMenuItem[];
  selectedItemId: string;
  onSelect: (itemId: string) => void;
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
}

export const DropdownMenu = ({
  items,
  selectedItemId,
  onSelect,
  isOpen,
  onClose,
  triggerRef,
}: DropdownMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  const triggerRect = triggerRef.current?.getBoundingClientRect();
  const menuStyle = {
    position: 'fixed' as const,
    top: triggerRect ? triggerRect.bottom + 8 : 0,
    left: triggerRect ? triggerRect.left : 0,
    zIndex: 1000,
  };

  return (
    <div
      ref={menuRef}
      style={menuStyle}
      className="
        bg-[#2A2A2A] rounded-[16px]
        shadow-[0_4px_12px_rgba(0,0,0,0.3)]
        min-w-[240px]
        py-2
        border border-[#3A3A3A]
      "
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            onSelect(item.id);
            onClose();
          }}
          className={`
            w-full px-4 py-2.5
            flex items-start gap-3
            text-left
            transition-colors duration-200
            hover:bg-[#3A3A3A]
            focus:outline-none focus:bg-[#3A3A3A]
            ${selectedItemId === item.id ? 'bg-[#3A3A3A]' : ''}
          `}
        >
          <div className="w-5 h-5 flex items-center justify-center">
            {selectedItemId === item.id && (
              <svg
                className="w-4 h-4 text-[#E0E0E0]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <div className="text-[#E0E0E0] text-sm font-medium">
              {item.label}
            </div>
            <div className="text-[#B0B0B0] text-xs mt-0.5">
              {item.description}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}; 