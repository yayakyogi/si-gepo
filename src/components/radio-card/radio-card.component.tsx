import { Box, Flex, useRadio } from '@chakra-ui/react';
import { IconCheck } from '@tabler/icons-react';
import React from 'react';

type RadioCardProps = {
  children: React.ReactNode;
};

const RadioCard = ({ children, ...props }: RadioCardProps) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        color="#FFFFFF"
        borderColor="#E5E5E5"
        boxShadow="md"
        _checked={{
          bg: '#E8F5E9',
          color: '#388E3C',
          borderColor: '#388E3C',
          fontWeight: 700,
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={3}
        py={3}
      >
        <Flex justifyContent="space-between">
          {children}
          {input.checked && <IconCheck />}
        </Flex>
      </Box>
    </Box>
  );
};

export default RadioCard;
