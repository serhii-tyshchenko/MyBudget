import React from 'react';

import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

interface IProps extends React.HTMLAttributes<Element> {}

const BaseLayout = ({ children }: IProps) => (
  <div className="container">
    <Header />
    <Main>{children}</Main>
    <Footer />
  </div>
);

export { BaseLayout };
