import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Punormiloni from './pages/Punormiloni';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/punormiloni" element={<Punormiloni />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-green-900 text-white py-6 sm:py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="mb-1 sm:mb-2 text-sm sm:text-base">© ২০২৬ হলোখানা দ্বি-মুখী উচ্চ বিদ্যালয় এসএসসি ব্যাচ-২০১০</p>
            <p className="text-green-300 text-xs sm:text-sm">ঈদ পুনর্মিলনী উদযাপন কমিটি</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;