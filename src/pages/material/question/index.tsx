import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Quiz from 'react-quiz-component';

import ModalQuestionsCopleted from '@components/modal/questions-completed/questions-completed.component';
import { materialQuiz1, materialQuiz2 } from '@resources/questions';
import { useNavigate, useParams } from 'react-router-dom';

import ButtonBack from '@components/ui/button-back/button-back.component';
import style from './style.module.scss';

const MaterialQuestionsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const renderCustomResultPage = (obj: any) => {
    return <ModalQuestionsCopleted obj={obj} isOpen onClose={() => navigate(-1)} />;
  };

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
      <ButtonBack link={`/material/${id}`} />
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
        <Box className={style.box}>
          <Quiz quiz={quiz} showDefaultResult={false} customResultPage={renderCustomResultPage} />
        </Box>
      )}
    </Flex>
  );
};

export default MaterialQuestionsPage;

/*
correctPoints
: 
0
numberOfCorrectAnswers
: 
0
numberOfIncorrectAnswers
: 
0
numberOfQuestions
: 
5
questions
: 
(5) [{…}, {…}, {…}, {…}, {…}]
totalPoints
: 
0
userInput
: 
[]
*/
