import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  //handler for searching cats
  const handleSearchChange=(e)=>{
    setSearchTerm(e.target.value);
  };

  //handler for filtering cats by breed
  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  //filter korar logic ekhane both by breed and by name
  const filteredCats = cats.filter(cat => 
    (selectedBreed === '' || cat.breed === selectedBreed) &&
    (searchTerm === '' || cat.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters"> {/* added search here */}
        <input 
          type="text" 
          placeholder="Search by name" 
          value={searchTerm} 
          onChange={handleSearchChange} 
          style={{ marginRight: '10px', padding: '5px',marginBottom:'10px' }}
        />
      {/*ekhane breed er dropdown added*/}
      <select value={selectedBreed} onChange={handleBreedChange} style={{ padding: '5px' }}>
        <option value="">All Breeds</option>
        <option value="Sphynx">Sphynx</option>
        <option value="Peterbald">Peterbald</option>
        <option value="Birman">Birman</option>
        <option value="Abyssinian">Abyssinian</option>
        <option value="Persian">Persian</option>
        <option value="Bengal">Bengal</option>
        <option value="Siamese">Siamese</option>
      </select>
      </div>



      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4" style={{ marginBottom: '20px' }}>
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover'}} />
              <div className="cat-info" >
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
