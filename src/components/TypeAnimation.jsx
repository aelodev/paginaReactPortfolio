import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import React from 'react';

const TypeAnimation = ({ children, delay }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReversing, setIsReversing] = useState(false);

  const allChildren = React.Children.toArray(children);

  useEffect(() => {
    console.log('Children Prop:', children);
    console.log('Current Index:', currentIndex);
    console.log('Is Reversing:', isReversing);
    console.log('All Children:', allChildren);

    const timeout = setTimeout(() => {
      if (!isReversing) {
        if (currentIndex < allChildren.length) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setIsReversing(true);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsReversing(false);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, isReversing, delay, allChildren]);

  return (
    <span>
      {allChildren.slice(0, currentIndex)}
    </span>
  );
};

TypeAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number.isRequired,
};

export default TypeAnimation;