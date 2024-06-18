// import React, { useState } from 'react';
// import Searchbar from '../components/Searchbar';
// import '../styles/Newsfeed.css';
// import { Link } from 'react-router-dom'; // Import Link component

// const Newsfeed = () => {
//   const [cards] = useState([
//     {
//       car: 'Toyota KDH',
//       from: 'Jaffna',
//       to: 'Colombo',
//       route: ['Jaffna', 'Vavuniya', 'Colombo'], // Updated data structure to represent the route
//       timePeriod: '6 AM - 12 PM',
//       seats: 4,
//     },
//     {
//       car: 'Mercedes Benz',
//       from: 'Anuradhapura',
//       to: 'Kandy',
//       route: ['Anuradhapura', 'Kandy'],
//       timePeriod: '7 AM - 1 PM',
//       seats: 3,
//     },
//     {
//       car: 'Toyota Axio',
//       from: 'Jaffna',
//       to: 'galle',
//       route: ['jaffna', 'Colombo', 'galle'],
//       timePeriod: '8 AM - 2 PM',
//       seats: 5,
//     },
//     {
//       car: 'Toyota KDH',
//       from: 'Jaffna',
//       to: 'Colombo',
//       route: ['Jaffna', 'Vavuniya', 'Colombo'], // Updated data structure to represent the route
//       timePeriod: '6 AM - 12 PM',
//       seats: 4,
//     },
//     {
//       car: 'Mercedes Benz',
//       from: 'Anuradhapura',
//       to: 'Kandy',
//       route: ['Anuradhapura', 'Kandy'],
//       timePeriod: '7 AM - 1 PM',
//       seats: 3,
//     },
//     {
//       car: 'Toyota Axio',
//       from: 'Jaffna',
//       to: 'galle',
//       route: ['jaffna', 'Colombo', 'galle'],
//       timePeriod: '8 AM - 2 PM',
//       seats: 5,
//     },
//     {
//       car: 'Toyota Axio',
//       from: 'Jaffna',
//       to: 'galle',
//       route: ['jaffna', 'Colombo', 'galle'],
//       timePeriod: '8 AM - 2 PM',
//       seats: 5,
//     },
//     {
//       car: 'Toyota KDH',
//       from: 'Jaffna',
//       to: 'Colombo',
//       route: ['Jaffna', 'Vavuniya', 'Colombo'], // Updated data structure to represent the route
//       timePeriod: '6 AM - 12 PM',
//       seats: 4,
//     },
//     {
//       car: 'Mercedes Benz',
//       from: 'Anuradhapura',
//       to: 'Kandy',
//       route: ['Anuradhapura', 'Kandy'],
//       timePeriod: '7 AM - 1 PM',
//       seats: 3,
//     },
//     {
//       car: 'Toyota Axio',
//       from: 'Jaffna',
//       to: 'galle',
//       route: ['jaffna', 'Colombo', 'galle'],
//       timePeriod: '8 AM - 2 PM',
//       seats: 5,
//     },
//     {
//       car: 'Toyota Axio',
//       from: 'Jaffna',
//       to: 'galle',
//       route: ['jaffna', 'Colombo', 'galle'],
//       timePeriod: '8 AM - 2 PM',
//       seats: 5,
//     },
//     {
//       car: 'Toyota KDH',
//       from: 'Jaffna',
//       to: 'Colombo',
//       route: ['Jaffna', 'Vavuniya', 'Colombo'], // Updated data structure to represent the route
//       timePeriod: '6 AM - 12 PM',
//       seats: 4,
//     },
   
//     // Add more cards as needed
//   ]);

//   return (
//     <div>
//       <Searchbar /> {/* Include the Searchbar component */}
//       <section>
//         <div className="cards-container">
//           <div className="cards">
//             {cards.map((card, index) => (
//               <div key={index} className="card">
//                 <h3>{card.car}</h3>
//                 <p><strong>From:</strong> {card.from}</p>
//                 <p><strong>To:</strong> {card.to}</p>
//                 <p><strong>Route:</strong> {card.route.join(' ➜ ')}</p> {/* Display the route */}
//                 <p><strong>Time Period:</strong> <span className="time-period">{card.timePeriod}</span></p>
//                 <p><strong>Available Seats:</strong> <span className="seats">{card.seats}</span></p>
//                 <Link to={`/readmore/${index}`} className="read-more">Read More</Link> {/* Link to Readmore */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Newsfeed;

