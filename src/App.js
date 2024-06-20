 
import './App.css';
import Tours from './components/tours';
import { useState } from 'react';
 

const App = () =>  {
  const data = [
    {
      id: 1,
      name: "Agra",
      info: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
      image: "https://images.pexels.com/photos/19149614/pexels-photo-19149614/free-photo-of-couple-sitting-at-taj-mahal.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "35,758",
    },
    {
      id: 2,
      name: "Jaipur",
      info: `Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the "Pink City" due to the color of many of its buildings. Jaipur is famous for its intricate textiles, colorful handicrafts, and delicious cuisine.`,
      image: "https://cdn.thecodehelp.in/Jaipur.jpeg",
      price: "82,560",
    },
    {
      id: 3,
      name: "Goa",
      info: " Goa is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.",
      image: "https://cdn.thecodehelp.in/Goa.jpeg",
      price: "29,695",
    },
    {
      id: 4,
      name: "Varanasi",
      info: "Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals.",
      image: "https://cdn.thecodehelp.in/Varanasi.jpeg",
      price: "31,095",
    },
    {
      id: 5,
      name: "Darjeeling",
      info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
      image: "https://cdn.thecodehelp.in/Darjeeling.jpeg",
      price: "78,595",
    },
    {
      id: 6,
      name: "Jaisalmer",
      info: "Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts.",
      image: "https://cdn.thecodehelp.in/Jaisalmer.jpeg",
      price: "68,595",
    },
    {
      id: 7,
      name: "Kochi",
      info: "Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich culinary tradition that blends Indian, Portuguese, and other influences.",
      image: "https://cdn.thecodehelp.in/Kochi.jpeg",
      price: "68,595",
    },
    {
      id: 8,
      name: "Andaman Nicobar",
      info:"The Andaman and Nicobar Islands, an Indian union territory nestled in the Bay of Bengal, epitomize paradise on Earth. Boasting a diverse array of attractions, from pristine beaches to lush rainforests and vibrant coral reefs, these islands are a haven for travelers seeking both relaxation and adventure.",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Andaman.jpg",
      price: "75,595",
    },
    {
      id: 9,
      name: "Vizag",
      info: "Visakhapatnam, affectionately known as Vizag, is a coastal gem nestled along the eastern shores of India. Renowned for its picturesque beaches, rich cultural heritage, and vibrant city life, Vizag beckons travelers with its charm and diversity.",
      image: "https://tripoventure.com/wp-content/uploads/2022/01/Untitled-design-47.png",
      price: "60,595",
    },
  ];

  let [tours,setTours] = useState(data);
  function removeTour(id){
    const newtours = tours.filter( (tour)=> tour.id !== id)
    setTours(newtours);
  }

  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button onClick={ () => setTours(data)}>Refresh</button>
      </div>
    )
  }
  return (
     <>
      <Tours tours={tours} removeTour={removeTour}/>
     </>
  );
}

export default App;
