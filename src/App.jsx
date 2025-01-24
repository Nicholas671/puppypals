import { puppyList } from "./data";
import React, { useState } from "react";
import styles from './App.module.css';

function App() {
  console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find(puppy => puppy.id === featPupId);
  console.log(featuredPup);

  return (
    <div className={styles['appContainer']}>
      <div className={styles['puppy-list']}>
        <h1>Puppy Pals</h1>
        <h2>Click on a puppy to see more info</h2>
        {puppies.map((puppy) => (
          <p
            onClick={() => setFeatPupId(puppy.id)}
            key={puppy.id}
            className={styles['puppy']}
          >
            {puppy.name}
          </p>
        ))}
      </div > {featPupId && (
        <div className={styles['featured']}>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>
              <span>Age: {featuredPup.age}</span>
            </li>
            <li>
              <span>Email: {featuredPup.email}</span>
            </li>
          </ul>
        </div>
      )}</div>


  );
}

export default App 