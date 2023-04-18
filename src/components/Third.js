import React from 'react';

const Third = React.forwardRef((props, ref) => (
    <div ref={ref} className="content-item">
        <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" />
      </div>
));

Third.displayName = 'Third';

export default Third;
