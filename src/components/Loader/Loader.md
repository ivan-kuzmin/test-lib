```jsx
const container = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, auto)',
  gridGap: 'var(--gap-2x)',
  justifyContent: 'start',
  alignItems: 'center',
};

<div style={container}>
  <Loader size={64} />
  <Loader color="var(--color-black)" size={56} />
  <Loader color="var(--color-blue-night)" />
  <Loader color="var(--color-coffee-primary)" size={40} />
  <Loader color="var(--color-blue)" size={32} />
  <Loader color="var(--color-grey-dark)" size={24} />
  <Loader color="var(--color-red-secondary-on-white)" size={16} />
</div>
```