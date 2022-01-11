import './Main.scss';

interface IProps extends React.HTMLAttributes<Element> {}

const NAME_SPACE = 'main';

const Main = ({ children }: IProps) => (
  <main className={`${NAME_SPACE} wrapper`}>
    <div className={`${NAME_SPACE}__content`}>{children}</div>
  </main>
);

export { Main };
