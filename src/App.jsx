import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './Pages/Home/Home';
import Index from './Pages/Index/Index';
import Show from './Pages/Show/Show';
import New from './Pages/New/New';
import Edit from './Pages/Edit/Edit';
import ProfilePg from './Pages/ProfilePg/ProfilePg';
import NotFound from './Pages/NotFound/NotFound';

// Components
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

const API = import.meta.env.VITE_API_URL;

function App() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    monthlyBudget: 0,
    monthlyIncome: 0,
  });

  return (
    <main>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/transactions" element={<Index />} />
          <Route path="/transactions/:id" element={<Show />} />
          <Route path="/new" element={<New />} />
          <Route path="/transactions/:id/edit" element={<Edit />} />
          <Route
            path="/profile"
            element={<ProfilePg user={user} setUser={setUser} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
