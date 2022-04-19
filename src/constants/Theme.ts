export const awesomeTheme = {
  colors: {
    primary: {
      50: '#f9fafc',
      100: '#293a59',
      200: '#b5c1d6',
    },
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: 13,
      },
      defaultProps: {
        color: 'primary.200',
        fontWeight: 'normal',
      },
    },
    Heading: {
      defaultProps: {
        color: 'primary.100',
        fontWeight: 'bold',
        size: 'md',
      },
    },
  },
  fontConfig: {
    WorkSans: {
      400: {
        normal: 'WorkSans_400Regular',
      },
      500: {
        normal: 'WorkSans_500Medium',
      },
      600: {
        normal: 'WorkSans_600SemiBold',
      },
      900: {
        normal: 'WorkSans_700Bold',
      },
    },
  },
  fonts: {
    heading: 'WorkSans',
    body: 'WorkSans',
    mono: 'WorkSans',
  },
  fontWeights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '900',
  },
  fontSizes: {
    h1: 25,
    h2: 20,
    h3: 18,
    h4: 15,
    h5: 13,
    h6: 10,
  },
};
