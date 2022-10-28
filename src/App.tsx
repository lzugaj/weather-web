import React, { useState } from "react";

import Container from "./components/Container";
import Weather from "./pages/WeatherCard/Weather";

// eslint-disable-next-line import/order
import { LocationNameContext } from "./context/locationContext";

function App() {
  const [locationName, setLocationName] = useState("Zagreb");

  return (
    <LocationNameContext.Provider value={{ locationName, setLocationName }}>
      <Container>
        <Weather />
      </Container>
    </LocationNameContext.Provider>
  );
}

export default App;
