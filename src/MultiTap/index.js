import React, {useRef} from 'react';
import {TapGestureHandler, State} from 'react-native-gesture-handler';

const MultiTap = ({
  children,
  onSingleTap = () => {},
  onDoubleTap = () => {},
}) => {
  let doubleTapRef = useRef();

  const _onSingleTap = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      onSingleTap();
    }
  };

  const _onDoubleTap = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      onDoubleTap();
    }
  };

  return (
    <TapGestureHandler
      onHandlerStateChange={_onSingleTap}
      waitFor={doubleTapRef}>
      <TapGestureHandler
        ref={doubleTapRef}
        onHandlerStateChange={_onDoubleTap}
        numberOfTaps={2}>
        {children}
      </TapGestureHandler>
    </TapGestureHandler>
  );
};

export default MultiTap;
