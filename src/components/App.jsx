import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackForm, FeedbackTitle, StatsTitle } from './App.styled';

import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  console.log(good);
  const onGoodMark = () => {
    setGood(prevState => {
      return prevState + 1;
    });
  };
  const onNeutralMark = () => {
    setNeutral(prevState => {
      return prevState + 1;
    });
  };

  const onBadMark = () => {
    setBad(prevState => {
      return prevState + 1;
    });
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    let positiveValue = (good / countTotalFeedback()) * 100;
    return Math.round(positiveValue) || 0;
  };
  return (
    <FeedbackForm>
      <FeedbackTitle>Please leave feedback</FeedbackTitle>
      <FeedbackOptions
        onGoodMark={onGoodMark}
        onBadMark={onBadMark}
        onNeutralMark={onNeutralMark}
      />
      <StatsTitle>Statistics</StatsTitle>
      {countTotalFeedback() ? (
        <Statistics
          total={countTotalFeedback()}
          good={good}
          bad={bad}
          neutral={neutral}
          positiveValue={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification />
      )}
    </FeedbackForm>
  );
};
