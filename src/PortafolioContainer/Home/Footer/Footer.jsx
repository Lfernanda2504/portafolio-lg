import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="svg-wave" style={{ height: '150px', overflow: 'hidden' }}><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                    style={{ height: '100%', width: '100%' }}>
                    <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style={{ stroke: 'none', fill: 'var(--white)' }}></path>
                </svg>
      </div>
    </div>
  )
}
