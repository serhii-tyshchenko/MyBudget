import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TRootState } from 'store';

import { Home, Expenses, Incomes, Settings } from 'pages';

import { routes } from 'constants/index';

const App = () => {
  const { theme } = useSelector((state: TRootState) => state.settings);
  document.documentElement.setAttribute('data-theme', theme);

  return (
    <Router>
      <Routes>
        <Route path={routes.HOME_PAGE} element={<Home />} />
        <Route path={routes.EXPENSES} element={<Expenses />} />
        <Route path={routes.INCOMES} element={<Incomes />} />
        <Route path={routes.SETTINGS} element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
