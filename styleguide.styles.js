const styles = (theme) => ({
  StyleGuide: {
    logo: {
      paddingTop: theme.space[6],
      paddingBottom: 0,
    },
    content: {
      paddingTop: theme.space[6],
      marginTop: theme.space[5],
    },
    footer: {
      display: 'none',
    },
  },
  Heading: {
    heading1: {
      lineHeight: '48px',
      marginBottom: theme.space[4],
    },
  },
  SectionHeading: {
    toolbar: {
      display: 'none',
    },
    sectionName: {
      pointerEvents: 'none',
    },
  },
  ReactComponent: {
    root: {
      display: 'grid',
    },
    header: {},
    tabs: {
      paddingTop: 0,
      marginBottom: 0,
    },
    tabButtons: {
      display: 'none',
    },
    docs: {
      gridRow: '4 / 5',
    },
  },
  Playground: {
    root: {
      paddingBottom: theme.space[2],
    },
    preview: {
      marginBottom: theme.space[2],
      border: 'none',
      paddingLeft: 0,
      paddingRight: 0,
    },
    controls: {
      display: 'none',
    },
  },
  Table: {
    table: {
      marginBottom: theme.space[3],
    },
    cell: {
      '&:last-child': {
        width: '60%',
      },
    },
  },
});

export default styles;
