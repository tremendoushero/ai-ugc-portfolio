import React from 'react';
import './Toast.css';

export default function Toast({ message, visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="toast-notification" role="status" aria-live="polite">
      <div className="toast-content">
        <span className="toast-icon">✓</span>
        <span className="toast-message">{message}</span>
      </div>
      <button onClick={onClose} className="toast-close" aria-label="Dismiss notification">
        ✕
      </button>
    </div>
  );
}
