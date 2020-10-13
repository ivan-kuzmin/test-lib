```jsx
<Notification 
  title="Security Police" 
  type="error"
  buttons={[
    { label: 'Close', onClick: () => alert('Thank you!') },
  ]}
>
  The card is issued by the bank from the banned country.
</Notification>
```