```jsx
const container = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridGap: 'var(--gap-4x)',
  justifyContent: 'start',
};

const card = {
  width: '300px',
  borderRadius: '8px',
  boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
};

const image = {
  width: '100%',
  height: '200px',
  borderRadius: '8px 8px 0 0',
};

const cardContent = {
  padding: 'var(--gap-4x) var(--gap-3x) var(--gap-4x)',
  display: 'grid',
  gridGap: 'var(--gap)',
};

const title = {
  height: '18px',
};

const subtitle = {
  height: '18px',
  width: '60%',
  marginBottom: 'var(--gap-2x)',
};

<div style={container}>
  <div style={{ ...card, background: 'var(--color-white)' }}>
    <Shimmer style={image} />
    <div style={cardContent}>
      <Shimmer style={title} />
      <Shimmer style={subtitle} />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer style={{ width: '30%' }} />
    </div>
  </div>
  <div style={{ ...card, background: 'var(--color-black)' }}>
    <Shimmer dark style={image} />
    <div style={cardContent}>
      <Shimmer dark style={title} />
      <Shimmer dark style={subtitle} />
      <Shimmer dark />
      <Shimmer dark />
      <Shimmer dark />
      <Shimmer dark />
      <Shimmer dark style={{ width: '30%' }} />
    </div>
  </div>
</div>
```