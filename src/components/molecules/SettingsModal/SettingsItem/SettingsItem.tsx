import './SettingsItem.scss';

const NAME_SPACE = 'settings-item';

type TProps = {
  title?: string;
  children: JSX.Element | JSX.Element[];
};

const SettingsItem = ({ title, children }: TProps) => (
  <fieldset className={NAME_SPACE}>
    <h4 className={`${NAME_SPACE}__legend`}>{title}</h4>
    {children}
  </fieldset>
);

export { SettingsItem };
