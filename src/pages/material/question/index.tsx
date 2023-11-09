import { Button, Flex, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { materialQuiz1, materialQuiz2 } from '@resources/questions';
import { useNavigate, useParams } from 'react-router-dom';

import ButtonBack from '@components/ui/button-back/button-back.component';
import style from './style.module.scss';

const MaterialQuestionsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (Number(id) === 1) {
      setQuiz(materialQuiz1);
      setIsLoading(false);
    } else if (Number(id) === 2) {
      setQuiz(materialQuiz2);
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
              {quiz?.quizTitle}
            </Text>
          </Flex>
          <Flex flex={1} direction="column" h="full">
            <Text flex={1} color="white">
              {quiz?.quizSynopsis}
            </Text>
            <Button
              colorScheme="primary"
              mt={5}
              onClick={() =>
                navigate('question', { state: JSON.stringify({ title: quiz?.quizTitle, questions: quiz?.questions }) })
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
