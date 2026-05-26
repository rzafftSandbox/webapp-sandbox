import './App.css';
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";


function App() {
  return (
    <div className='App'>
      <h1>Hello Sandbox</h1>
      <h2>Lets start creating!</h2>
      <MapContainer center={[42.583, 107.403]} zoom={25}>
        <TileLayer
          attribution='https://www.openstreetmap.org/copyright'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
    </div>
  );
}

export default App
