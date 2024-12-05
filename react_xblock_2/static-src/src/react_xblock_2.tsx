////////////////////////////////////////////////////////////////////////////////
// Remember: changes in this file will only take effect when you run          //
// npm run build       or      npm run watch                                  //
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BoundRuntime, type JQueryWrappedDiv, type XBlockRuntime } from './xblock-utils';

/** Data passed from our student_view render method when it calls frag.initialize_js() */
interface InitData {
  count: number;
}

interface Props {
  runtime: BoundRuntime;
  initialCount: number;
}

const StudentView: React.FC<Props> = ({ runtime, ...props }) => {
  const [count, setCount] = React.useState(props.initialCount);

  // Handlers:
  const increment = React.useCallback(async () => {
    interface IncrementResponse { count: number; }
    const newData = await runtime.postHandler<IncrementResponse>('increment_count', { hello: 'world' });
    setCount(newData.count);
  }, [runtime]);

  // Note: for more sophisticated fetch/cache/mutate behavior, use @tanstack/react-query to manage your data.

  return <div className="react_xblock_2_block">
      <p>ReactXBlock8: count is now <span className="count">{count}</span>.</p>
      <button className="btn btn-primary" onClick={increment}>+ Increment</button>
    </div>
}

function initStudentView(runtime: XBlockRuntime, container: HTMLDivElement | JQueryWrappedDiv, initData: InitData) {
  if ('jquery' in container) {
    // Fix inconsistent parameter typing:
    container = container[0];
  }
  const root = ReactDOM.createRoot(container!);
  root.render(<StudentView runtime={new BoundRuntime(runtime, container)} initialCount={initData.count} />);
}

// Thanks to rollup's output.name setting, this will become 'initReactXBlock8StudentView' in the global scope
export default initStudentView;
