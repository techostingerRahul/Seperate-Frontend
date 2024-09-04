import React, { useState, useEffect } from 'react';
import './Userlist.css';
import ProfileCard from './ProfileCard';
import Arrow from "./assets/arrow.svg"
import girl1 from "./assets/girl1.svg"
import girl2 from "./assets/girl2.svg"
import girl3 from "./assets/girl3.svg"
import girl4 from "./assets/girl4.svg"
import Next from "./assets/Next.svg"
import { Link } from 'react-router-dom';

const Near = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Anjali',
      age: '24',
      height: '5\'5"',
      location: 'Bengaluru, Karnataka',
      languages: ['Hindi', 'Kannada', 'Marathi'],
      profession: 'Full stack developer',
      image: girl1 // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Anjali',
      age: '24',
      height: '5\'5"',
      location: 'Bengaluru, Karnataka',
      languages: ['Hindi', 'Kannada', 'Marathi'],
      profession: 'Full stack developer',
      image: girl2 // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Anjali',
      age: '24',
      height: '5\'5"',
      location: 'Bengaluru, Karnataka',
      languages: ['Hindi', 'Kannada', 'Marathi'],
      profession: 'Full stack developer',
      image: girl3 // Replace with actual image URL
    },
    {
      id: 4,
      name: 'Anjali',
      age: '24',
      height: '5\'5"',
      location: 'Bengaluru, Karnataka',
      languages: ['Hindi', 'Kannada', 'Marathi'],
      profession: 'Full stack developer',
      image: girl4 // Replace with actual image URL
    },
    {
      id: 5,
      name: 'Anjali',
      age: '24',
      height: '5\'5"',
      location: 'Bengaluru, Karnataka',
      languages: ['Hindi', 'Kannada', 'Marathi'],
      profession: 'Full stack developer',
      image: girl1 // Replace with actual image URL
    },
  ]);

  // Chunk the users array into groups of 5
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const userChunks = chunkArray(users, 5);

  return (
    <div className="user-list-container">
      <h2 className="header">
        Nearby <span className='match'>Users</span>Currently<span className='match'>Online</span>
      </h2>
      <img src={Arrow} alt='' className='arrow' />
      {userChunks.map((chunk, index) => (
        <div key={index} className="profile-grid-wrapper">
          <div className="profile-grid">
            {chunk.map(user => (
              <Link to={`/viewprofile?id=${user.id}`}>
              <ProfileCard
                key={user.id}
                name={user.name}
                age={user.age}
                height={user.height}
                location={user.location}
                languages={user.languages.join(', ')}
                profession={user.profession}
                image={user.image}
              />
              </Link>
            ))}
          </div>
          <img src={Next} alt="Next" className="next-button" />
        </div>
      ))}
    </div>
  );
};

export default Near;
