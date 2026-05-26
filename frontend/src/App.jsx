import './App.css';
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";


function App() {
  return (
    <div className='App'>
      <h1>Hello Sandbox</h1>
      <h2>Lets start creating!</h2>
      <MapContainer center={[43.0002, -107.554565]} zoom={8}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
    </div>
  );
}

export default App
