import { useToast as useChakraToast } from '@chakra-ui/react';

interface Props {
  title?: string;
  status?: 'success' | 'error' | 'warning' | 'info' | 'loading';
  message: string;
}

export const useToast = () => {
  const toast = useChakraToast({
    containerStyle: {
      zIndex: '99999',
    },
  });

  const show = ({ title, message, status = 'info' }: Props) => {
    toast({
      isClosable: true,
      position: 'top',
      title,
      description: message,
      variant: 'solid',
      status,
    });
  };

  const error = (message: string) => {
    toast({
      isClosable: true,
      position: 'top',
      description: message,
      variant: 'solid',
      status: 'error',
    });
  };

  const success = (message: string) => {
    toast({
      isClosable: true,
      position: 'top',
      description: message,
      variant: 'solid',
      status: 'success',
    });
  };

  return { show, error, success };
};
