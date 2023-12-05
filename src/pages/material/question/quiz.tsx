import { Box, Button, Flex, Text, useRadioGroup } from '@chakra-ui/react';
import ButtonBack from '@components/ui/button-back/button-back.component';
import React, { useEffect, useState } from 'react';

import ModalQuestionsCopleted from '@components/modal/questions-completed/questions-completed.component';
import RadioCard from '@components/radio-card/radio-card.component';
import { findIndex, map, sumBy } from 'lodash-es';
import { useLocation, useParams } from 'react-router-dom';
import style from './style.module.scss';

const MaterialQuestionQuizPage: React.FC = () => {
  const { id } = useParams();
  const params = useLocation();

  const [questions, setQuestions] = useState<any[]>([]);
  const [title, setTitle] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState<number>(0);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [inCorrectAnswer, setInCorrectAnswer] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const step = questions[currentIndex];

  const { getRadioProps } = useRadioGroup({
    name: 'questions',
    defaultValue: '',
    onChange: (value) => {
      const tes = findIndex(step.answers, (val) => val === value);

      setAnswer((tes + 1).toString());
    },
  });

  const handleNextQuestion = () => {
    if (answer === step.correctAnswer && currentIndex <= questions.length - 1) {
      setScore((old) => old + Number(step.point));
      setCorrectAnswer((old) => old + 1);
    } else {
      setInCorrectAnswer((old) => old + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnswer('');
    } else {
      setIsModalOpen(true);
    }
  };

  const renderStep = () => {
    return step ? (
      <>
        <Box flex={1} overflow="scroll" py={2} px={2}>
          <Text color="white" fontWeight={700} fontSize={18} mb={3}>
            {currentIndex + 1}. {step.question}
          </Text>
          <Flex direction="column" gap={2} mb={10}>
            {map(step.answers, (value, index) => {
              const radio = getRadioProps({ value });

              return (
                <RadioCard key={index} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </Flex>
        </Box>
        <Box position="absolute" bottom={0} left={0} width="full" py={2} px={6}>
          <Button colorScheme="primary" width="full" isDisabled={!answer} onClick={handleNextQuestion}>
            Selanjutnya
          </Button>
        </Box>
      </>
    ) : null;
  };

  useEffect(() => {
    const quiz = JSON.parse(params.state);

    setQuestions(quiz.questions);
    setTitle(quiz.title);
  }, []);

  return (
    <Flex direction="column" className={style.container}>
      <Flex direction="column" p={5} h="full" className={style.box}>
        <Flex align="center" gap={3} mb={5}>
          <ButtonBack link={`/material/${id}/quiz`} />
          <Text color="white" fontSize={16}>
            {title}
          </Text>
        </Flex>
        {renderStep()}
      </Flex>
      <ModalQuestionsCopleted
        isOpen={isModalOpen}
        result={{
          correctAnswer,
          inCorrectAnswer,
          correctPoint: score,
          totalPoint: sumBy(questions[currentIndex], 'point'),
        }}
        onReset={() => {
          setIsModalOpen(false);
          setInCorrectAnswer(0);
          setCorrectAnswer(0);
          setCurrentIndex(0);
          setAnswer('');
          setScore(0);
        }}
      />
    </Flex>
  );
};

export default MaterialQuestionQuizPage;
