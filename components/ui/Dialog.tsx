import React from 'react'

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Dialog({ isOpen, onClose, children }: DialogProps) {
  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-lg max-w-full max-h-full overflow-auto">
        {children}
      </div>
    </div>
  )
}

