import React from 'react';
import { block } from 'bem-cn';

import './PrimarySection.scss';
import PrimarySectionContainer from './components/PrimarySectionContainer';

interface Props {
  title?: string;
  span?: number;
  offset?: number;
}

const PrimarySection: React.FC<Props> = ({ title, span, offset, children }) => {
  const cn = block('PrimarySection');

  return (
    <section className={cn()}>
      {title && <h1 className={cn('title')}>{title}</h1>}

      <PrimarySectionContainer span={span} offset={offset}>
        {children}
      </PrimarySectionContainer>
    </section>
  );
};

export default PrimarySection;
