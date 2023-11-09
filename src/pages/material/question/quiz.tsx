import { Box, Button, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import ButtonBack from '@components/ui/button-back/button-back.component';
import React, { useEffect, useState } from 'react';

import { useToast } from '@hooks/useToast';
import { material } from '@state/atom';
import { useAtom } from 'jotai';
import { map } from 'lodash-es';
import { useLocation, useParams } from 'react-router-dom';
import style from './style.module.scss';

const MaterialQuestionQuizPage: React.FC = () => {
  const { id } = useParams();
  const params = useLocation();
  const toast = useToast();

  const [questions, setQuestions] = useState<any[]>([]);
  const [title, setTitle] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState<number>(0);
  const [, setMateri] = useAtom(material);

  useEffect(() => {
    const quiz = JSON.parse(params.state);

    setQuestions(quiz.questions);
    setTitle(quiz.title);
  }, []);

  const renderStep = () => {
    const step = questions[currentIndex];

    return step ? (
      <>
        <Box flex={1} overflow="scroll" py={2}>
          <Text color="white" fontWeight={700} fontSize={18} mb={3}>
            {currentIndex + 1}. {step.question}
          </Text>
          <RadioGroup
            value={answer}
            onChange={(val) => {
              setAnswer(val);
            }}
          >
            <Stack>
              {map(step.answers, (val, idx) => {
                return (
                  <Box key={idx} bgColor="yelow">
                    <Radio value={(idx + 1).toString()}>
                      <Text key={val} color="white" fontSize={16}>
                        {val}
                      </Text>
                    </Radio>
                  </Box>
                );
              })}
            </Stack>
          </RadioGroup>
        </Box>
        <Button
          colorScheme="primary"
          isDisabled={!answer}
          onClick={() => {
            if (answer === step.correctAnswer && currentIndex < questions.length - 1) {
              setScore((old) => old + Number(step.point));
            }

            if (currentIndex < questions.length - 1) {
              setCurrentIndex(currentIndex + 1);
              setAnswer('');
            } else {
              toast.success(`Selamat kamu berhasil menjawab semua pertanya, score kamu ${score}`);
              setMateri((prev: any) => prev + 1);
            }
          }}
        >
          Selanjutnya
        </Button>
      </>
    ) : null;
  };

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
    </Flex>
  );
};

export default MaterialQuestionQuizPage;
