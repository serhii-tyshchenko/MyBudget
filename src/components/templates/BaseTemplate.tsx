import React from 'react';

import { Header, Main } from 'components/organisms';

interface IProps extends React.HTMLAttributes<Element> {}

const NAME_SPACE = 'container';

const BaseTemplate = ({ children }: IProps) => (
  <div className={NAME_SPACE}>
    <Header />
    <Main>{children}</Main>
  </div>
);

export { BaseTemplate };
