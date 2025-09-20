import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Redeem from './pages/Redeem';
import Profile from './pages/Profile';
import Support from './pages/Support';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import EarnPoints from './pages/EarnPoints';
import FlightDiscounts from './pages/FlightDiscounts';
import UpgradeFirstClass from './pages/UpgradeFirstClass';
import FreeLuggage from './pages/FreeLuggage';
import LoungeAccess from './pages/LoungeAccess';
import BookTicket from './pages/BookTicket';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redeem" element={<Redeem />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/earn-points" element={<EarnPoints />} />
          <Route path="/flight-discounts" element={<FlightDiscounts />} />
          <Route path="/upgrade-first-class" element={<UpgradeFirstClass />} />
          <Route path="/free-luggage" element={<FreeLuggage />} />
          <Route path="/lounge-access" element={<LoungeAccess />} />
          <Route path="/book-ticket" element={<BookTicket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;