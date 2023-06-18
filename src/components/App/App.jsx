import { useState } from 'react';
import css from './App.module.css';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';

export const App = () => {
 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const names = Object.keys({ good, neutral, bad })
  const total = good + neutral + bad;
  const positivePercentage = Math.round(good * 100 / total);

  const onLeaveFeedback = event => {
    switch (event) {
      case 'good':
        setGood(prev => prev + 1)
        break;
      case 'neutral':
        setNeutral(prev => prev + 1)
        break;
      case 'bad':
        setBad(prev => prev + 1)
        break;
      default:
        break;
    }
  };
    return (
      <div className={css.container}>
         <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={names}
            onLeaveFeedback={onLeaveFeedback}
          />
          </Section>
            <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
            </Section>
        </div>
    );
 
};
