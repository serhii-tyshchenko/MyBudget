import { UIFormGroup, SettingsViewItem } from 'components/molecules';
import { TTranslation } from 'types';

const AboutCard = ({ STR }: TTranslation) => (
  <SettingsViewItem title={STR.ABOUT}>
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
  </SettingsViewItem>
);

export { AboutCard };
