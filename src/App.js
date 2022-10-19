import Navbar from './components/Navbar';
import RoutesComponent from './config/RoutesComponent';
import 'swiper/css/bundle';
import Footer from './components/Footer';
import { GoogleOAuthProvider } from '@react-oauth/google';
import apiConfig from './api/apiConfig';

function App() {
  return (
    <div className="mx-3 lg:max-w-5xl lg:mx-auto" id="app">
      <GoogleOAuthProvider clientId={apiConfig.clientId}>
        <Navbar />
        <RoutesComponent />
        <Footer />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
