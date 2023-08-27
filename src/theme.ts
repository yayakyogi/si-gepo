import { extendTheme } from '@chakra-ui/react';

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-30px)',
  color: '#111',
  fontSize: '18px',
  backgroundColor: 'white',
};

export default extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#020202',
    white: '#fff',
    grey: '#FAFAFC',
    success: '#1ABC9C',
    danger: '#D9435E',
    primary: {
      500: '#D9435E',
    },
    secondary: {
      500: '#542601',
    },
  },
  fonts: {
    body: 'Inter, sans-serif',
  },
  button: {
    defaultProps: {
      size: 'md',
    },
    fontSize: 14,
  },
  components: {
    Input: {
      baseStyle: {
        field: {
          _placeholder: {
            color: '#b6b6b6',
            fontSize: 14,
          },
        },
      },
    },
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            // eslint-disable-next-line max-len
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 1,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
              color: '#8D92A3',
            },
          },
        },
      },
    },
  },
});
