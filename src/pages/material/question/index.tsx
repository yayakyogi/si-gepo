import { Button, Flex, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { quiz as ListQuiz } from '@resources/resources';
import { useNavigate, useParams } from 'react-router-dom';

import ButtonBack from '@components/ui/button-back/button-back.component';
import { find } from 'lodash-es';
import style from './style.module.scss';

const MaterialQuestionsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const getQuiz = find(ListQuiz, (val) => val.id === `materi-${id}`);

      setQuiz(getQuiz);
      setIsLoading(false);
    }
  }, [id]);

  return (
    <Flex direction="column" className={style.container}>
      {isLoading ? (
        <Flex
          w="full"
          h="full"
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={3}
          bgColor="rgba(0,0,0,0.8)"
        >
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
          <Text color="white">Loading...</Text>
        </Flex>
      ) : (
        <Flex direction="column" p={5} h="full" className={style.box}>
          <Flex align="center" gap={3} mb={5}>
            <ButtonBack link={`/material/${id}`} />
            <Text color="white" fontSize={16}>
              {quiz?.title}
            </Text>
          </Flex>
          <Flex flex={1} direction="column" h="full">
            <Text flex={1} color="white">
              {quiz?.synopsis}
            </Text>
            <Button
              colorScheme="primary"
              mt={5}
              onClick={() =>
                navigate('question', { state: JSON.stringify({ title: quiz?.title, questions: quiz?.questions }) })
              }
            >
              SOAL
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default MaterialQuestionsPage;
