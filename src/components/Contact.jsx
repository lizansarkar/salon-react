import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = true;
    if (!formData.lastName.trim()) newErrors.lastName = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = true;
    if (!formData.service) newErrors.service = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950/5 p-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-[#c9a84c]">
              Get In Touch
            </span>
            <h3 className="mt-6 text-4xl font-semibold text-slate-950">
              Visit Us or Book an Appointment
            </h3>
            <div className="gold-line mt-6"></div>
            <p className="mt-6 text-base leading-8 text-slate-600">
              We'd love to welcome you. Book your appointment online today.
            </p>

            <div className="mt-10 space-y-6">
              <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-slate-950/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#c9a84c]/10 text-[#c9a84c]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 stroke-current"
                      fill="none"
                      strokeWidth="1.5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-950">Location</h4>
                    <p className="text-sm text-slate-600">
                      42 Luxe Avenue, New York, NY 10018
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#c9a84c]/10 text-[#c9a84c]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 stroke-current"
                      fill="none"
                      strokeWidth="1.5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-950">Phone</h4>
                    <p className="text-sm text-slate-600">+1 (212) 555-0198</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950/5 p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-3xl font-semibold text-slate-950">
                    Book an Appointment
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Fill out the form below.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-950">
                      First Name *
                    </span>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`mt-2 w-full rounded-3xl border px-4 py-3 text-sm outline-none transition ${errors.firstName ? "border-rose-500" : "border-slate-200 focus:border-[#c9a84c]"}`}
                    />
                    {errors.firstName && (
                      <span className="mt-2 block text-sm text-rose-500">
                        Required
                      </span>
                    )}
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-950">
                      Last Name *
                    </span>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`mt-2 w-full rounded-3xl border px-4 py-3 text-sm outline-none transition ${errors.lastName ? "border-rose-500" : "border-slate-200 focus:border-[#c9a84c]"}`}
                    />
                    {errors.lastName && (
                      <span className="mt-2 block text-sm text-rose-500">
                        Required
                      </span>
                    )}
                  </label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-950">
                      Email *
                    </span>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-2 w-full rounded-3xl border px-4 py-3 text-sm outline-none transition ${errors.email ? "border-rose-500" : "border-slate-200 focus:border-[#c9a84c]"}`}
                    />
                    {errors.email && (
                      <span className="mt-2 block text-sm text-rose-500">
                        Valid email required
                      </span>
                    )}
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-950">
                      Phone
                    </span>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-3xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#c9a84c]"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-950">
                    Service *
                  </span>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`mt-2 w-full rounded-3xl border px-4 py-3 text-sm outline-none transition ${errors.service ? "border-rose-500" : "border-slate-200 focus:border-[#c9a84c]"}`}
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Haircut</option>
                    <option value="coloring">Coloring</option>
                    <option value="beard">Beard Grooming</option>
                  </select>
                  {errors.service && (
                    <span className="mt-2 block text-sm text-rose-500">
                      Please select
                    </span>
                  )}
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-950">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 h-32 w-full rounded-[1.75rem] border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#c9a84c]"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#c9a84c] px-6 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-950 transition hover:bg-[#d4b96a]"
                >
                  Request Appointment
                </button>
              </form>
            ) : (
              <div className="rounded-[2rem] border border-[#c9a84c]/15 bg-[#f7fee7]/70 p-10 text-center">
                <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#c9a84c]/20 text-[#c9a84c]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-7 w-7"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-slate-950">
                  Thank You!
                </h4>
                <p className="mt-3 text-base text-slate-600">
                  Your appointment request has been submitted.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
