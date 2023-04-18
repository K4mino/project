import React from 'react';

const Hero = React.forwardRef((props, ref) => (
    <div ref={ref} className="content-item active">
        <h1>HELLO</h1>
        <div className="content">
          <div className="content-img-wrapper">
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" />
          </div>
        </div>
      </div>
));

Hero.displayName = 'Hero';

export default Hero;
