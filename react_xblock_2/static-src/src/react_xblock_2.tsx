////////////////////////////////////////////////////////////////////////////////
// Remember: changes in this file will only take effect when you run          //
// npm run build       or      npm run watch                                  //
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
// 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑
// 🛑 WARNING: Paragon will NOT work at the moment due to including .scss,    🛑
// 🛑 .svg, and .png imports in its "dist" build :/ You need to either modify 🛑
// 🛑 it in node_modules/@openedx/paragon/dist/index.js (comment out every    🛑
// 🛑 line below "Things that don't have types"), or don't use Paragon.       🛑
// 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑
import { Button } from '@openedx/paragon';
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
      <Button onClick={increment}>+ Increment</Button>
    </div>
}

function initStudentView(runtime: XBlockRuntime, container: HTMLDivElement | JQueryWrappedDiv, initData: InitData) {
  if ('jquery' in container) {
    // Fix inconsistent parameter typing:
    container = container[0];
  }
  // Paragon doesn't yet support React 18:
  //   const root = createRoot(container!);
  //   root.render(<StudentView runtime={new BoundRuntime(runtime, container)} initialCount={initData.count} />);
  // So use the deprecated React 17 API:
  ReactDOM.render(
    <StudentView runtime={new BoundRuntime(runtime, container)} initialCount={initData.count} />,
    container
  );
}

// Thanks to rollup's output.name setting, this will become 'initReactXBlock8StudentView' in the global scope
export default initStudentView;
