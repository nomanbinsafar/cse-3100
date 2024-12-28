import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="text-center mt-4">
      <h2>Contact Us</h2>
      <p>We would love to hear from you!</p>

      <div className="contact-details" style={{ marginBottom: '20px' }}>
        <p>Email: purrfect@gmail.com</p>
        <p>Contact Number: +1234567890</p>
      </div>
      
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            style={{ padding: '10px', width: '100%' }}
            required
          />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            style={{ padding: '10px', width: '100%' }}
            required
          />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            style={{ padding: '10px', width: '100%', height: '150px' }}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ padding: '10px 20px' }}>
          Submit
        </button>
      </form>
    </section>
  );
}