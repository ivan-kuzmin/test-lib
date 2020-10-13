```jsx
<Limit title="Exchange Fiat to BTC" max={1.14} value={0.57} />
```
```jsx
<Limit max={2} value={1} card={{
  number: '************7280',
  paymentSystem: 'mastercard',
}} />
```

### Shimmers
```jsx
import { LimitShimmer } from '..';

<LimitShimmer />
```
```jsx
import { LimitShimmer } from '..';

<LimitShimmer card />
```