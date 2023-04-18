import React from 'react';

const Fourth = React.forwardRef((props, ref) => (
      <div id="last" ref={ref} className="content-item">
          <div className="content-img-wrapper">
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" />
          </div>
        </div>
));

Fourth.displayName = 'Fourth';

export default Fourth;
