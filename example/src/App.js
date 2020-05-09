import React from 'react'
import { useP5 } from 'react-use-p5';
import { sketch } from './sketch';

const Component = () => {
  const [setRef] = useP5(sketch);
  return <div ref={setRef}></div>
}

const App = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const onClick = React.useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);


  return <div>{isVisible ? <Component />: null}
  <button onClick={onClick}>toggle</button>
  </div>
}

export default App
