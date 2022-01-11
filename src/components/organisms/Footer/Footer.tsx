import './Footer.scss';

const NAME_SPACE = 'footer';

const Footer = () => (
  <footer className={NAME_SPACE}>
    <div className={`${NAME_SPACE}__content wrapper`}>
      <a href={process.env.REACT_APP_AUTHOR_URL}>
        © {process.env.REACT_APP_AUTHOR_NAME}
      </a>
      version {process.env.REACT_APP_VERSION}
    </div>
  </footer>
);

export { Footer };
