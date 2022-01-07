import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Localization } from 'contexts';
import { updateSettings } from 'store/actions';
import { languages } from 'constants/languages';
import { UISelect } from 'components/atoms';

import './LanguageSelector.scss';

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const STR = useContext(Localization);
  const { language: currLang } = useSelector((state) => state.settings);

  const handleLanguageChange = (evt) => dispatch(updateSettings({ language: evt.target.value }))

  return (
    <UISelect
      value={currLang}
      onChange={handleLanguageChange}
      options={languages}
      className="language-selector"
      title={STR.TOGGLE_LANGUAGE}
    />
  );
};

export { LanguageSelector };
