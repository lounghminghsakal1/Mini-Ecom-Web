"use client";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null; // nothing rendered when closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose} // close when clicking outside box
      />

      {/* Modal content */}
      <div className="relative z-10 w-11/12 max-w-sm rounded-2xl bg-white p-6 shadow-lg">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between gap-4">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          <button
            onClick={onClose}
            className="rounded-full px-2 text-xl leading-none hover:bg-gray-100"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div>{children}</div>
      </div>
    </div>
  );
}
