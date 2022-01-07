/* eslint-disable react/prop-types */
import { createContext } from 'react';
import { useSelector } from 'react-redux';
import { translations } from 'constants/translations';

const Localization = createContext();
Localization.displayName = 'Localization';

const LocalizationProvider = ({ children }) => {
  const { language } = useSelector((state) => state.settings);

  return (
    <Localization.Provider value={translations[language]}>
      {children}
    </Localization.Provider>
  );
};

export { Localization, LocalizationProvider };
