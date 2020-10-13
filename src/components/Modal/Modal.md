```jsx
import React, { useState } from 'react';
import { Button } from '../Button';

const [modalIsOpen, setModalIsOpen] = useState(false);

<>
  <Button onClick={() => setModalIsOpen(!modalIsOpen)}>Show Modal</Button>
  <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
    Modal content
  </Modal>
</>
```