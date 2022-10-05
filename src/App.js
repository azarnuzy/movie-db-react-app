import Navbar from './components/Navbar';
import RoutesComponent from './config/RoutesComponent';
import 'swiper/css/bundle';

function App() {
  return (
    <div className="mx-3 " id="app">
      <Navbar />
      <RoutesComponent />
    </div>
  );
}

export default App;
