import { Flex, Image, Text } from '@chakra-ui/react';
import routes from '@routes';
import React, { useEffect, useMemo, useState } from 'react';
import { useRoutes } from 'react-router-dom';

const App: React.FC = () => {
  // Audio
  const audio = useMemo(() => new Audio('/musics/Mr_Smith-Sonorus.mp3'), []);

  useEffect(() => {
    audio.play();

    return () => {
      audio.removeEventListener('ended', () => {});
    };
  }, [audio]);

  const element = useRoutes(routes);
  const [isPortrait, setIsPortrait] = useState(window.matchMedia('(orientation: portrait)').matches);

  useEffect(() => {
    const handleOrientationChange = (event: { matches: boolean | ((prevState: boolean) => boolean) }) => {
      setIsPortrait(event.matches);
    };

    const orientationMediaQuery = window.matchMedia('(orientation: portrait)');

    orientationMediaQuery.addEventListener('change', handleOrientationChange);

    return () => {
      orientationMediaQuery.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  if (isPortrait) {
    return (
      <Flex w="full" h="full" direction="column" gap={2} justifyContent="center" alignItems="center" px={5}>
        <Image src="/images/illustrations/landscape-mode.svg" objectFit="cover" w="300px" mb={3} />
        <Text textAlign="center" fontSize={24} fontWeight={700}>
          Portrait Mode Detected!
        </Text>
        <Text textAlign="center" fontSize={16} color="#8D92A3">
          Silakan putar perangkat Anda ke mode <b>lanskap</b> untuk pengalaman terbaik.
        </Text>
      </Flex>
    );
  }

  return <>{element}</>;
};

export default App;
