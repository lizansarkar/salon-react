import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: false })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = true
    if (!formData.lastName.trim()) newErrors.lastName = true
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true
    if (!formData.service) newErrors.service = true

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      setSubmitted(true)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-label">Get In Touch</span>
            <h3>Visit Us or Book an Appointment</h3>
            <div className="gold-line"></div>
            <p className="section-subtitle">We'd love to welcome you. Book your appointment online today.</p>
            
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                <div><h4>Location</h4><p>42 Luxe Avenue, New York, NY 10018</p></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                <div><h4>Phone</h4><p>+1 (212) 555-0198</p></div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h3>Book an Appointment</h3>
                <p>Fill out the form below.</p>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input name="firstName" className={errors.firstName ? 'error' : ''} value={formData.firstName} onChange={handleChange} />
                    {errors.firstName && <div className="form-error show">Required</div>}
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input name="lastName" className={errors.lastName ? 'error' : ''} value={formData.lastName} onChange={handleChange} />
                    {errors.lastName && <div className="form-error show">Required</div>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input name="email" className={errors.email ? 'error' : ''} value={formData.email} onChange={handleChange} />
                    {errors.email && <div className="form-error show">Valid email required</div>}
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Service *</label>
                  <select name="service" className={errors.service ? 'error' : ''} value={formData.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option value="haircut">Haircut</option>
                    <option value="coloring">Coloring</option>
                    <option value="beard">Beard Grooming</option>
                  </select>
                  {errors.service && <div className="form-error show">Please select</div>}
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <div className="form-submit"><button type="submit" className="btn btn-primary">Request Appointment</button></div>
              </form>
            ) : (
              <div className="form-success show">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <h4>Thank You!</h4>
                <p>Your appointment request has been submitted.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}