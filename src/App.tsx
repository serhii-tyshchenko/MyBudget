import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TRootState } from 'store';

import { Home, Expenses, Incomes, Settings } from 'pages';

const App = () => {
  const { theme } = useSelector((state: TRootState) => state.settings);
  document.documentElement.setAttribute('data-theme', theme);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/incomes" element={<Incomes />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
