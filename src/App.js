import Navbar from './components/Navbar';
import RoutesComponent from './config/RoutesComponent';
import 'swiper/css/bundle';

function App() {
  return (
    <div className="mx-3 lg:max-w-5xl lg:mx-auto" id="app">
      <Navbar />
      <RoutesComponent />
    </div>
  );
}

export default App;
