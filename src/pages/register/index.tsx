import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import Title from '@components/ui/title/title.component';
import { useToast } from '@hooks/useToast';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import style from './style.module.scss';

const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toast = useToast();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      npm: '',
      prodi: '',
      fakultas: '',
      universitas: '',
    },
    shouldUnregister: true,
  });

  const onSubmit = (val) => {
    // toast.success('Selamat Menikmati Permainan');
    // navigate('/homepage');

    setIsLoading(true);

    fetch(`${import.meta.env.VITE_REST_URL}/user/register`, { method: 'POST', body: JSON.stringify(val) })
      .then((val) => val.json())
      .then((res) => {
        const { data, success } = res;

        if (success) {
          toast.success(`Selamat Menikmati Permainan ${data.name}`);
          // navigate('/homepage');
        } else {
          toast.error(`Error: ${data.message}`);
        }

        setIsLoading(false);
      })
      .catch((error: any) => {
        toast.error(`Error: ${error.message}`);
        setIsLoading(false);
      });
  };

  return (
    <Flex direction="column" w="full" h="full" className={style.container}>
      <Box flex={1} w="full" p={6} className={style.box}>
        <Flex justifyContent="space-between" alignItems="start" mb={5}>
          <Title />
        </Flex>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={3}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                id="username"
                size="lg"
                className={errors.username ? 'input-error' : undefined}
                placeholder="Masukkan username"
                {...register('username', { required: { value: false, message: '*Username wajib diisi' } })}
              />
              {errors.username && (
                <Text color="white" fontWeight={700} fontSize={12}>
                  {errors.username.message}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>NPM/NIM</FormLabel>
              <Input
                id="npm"
                size="lg"
                className={errors.npm ? 'input-error' : undefined}
                placeholder="Masukkan NPM/NIM"
                {...register('npm', { required: { value: false, message: '*NPM/NIM wajib diisi' } })}
              />
              {errors.npm && (
                <Text color="white" fontWeight={700} fontSize={12}>
                  {errors.npm.message}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Program Studi</FormLabel>
              <Input
                id="prodi"
                size="lg"
                className={errors.npm ? 'input-error' : undefined}
                placeholder="Masukkan Prodi"
                {...register('npm', { required: { value: false, message: '*Prodi wajib diisi' } })}
              />
              {errors.prodi && (
                <Text color="white" fontWeight={700} fontSize={12}>
                  {errors.prodi.message}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Fakultas</FormLabel>
              <Input
                id="fakultas"
                size="lg"
                className={errors.npm ? 'input-error' : undefined}
                placeholder="Masukkan Fakultas"
                {...register('npm', { required: { value: false, message: '*Fakultas wajib diisi' } })}
              />
              {errors.fakultas && (
                <Text color="white" fontWeight={700} fontSize={12}>
                  {errors.fakultas.message}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Universitas</FormLabel>
              <Input
                id="universitas"
                size="lg"
                className={errors.npm ? 'input-error' : undefined}
                placeholder="Masukkan Universitas"
                {...register('npm', { required: { value: false, message: '*Universitas wajib diisi' } })}
              />
              {errors.universitas && (
                <Text color="white" fontWeight={700} fontSize={12}>
                  {errors.universitas.message}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  id="password"
                  className={errors.password ? 'input-error' : undefined}
                  type={showPassword ? 'text' : 'password'}
                  size="lg"
                  placeholder="Masukkan password"
                  {...register('password', { required: { value: false, message: 'Password harus diisi!' } })}
                />
                <InputRightElement>
                  <IconButton
                    size="lg"
                    variant="link"
                    mt="5px"
                    mr="20px"
                    aria-label={showPassword ? 'Sembunyikan Kata Sandi' : 'Tampilkan Kata Sandi'}
                    icon={showPassword ? <IconEyeOff color="#B6B6B6" /> : <IconEye color="#B6B6B6" />}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </InputRightElement>
              </InputGroup>

              {errors.password && (
                <Text color="white" fontWeight={700} fontSize={12}>
                  {errors.password.message}
                </Text>
              )}
            </FormControl>

            <Button size="lg" type="submit" isLoading={isLoading} w="full" borderRadius="10px" colorScheme="primary" mt={5}>
              Daftar
            </Button>
          </VStack>
        </form>
        <Flex justifyContent="center" alignItems="center" gap={1} mt={3}>
          <Text color="grey">Sudah punya akun? </Text>
          <Button variant="link" color="grey" onClick={() => navigate('/login')}>
            Login
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default RegisterPage;
