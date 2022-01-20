import { useContext, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Localization } from 'contexts';

import { updateSettings } from 'store/actions';
import { TRootState } from 'store';

import { languages, themes } from 'constants/index';

import { UIFormGroup, SettingsViewItem } from 'components/molecules';
import { UISelect } from 'components/atoms';

import { AboutCard } from './cards';

import { getThemeOptions } from './utils';

import './SettingsView.scss';

const NAME_SPACE = 'settings-view';

const SettingsView = () => {
  const dispatch = useDispatch();
  const STR = useContext(Localization);
  const { language, theme, categories } = useSelector(
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
        <SettingsViewItem title={STR.GENERAL}>
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
        </SettingsViewItem>
        <SettingsViewItem title={STR.EXPENSE_CATEGORIES}>
          <ul className="settings-categories-list">
            {categories.expenses.map(
              (category: { id: string; name: string }) => (
                <li className="settings-categories-list-item" key={category.id}>
                  {category.name}
                </li>
              )
            )}
          </ul>
        </SettingsViewItem>
        <SettingsViewItem title={STR.INCOME_CATEGORIES}>
          <ul className="settings-categories-list">
            {categories.incomes.map(
              (category: { id: string; name: string }) => (
                <li className="settings-categories-list-item" key={category.id}>
                  {category.name}
                </li>
              )
            )}
          </ul>
        </SettingsViewItem>
        <AboutCard STR={STR} />
      </section>
    </>
  );
};

export { SettingsView };
