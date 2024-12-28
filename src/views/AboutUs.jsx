
const teamMembers = [
  { name: 'Alice', role: 'Founder', image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg', age: 30 },
  { name: 'Bob', role: 'Co-Founder', image: 'https://www.animeexplained.com/wp-content/uploads/2023/06/nanami-jjk-1536x864.jpg', age: 32 },
  { name: 'Charlie', role: 'Volunteer Coordinator', image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*ax6zaHxB7V-VpF7u.jpeg', age: 28 },
];

export default function AboutUs() {
  return (
    <section className="mt-4" style={{ textAlign: 'left' }}>
      <h2>About Us</h2>
      <p>Welcome to Purrfect Adoption, where we connect loving families with their perfect feline companions.</p>

      <div className="about-section" style={{ marginBottom: '20px' }}>
        <h3>Our Mission</h3>
        <p>Our mission is to provide a safe and loving environment for cats in need and to help them find their forever homes.</p>
      </div>

      <div className="about-section" style={{ marginBottom: '20px' }}>
        <h3>Our History</h3>
        <p>Since our founding, we have rescued and rehomed over 1,000 cats. We are dedicated to making a difference in the lives of cats and the families who adopt them.</p>
      </div>

      <div className="about-section" style={{ marginBottom: '20px' }}>
        <h3>Our Team</h3>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4">
              <div className="card">
                <img src={member.image} alt={member.name} className="card-img-top" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">Role: {member.role}</p>
                  <p className="card-text">Age: {member.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}