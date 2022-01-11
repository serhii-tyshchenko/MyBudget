import React from 'react';

import { Header, Main, Footer } from 'components/organisms';

interface IProps extends React.HTMLAttributes<Element> {}

const BaseTemplate = ({ children }: IProps) => (
  <div className="container">
    <Header />
    <Main>{children}</Main>
    <Footer />
  </div>
);

export { BaseTemplate };
