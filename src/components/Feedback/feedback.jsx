import { useState } from "react";
import { Button } from "components/buttons/buttons";
import { Statistic } from "components/Statistics/statistics";
import { Section } from "components/Section/section";
import { Notification } from "components/Statistics/Notification";

export const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const { good, neutral, bad } = state;

  const handleChange = (event) => {
    const name = event.target.name;
    setState((prevState) => ({
      ...prevState,
      [name]: prevState[name] + 1
    }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() ? Math.round((good / countTotalFeedback()) * 100) : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <Button handleChange={handleChange} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistic
            onTotal={countTotalFeedback}
            onPositivefeednack={countPositiveFeedbackPercentage}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        ) : (
          <Notification message={"There is no feedback"} />
        )}
      </Section>
    </>
  );
};
