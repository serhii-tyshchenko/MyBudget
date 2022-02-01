import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useTheme } from 'hooks';

import { Home, Expenses, Incomes } from 'pages';

import { routes } from 'constants/index';

const App = () => {
  useTheme();

  return (
    <Router>
      <Routes>
        <Route path={routes.HOME_PAGE} element={<Home />} />
        <Route path={routes.EXPENSES} element={<Expenses />} />
        <Route path={routes.INCOMES} element={<Incomes />} />
      </Routes>
    </Router>
  );
};

export default App;
