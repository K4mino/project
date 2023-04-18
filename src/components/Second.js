import React from 'react';

const Second = React.forwardRef((props, ref) => (
    <div ref={ref} className="content-item">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
      </div>
));

Second.displayName = 'Second';

export default Second;
