import Counter from './Counter';
import './styles.css';

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
        positionCount="top"
      /> */}

      <Counter>
        <Counter.Label>My super flexible counter </Counter.Label>
        <Counter.Decrease icon='-' />
        <Counter.Count />
        <Counter.Increase icon='+' />
      </Counter>

      <br />
      <br />

      <Counter>
        <Counter.Label>2nd super flexible counter </Counter.Label>
        <Counter.Decrease icon='◀️' />
        <Counter.Count />
        <Counter.Increase icon='▶️' />
      </Counter>
    </div>
  );
}

// compount comp
// 1. is set of related components
// 2. that together acheive common and usefull task
// 3. it make super reuseable
// 4. is same as select tag
