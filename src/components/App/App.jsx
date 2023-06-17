import React, { Component } from "react";
import css from './App.module.css';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good }) =>
    Math.round(good * 100 / this.countTotalFeedback(this.state));
  render() {
    const{good, neutral, bad}= this.state
    const options = Object.keys(this.state)
    
    return (
      <div className={css.container}>
         <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          </Section>
            <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback({ good, neutral, bad })}
            positivePercentage={this.countPositiveFeedbackPercentage({good})}
          />
            </Section>
        </div>
    );
  }
};
