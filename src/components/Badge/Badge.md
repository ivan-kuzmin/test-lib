```jsx
import React, { useState } from 'react';

const [active, setActive] = useState(false);

<Badge label="BTC" active={active} onClick={() => setActive(!active)} />
```