import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useLocalization } from 'hooks';

import { updateSettings } from 'store/actions';
import { TRootState } from 'store';

import { languages, themes } from 'constants/index';

import { UIFormGroup, UIModal } from 'components/molecules';
import { UISelect } from 'components/atoms';

import { SettingsItem } from './SettingsItem';

import { TProps } from './types';
import { getThemeOptions } from './utils';

import './SettingsModal.scss';

const NAME_SPACE = 'settings-view';

const SettingsModal = ({ onClose, isVisible }: TProps) => {
  const dispatch = useDispatch();
  const STR = useLocalization();
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
    <UIModal isVisible={isVisible} onClose={onClose} title={STR.SETTINGS}>
      <section className={NAME_SPACE}>
        <SettingsItem title={STR.GENERAL}>
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
        </SettingsItem>
        <SettingsItem title={STR.EXPENSE_CATEGORIES}>
          <ul className="settings-list">
            {categories.expenses.map(
              (category: { id: string; name: string }) => (
                <li className="settings-list-item" key={category.id}>
                  {category.name}
                </li>
              )
            )}
          </ul>
        </SettingsItem>
        <SettingsItem title={STR.INCOME_CATEGORIES}>
          <ul className="settings-list">
            {categories.incomes.map(
              (category: { id: string; name: string }) => (
                <li className="settings-list-item" key={category.id}>
                  {category.name}
                </li>
              )
            )}
          </ul>
        </SettingsItem>
        <SettingsItem title={STR.ABOUT}>
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
        </SettingsItem>
      </section>
    </UIModal>
  );
};

export { SettingsModal };
