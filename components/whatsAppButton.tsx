"use client"
import { useState } from "react"

export default function WhatsAppButton() {
  const phone = "2714794174" // CHANGE TO REAL: 27 + number without 0, e.g., 27821234567
  const message = "Dumelang! I saw Tsundzukani ECD website - I want to enroll my child. Can you help? ⭐"

  return (
    <>
      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] hover:bg-[#20BA5A] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 animate-pulse"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M19.1 4.7C16.9 2.5 13.9 1.2 10.7 1.2 4.6 1.2.5 5.3.5 11.3c0 1.8.5 3.5 1.4 5L0 24l7.9-2.1c1.4.8 3 1.2 4.6 1.2 6.1 0 10.2-4.1 10.2-10.1 0-2.7-1.1-5.4-2.6-7.3zM10.7 21c-1.4 0-2.8-.4-4-1.1l-.3-.2-4.7 1.2 1.3-4.6-.2-.3c-.8-1.2-1.2-2.6-1.2-4 0-4.9 3.3-8.1 8.1-8.1 2.2 0 4.2.8 5.7 2.3 1.5 1.5 2.4 3.5 2.4 5.7 0 4.8-3.3 8.1-8.1 8.1zm6.9-6.1c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.5-.2-.7.2-.2.4-.8 1.2-1 1.4-.2.2-.4.3-.8.1-.4-.2-1.5-.6-2.9-1.8-1.1-1-1.8-2.2-2-2.5-.2-.4 0-.6.2-.8.2-.2.4-.3.5-.4.2-.1.2-.2.3-.4.1-.2 0-.4 0-.5 0-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3z"/>
        </svg>
      </a>

      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.7) }
          70% { box-shadow: 0 0 0 15px rgba(37,211,102,0) }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0) }
        }
       .animate-pulse { animation: pulse 2s infinite; }
      `}</style>
    </>
  )
}
