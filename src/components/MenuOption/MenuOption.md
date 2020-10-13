```jsx
const btcIcon = "https://api.mercuryo.io/v1.5/img/icons/currencies/btc.svg";

<>
  <MenuOption title="999.87300000 BTC" subtitle="504,688,093.98 RUB" icon={btcIcon} />
  <MenuOption title="1 BTC" subtitle="≈ 1000 RUB" inline icon={btcIcon} />
  <MenuOption title="1 BTC" subtitle="≈ 1000 RUB" inline />
</>
```

### Shimmers
```jsx
import { MenuOptionShimmer } from '..';

<>
  <MenuOptionShimmer />
  <MenuOptionShimmer inline />
  <MenuOptionShimmer withoutIcon />
  <MenuOptionShimmer inline withoutIcon />
</>
```