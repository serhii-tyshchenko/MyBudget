import './Main.scss';

interface IProps extends React.HTMLAttributes<Element> {}

const Main = ({ children }: IProps) => (
  <main className="main wrapper">
    <div className="main__content">{children}</div>
  </main>
);

export { Main };