import React, { useState } from 'react';
import Searchbar from '../components/Searchbar';
import '../styles/Newsfeed.css';
import { Link } from 'react-router-dom'; // Import Link component

const Newsfeed = () => {
  const [cards] = useState([
    { 
      car: 'Toyota KDH',
      from: 'Kandy',
      to: 'Galle',
      route: ['Kandy', 'Matara', 'Galle'],
      timePeriod: '5 AM - 11 AM',
      seats: 2,
    },
    {
      car: 'Mercedes Benz',
      from: 'Colombo',
      to: 'Batticaloa',
      route: ['Colombo', 'Kurunegala', 'Batticaloa'],
      timePeriod: '9 AM - 3 PM',
      seats: 4,
    },
    {
      car: 'Toyota Axio',
      from: 'Matara',
      to: 'Kandy',
      route: ['Matara', 'Galle', 'Kandy'],
      timePeriod: '10 AM - 4 PM',
      seats: 3,
    },
    {
      car: 'Ford Transit',
      from: 'Galle',
      to: 'Colombo',
      route: ['Galle', 'Matara', 'Colombo'],
      timePeriod: '7 AM - 1 PM',
      seats: 6,
    },
    {
      car: 'Renault Trafic',
      from: 'Badulla',
      to: 'Nuwara Eliya',
      route: ['Badulla', 'Bandarawela', 'Nuwara Eliya'],
      timePeriod: '6 AM - 12 PM',
      seats: 4,
    },
    {
      car: 'Magic Wagon',
      from: 'Trincomalee',
      to: 'Anuradhapura',
      route: ['Trincomalee', 'Kantale', 'Anuradhapura'],
      timePeriod: '8 AM - 2 PM',
      seats: 5,
    },
    {
      car: 'Mercedes Vito',
      from: 'Batticaloa',
      to: 'Colombo',
      route: ['Batticaloa', 'Polonnaruwa', 'Colombo'],
      timePeriod: '9 AM - 3 PM',
      seats: 5,
    },
    {
      car: 'Maxus V80',
      from: 'Colombo',
      to: 'Hambantota',
      route: ['Colombo', 'Galle', 'Hambantota'],
      timePeriod: '8 AM - 2 PM',
      seats: 4,
    },
    {
      car: 'Hyundai Starex',
      from: 'Nuwara Eliya',
      to: 'Kandy',
      route: ['Nuwara Eliya', 'Peradeniya', 'Kandy'],
      timePeriod: '7 AM - 1 PM',
      seats: 3,
    },
    {
      car: 'Volkswagen Crafter',
      from: 'Anuradhapura',
      to: 'Polonnaruwa',
      route: ['Anuradhapura', 'Dambulla', 'Polonnaruwa'],
      timePeriod: '8 AM - 2 PM',
      seats: 6,
    },
    {
      car: 'Byd M6',
      from: 'Kurunegala',
      to: 'Colombo',
      route: ['Kurunegala', 'Negombo', 'Colombo'],
      timePeriod: '9 AM - 3 PM',
      seats: 5,
    },
    {
      car: 'Mercedes Sprinter',
      from: 'Galle',
      to: 'Colombo',
      route: ['Galle', 'Hikkaduwa', 'Colombo'],
      timePeriod: '6 AM - 12 PM',
      seats: 4,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredCards = cards.filter((card) =>
    card.car.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.route.some(routePoint => routePoint.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      <Searchbar onSearch={setSearchQuery} /> {/* Include the Searchbar component and pass the setSearchQuery function */}
      <section>
        <div className="cards-container">
          <div className="cards">
            {filteredCards.map((card, index) => (
              <div key={index} className="card">
                <h3>{card.car}</h3>
                <p><strong>From:</strong> {card.from}</p>
                <p><strong>To:</strong> {card.to}</p>
                <p><strong>Route:</strong> {card.route.join(' ➜ ')}</p> {/* Display the route */}
                <p><strong>Time Period:</strong> <span className="time-period">{card.timePeriod}</span></p>
                <p><strong>Available Seats:</strong> <span className="seats">{card.seats}</span></p>
                <Link to={`/readmore/${index}`} className="read-more">Read More</Link> {/* Link to Readmore */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsfeed;

