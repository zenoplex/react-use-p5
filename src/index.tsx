import * as React from 'react';
import p5 from 'p5';

export const useP5 = (
  sketch: (sketch: p5) => void,
): [(node: HTMLElement | null) => void, p5 | null] => {
  const p5Ref = React.useRef<p5 | null>(null);
  const canvasParentRef = React.useRef<HTMLElement | null>(null);
  const setCanvasParentRef = React.useCallback(
    (node: HTMLElement | null) => {
      if (node) {
        // eslint-disable-next-line new-cap
        p5Ref.current = new p5(sketch, node);
      } else {
        // when component unmounts node is null
        if (p5Ref.current) p5Ref.current.remove();
      }
      canvasParentRef.current = node;
    },
    [sketch],
  );

  return [setCanvasParentRef, p5Ref.current];
};
