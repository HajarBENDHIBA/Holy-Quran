import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SurahDetails from "./pages/SurahDetails";
import Duas from './components/Duas';
import Adhkar from './components/Adhkar';
import NamesOfAllah from './components/NamesOfAllah';
import Footer from './components/Footer';
import Favorites from './pages/Favorites';
import Tajweed from './components/Tajweed';
import IslamicCalendar from './components/IslamicCalendar';
import KidsCorner from './components/KidsCorner';
import HowToPray from './components/kids/HowToPray';
import HowToWudu from './components/kids/HowToWudu';
import IslamicCartoons from './components/kids/IslamicCartoons';
import ProphetStories from './components/kids/ProphetStories';
import { FavoritesProvider } from './context/FavoritesContext';
import DailyDua from "./components/kids/DailyDua";
import ArkanIslam from './components/kids/ArkanIslam';
import IslamicAnimals from "./components/kids/IslamicAnimals";

const App = () => {
  const [search, setSearch] = useState(""); // State for search term

  return (
    <FavoritesProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar search={search} setSearch={setSearch} />
          <main className="flex-grow bg-gray-50">
            <Routes>
              <Route path="/" element={<Home search={search} />} />
              <Route path="/surah/:id" element={<SurahDetails />} />
              <Route path="/duas" element={<Duas />} />
              <Route path="/adhkar" element={<Adhkar />} />
              <Route path="/names-of-allah" element={<NamesOfAllah />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/tajweed" element={<Tajweed />} />
              <Route path="/islamic-calendar" element={<IslamicCalendar />} />
              <Route path="/kids-corner" element={<KidsCorner />} />
              <Route path="/kids/how-to-wudu" element={<HowToWudu />} />
              <Route path="/kids/how-to-pray" element={<HowToPray />} />
              <Route path="/kids/how-to-wudu" element={<HowToWudu />} />
              <Route path="/kids/cartoons" element={<IslamicCartoons />} />
              <Route path="/kids/prophet-stories" element={<ProphetStories />} />
              <Route path="/kids/daily-duas" element={<DailyDua />} />
              <Route path="/kids/arkan-islam" element={<ArkanIslam />} />
              <Route path="/kids/islamic-animals" element={<IslamicAnimals />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
