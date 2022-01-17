import { useContext, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Localization } from 'contexts';

import { updateSettings } from 'store/actions';
import { TRootState } from 'store';

import { languages, themes } from 'constants/index';

import { UIFormGroup } from 'components/molecules';
import { UISelect } from 'components/atoms';

import { getThemeOptions } from './utils';

import './SettingsView.scss';

const NAME_SPACE = 'settings-view';

const SettingsView = () => {
  const dispatch = useDispatch();
  const STR = useContext(Localization);
  const { language, theme } = useSelector(
    (state: TRootState) => state.settings
  );
  const handleSettingsChange = ({
    target: { name, value },
  }: {
    target: { value: any; name: any };
  }) => dispatch(updateSettings({ [name]: value }));

  const themeOptions = useMemo(() => getThemeOptions(themes, STR), [STR]);

  return (
    <>
      <section className={NAME_SPACE}>
        <h3>{STR.SETTINGS}</h3>
        <fieldset className={`${NAME_SPACE}-item`}>
          <h4 className={`${NAME_SPACE}-item__legend`}>{STR.GENERAL}</h4>
          <UIFormGroup>
            <span>{STR.LANGUAGE}</span>
            <UISelect
              name="language"
              value={language}
              onChange={handleSettingsChange}
              options={languages}
              title={STR.TOGGLE_LANGUAGE}
            />
          </UIFormGroup>
          <UIFormGroup>
            <span>{STR.THEME}</span>
            <UISelect
              name="theme"
              value={theme}
              onChange={handleSettingsChange}
              options={themeOptions}
              title={STR.TOGGLE_LANGUAGE}
            />
          </UIFormGroup>
        </fieldset>
        <fieldset className={`${NAME_SPACE}-item`}>
          <h4 className={`${NAME_SPACE}-item__legend`}>{STR.ABOUT}</h4>
          <UIFormGroup>
            <span>{STR.VERSION}</span>
            {process.env.REACT_APP_VERSION}
          </UIFormGroup>
          <UIFormGroup>
            <span>{STR.DEVELOPER}</span>
            <a href={process.env.REACT_APP_AUTHOR_URL}>
              {process.env.REACT_APP_AUTHOR_NAME}
            </a>
          </UIFormGroup>
        </fieldset>
      </section>
    </>
  );
};

export { SettingsView };
