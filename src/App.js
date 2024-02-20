import React, { useState } from 'react';
import CelestialList from './components/CelestialList';
import DetailedView from './components/DetailedView';

function App() {
  const [details, setDetails] = useState(null);

  return (
    <div>
      {details ? (
        <DetailedView details={details} setDetails={setDetails} />
      ) : (
        <CelestialList setDetails={setDetails} />
      )}
    </div>
  );
}

export default App;