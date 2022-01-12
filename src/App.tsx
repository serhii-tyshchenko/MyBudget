import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TRootState } from 'store';

import { Home, Expenses, Incomes } from 'pages';

const App = () => {
  const { theme } = useSelector((state: TRootState) => state.settings);
  document.documentElement.setAttribute('data-theme', theme);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/incomes" element={<Incomes />} />
      </Routes>
    </Router>
  );
};

export default App;
