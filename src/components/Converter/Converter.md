```jsx
import React, { useState } from 'react';

const [fromAmount, setFromAmount] = useState('');
const [fromCurrency, setFromCurrency] = useState('BTC');
const [toAmount, setToAmount] = useState('');
const [toCurrency, setToCurrency] = useState('EUR');

<Converter
  from={{
    amount: [fromAmount, setFromAmount],
    currency: [fromCurrency, setFromCurrency],
    currencies: [
      {
        label: 'Coins',
        options: [
          { value: 'BTC', label: 'Bitcoin', icon: 'https://api.mercuryo.io/v1.5/img/icons/currencies/btc.svg' },
          { value: 'ETH', label: 'Ethereum', icon: 'https://api.mercuryo.io/v1.5/img/icons/currencies/eth.svg' },
        ]
      },
      {
        label: 'Fiat',
        options: [
          { value: 'EUR', label: 'Euro', icon: 'https://api.mercuryo.io/v1.5/img/icons/currencies/eur.svg' },
          { value: 'RUB', label: 'Ruble', icon: 'https://api.mercuryo.io/v1.5/img/icons/currencies/rub.svg' },
        ]
      }
    ]
  }}
  to={{
    amount: [toAmount, setToAmount],
    currency: [toCurrency, setToCurrency],
    currencies: [
      { value: 'EUR', label: 'Euro', icon: 'https://api.mercuryo.io/v1.5/img/icons/currencies/eur.svg' },
      { value: 'RUB', label: 'Ruble', icon: 'https://api.mercuryo.io/v1.5/img/icons/currencies/rub.svg' },
    ]
  }}
/>
```