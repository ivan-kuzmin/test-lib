import React, { useState } from 'react';
import shortid from 'shortid';

export const FigmaLoader: React.FC<{ src: string }> = ({ src }) => {
  const [hidden, setHidden] = useState(true);

  return hidden ? (
    <button
      style={{ background: 'red', width: '100%', height: '450px' }}
      onClick={() => setHidden(false)}
    >
      Click to load
    </button>
  ) : (
    <iframe
      title={shortid.generate()}
      style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
      width="100%"
      height="450"
      src={src}
      allowFullScreen
    />
  );
};
