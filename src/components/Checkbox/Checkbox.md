```jsx
import React, { useState } from 'react';

const [value, setValue] = useState(false);

const handleClick = () => {
  setValue(!value);
};

<Checkbox checked={value} onClick={handleClick} />
```