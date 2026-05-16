import { useState } from 'react'

const data = {
  women: [
    { cat: "Hair Services", items: [
      { name: "Haircut & Blowout", desc: "Wash, cut, and professional blowout", price: "$65" },
      { name: "Full Color", desc: "Single-process color application", price: "$95" },
      { name: "Highlights / Balayage", desc: "Hand-painted highlights", price: "$150" },
    ]},
  ],
  men: [
    { cat: "Grooming", items: [
      { name: "Classic Haircut", desc: "Wash, cut, and style", price: "$40" },
      { name: "Beard Trim & Shape", desc: "Professional grooming", price: "$25" },
      { name: "Hot Towel Shave", desc: "Traditional straight razor", price: "$35" },
    ]},
  ],
  treatments: [
    { cat: "Facials", items: [
      { name: "Signature Facial", desc: "60-minute customized facial", price: "$85" },
      { name: "Anti-Aging", desc: "Collagen-boosting therapy", price: "$120" },
    ]},
  ]
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('women')

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <span className="section-label">Transparent Pricing</span>
          <h2 className="section-title">Our Price List</h2>
          <div className="gold-line center"></div>
          <p className="section-subtitle">Quality craftsmanship at fair prices.</p>
        </div>
        
        <div className="pricing-tabs">
          {Object.keys(data).map(tab => (
            <button key={tab} className={`pricing-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="pricing-table">
          {data[activeTab].map((cat, i) => (
            <div className="pricing-category" key={i}>
              <h3 className="pricing-category-title">{cat.cat}</h3>
              {cat.items.map((item, idx) => (
                <div className="pricing-row" key={idx}>
                  <div className="pricing-service">{item.name}<span>{item.desc}</span></div>
                  <div className="pricing-dots"></div>
                  <div className="pricing-price">{item.price}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}