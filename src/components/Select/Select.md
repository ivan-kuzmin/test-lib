```jsx
const getIcon = (currency) => `https://api.mercuryo.io/v1.5/img/icons/currencies/${currency}.svg`;

<div style={{ display: 'grid', gridGap: 'var(--gap-2x)' }}>
  <Select
    label="Currency"
    placeholder="Placeholder"
    options={[
      { value: 'BTC', label: 'Bitcoin', icon: getIcon('btc') },
      { value: 'ETH', label: 'Ethereum', icon: getIcon('eth') },
    ]}
  />
  <Select
    isSearchable={false}
    placeholder="Select..."
    options={[
      {
        label: 'Coins',
        options: [
          { value: 'BTC', label: 'Bitcoin', icon: getIcon('btc') },
          { value: 'ETH', label: 'Ethereum', icon: getIcon('eth') },
        ]
      }
    ]}
  />
</div>
```