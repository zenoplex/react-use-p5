import * as React from 'react';
import { render } from '@testing-library/react';
import { useP5 } from '../index';

describe('useP5', () => {
  const sketch = (p): void => {
    p.setup = (): void => {
      p.createCanvas(1000, 1000);
    };
  };

  const Component = (): JSX.Element => {
    const [ref] = useP5(sketch);
    return <div data-testid='wrapper' ref={ref} />;
  };

  const LazyComponent = (): JSX.Element => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      setIsLoading(false);
    }, []);

    const [ref] = useP5(sketch);

    return isLoading ? (
      <div>Loading</div>
    ) : (
      <div data-testid='wrapper' ref={ref} />
    );
  };

  it('should render canvas', () => {
    const { getByTestId } = render(<Component />);
    const wrapper = getByTestId('wrapper');
    const canvas = wrapper.querySelector('canvas.p5Canvas');
    expect(canvas).toBeDefined();
  });

  it('should lazy render canvas', () => {
    const { getByTestId } = render(<LazyComponent />);
    const wrapper = getByTestId('wrapper');
    const canvas = wrapper.querySelector('canvas.p5Canvas');
    expect(canvas).toBeDefined();
  });
});
