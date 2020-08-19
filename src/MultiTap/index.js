import React, {useRef} from 'react';
import {TapGestureHandler, State} from 'react-native-gesture-handler';

const MultiTap = ({
  children,
  onSingleTap = () => {}, 
  onDoubleTap = () => {},
}) => {
  /*
    If no function is provided then an empty arrow function would be used
    for both single and double tap
  */

  /*
    useRef to get a ref to the TapGestureHandler which implements numberOfTaps = 2
    this helps in making sure that the first TapGestureHandler waits for a particular 
    amount of time before calling its onHandleStateChange
  */
  let doubleTapRef = useRef();

  const onSinglePress = (e) => {
    if (e.nativeEvent.state === State.ACTIVE) {
      onSingleTap();
    }
  };

  const onDoublePress = (e) => {
    if (e.nativeEvent.state === State.ACTIVE) {
      onDoubleTap();
    }
  };

  return (
    <TapGestureHandler
      onHandlerStateChange={onSinglePress}
      waitFor={doubleTapRef}>
      <TapGestureHandler
        ref={doubleTapRef}
        onHandlerStateChange={onDoublePress}
        numberOfTaps={2}>
        {children}
      </TapGestureHandler>
    </TapGestureHandler>
  );
};

export default MultiTap;
