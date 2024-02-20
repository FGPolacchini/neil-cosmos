import React, { useState, useEffect } from "react";
import axios from "axios";

const CelestialList = ({ setDetails }) => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=Af2XmNNzlS6YJUYqhyfLgRDBBjO3wiyTGsznpuiP&count=10"
        );
        const data = await response.json()
        console.log("API Response:", data);
        setObjects(data);
      } catch (error) {
        console.error("Error fetching celestial objects:", error);
        setObjects(null);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Cosmos Explorer</h1>
      {objects.map((object, index) => (
        <div key={index}>
          <h2>{object.title}</h2>
          <img src={object.url} alt={object.title} />
          <p>{object.explanation}</p>
          <button onClick={() => setDetails(object)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default CelestialList;

// async function fetchCelestialObjects() {
//   try {
//     const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=Af2XmNNzlS6YJUYqhyfLgRDBBjO3wiyTGsznpuiP');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching celestial objects:', error);
//     throw error;
//   }
// }
