import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useFirstRender from '../utils/useFirstRender';

import Loader from './Loader';

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    transition: all 0.5s ease-in-out;
    opacity: 0;

    &.active {
        opacity:1;
    }
`;

const Block = React.forwardRef(({ title, isActive }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const isFirst = useFirstRender();
  useEffect(() => {
    if (isFirst) return;

    if (isActive) {
      setIsLoading(true);
    }
    // не должно быть loader при первой загрузке
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // eslint-disable-next-line consistent-return
    return () => {
      setIsLoading(false);
      clearTimeout(timer);
    };
  }, [isActive]);

  return (
    <>
    {isLoading && <Loader/>}
    <Wrapper ref={ref}
        className={isActive ? 'active' : ''}>
        <h1>{title}</h1>
    </Wrapper>
    </>
  );
});

Block.displayName = 'Block';

export default Block;
