import { useState } from "react";

const pricingData = {
  women: [
    {
      cat: "Hair Services",
      items: [
        {
          name: "Haircut & Blowout",
          desc: "Wash, cut, and professional blowout",
          price: "$65",
        },
        {
          name: "Full Color",
          desc: "Single-process color application",
          price: "$95",
        },
        {
          name: "Highlights / Balayage",
          desc: "Hand-painted highlights",
          price: "$150",
        },
      ],
    },
  ],
  men: [
    {
      cat: "Grooming",
      items: [
        { name: "Classic Haircut", desc: "Wash, cut, and style", price: "$40" },
        {
          name: "Beard Trim & Shape",
          desc: "Professional grooming",
          price: "$25",
        },
        {
          name: "Hot Towel Shave",
          desc: "Traditional straight razor",
          price: "$35",
        },
      ],
    },
  ],
  treatments: [
    {
      cat: "Facials",
      items: [
        {
          name: "Signature Facial",
          desc: "60-minute customized facial",
          price: "$85",
        },
        {
          name: "Anti-Aging",
          desc: "Collagen-boosting therapy",
          price: "$120",
        },
      ],
    },
  ],
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("women");

  return (
    <section id="pricing" className="bg-[#0f172a] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-[#c9a84c]">
            Transparent Pricing
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight">
            Our Price List
          </h2>
          <div className="gold-line mx-auto mt-6"></div>
          <p className="mt-6 text-base leading-8 text-slate-300">
            Quality craftsmanship at fair prices.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {Object.keys(pricingData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer rounded-full border px-5 py-3 text-sm uppercase tracking-[0.35em] transition ${activeTab === tab ? "border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c]" : "border-white/10 text-slate-300 hover:border-white/20 hover:text-white"}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8">
          {pricingData[activeTab].map((category, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-lg font-semibold uppercase tracking-[0.35em] text-[#c9a84c]">
                {category.cat}
              </h3>
              <div className="mt-6 space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="space-y-2 rounded-3xl border border-white/10 bg-slate-950/70 p-5 transition hover:border-[#c9a84c] "
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-white">{item.name}</p>
                        <p className="mt-2 text-sm text-slate-300">
                          {item.desc}
                        </p>
                      </div>
                      <span className="text-lg font-semibold text-[#c9a84c]">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
