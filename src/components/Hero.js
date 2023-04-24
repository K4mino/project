import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const Hero = React.forwardRef(({ isActive }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isActive) {
      setIsLoading(true);
    }
    // не должно быть loader при первой загрузке
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      setIsLoading(false);
      clearTimeout(timer);
    };
  }, [isActive]);
  return (
    <>
      {isLoading && <Loader /> }
        <div ref={ref} className="content-item active">
          <div className="content-img-wrapper">
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" />
          </div>
        </div>
    </>
  );
});

Hero.displayName = 'Hero';

export default Hero;
