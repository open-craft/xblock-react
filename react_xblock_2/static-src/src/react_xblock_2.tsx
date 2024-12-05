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

interface XBlockRuntime {
  handlerUrl(element: HTMLDivElement, handlerName: string, suffix?: string, query?: string): string;
  notify(name: string, data: Record<string, any>): void;
  /** @deprecated XBlocks should not use children */
  children(element: HTMLDivElement): string[];

  // On Studio runtime only:
  /** Listen to a Studio event */
  listenTo?(eventName: string, callback: () => void): void;
  /** Refresh the view for the xblock represented by the specified element. */
  refreshXBlock(element: HTMLDivElement): void;
}

/**
 * Sometimes the XBlock API returns an HTMLElement wrapped in jQuery.
 * We want to discourage use of jQuery, so this is a minimal type definition
 * that just provides enough typing for you to identify and unwrap such
 * variables. See https://youmightnotneedjquery.com/
 */
interface JQueryWrappedDiv {
  "0": HTMLDivElement;
  /** The jQuery version number */
  jquery: string;
}

interface Props {
  rootElement: HTMLDivElement;
  runtime: XBlockRuntime;
}

const StudentView: React.FC<Props> = () => {
  return <div>
      <Button>Testing</Button>
    </div>
}

function initStudentView(runtime: XBlockRuntime, container: HTMLDivElement | JQueryWrappedDiv) {
  if ('jquery' in container) {
    // Fix inconsistent parameter typing:
    container = container[0];
  }
  // Paragon doesn't yet support React 18:
  //   const root = createRoot(container!);
  //   root.render(<StudentView runtime={runtime} rootElement={container} />);
  // So use the deprecated React 17 API:
  ReactDOM.render(<StudentView runtime={runtime} rootElement={container} />, container);
}

// Thanks to rollup's output.name setting, this will become 'initReactXBlock8StudentView' in the global scope
export default initStudentView;
