// This function takes in componnets for rendering them out
// essentially a list steps = list of react element

import { useState } from "react";

export function useMultiStepForm(steps) {
  // Tracking which step are we currently on
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // function for moving forwards or backwards
  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }
  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }
  function goTo(index) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    // our current step
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
}
