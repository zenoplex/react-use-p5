import React from 'react'
import { useP5 } from 'react-use-p5';
import { clock } from './sketches/clock';
import { interaction1 } from './sketches/interaction1';

const Component = ({ sketch }) => {
  const [setRef] = useP5(sketch);
  return <div ref={setRef}></div>
}

const App = () => {
  const [sketch, setSketch] = React.useState('clock');
  const [isVisible, setIsVisible] = React.useState(true);
  const onVisibleClick = React.useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);
  const onToggleSketchClick = React.useCallback(() => {
    setSketch(sketch === 'clock' ? 'interaction1' : 'clock');
  },[sketch])

  return (
    <div>
      <button onClick={onVisibleClick}>toggle visiblity</button>
      <button onClick={onToggleSketchClick}>toggle sketch</button>
      {isVisible ? <Component sketch={sketch === 'clock' ? clock : interaction1} />: null}
    </div>
  );
}

export default App
