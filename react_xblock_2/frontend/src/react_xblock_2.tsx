////////////////////////////////////////////////////////////////////////////////
// Remember: changes in this file will only take effect when you run          //
// npm run build       or      npm run watch                                  //
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { BoundRuntime, type JQueryWrappedDiv, type XBlockRuntime } from './xblock-utils';
import frMessages from '../lang/compiled/fr.json';

const messages = {
  // List all your supported languages here, after running 'npm run i18n:extract',
  // editing the messages in the 'lang' folder, and running 'npm run i18n:compile'
  fr: frMessages,
}

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
    const newData = await runtime.postHandler<IncrementResponse>('increment_count');
    setCount(newData.count);
  }, [runtime]);

  // Note: for more sophisticated fetch/cache/mutate behavior, use @tanstack/react-query to manage your data.

  return <div className="react_xblock_2_block">
      <h1>ReactXBlock8</h1>
      {/* Below is the correct internationalized way to render the following simple paragraph:
        *   <p>The button has been clicked <span className="count">{count}</span> times.</p>
        */}
      <p>
        <FormattedMessage
          description="Sentence describing how many times the button has been clicked."
          defaultMessage="{count, plural,
            one {The button has been clicked <bold>1</bold> time.}
            other {The button has been clicked <bold>{count, number}</bold> times.}
          }"
          values={{ count, bold: text => <span className="count">{text}</span> }}
        />
      </p>
      <button className="btn btn-primary" onClick={increment}>+ <FormattedMessage defaultMessage="Increment" /></button>
    </div>
}

function initStudentView(runtime: XBlockRuntime, container: HTMLDivElement | JQueryWrappedDiv, initData: InitData) {
  if ('jquery' in container) {
    // Fix inconsistent parameter typing:
    container = container[0];
  }
  /** Get the language selected by the user, e.g. 'en' or 'fr' */
  const languageCode = document.body.parentElement!.lang;
  const root = ReactDOM.createRoot(container!);
  root.render(
    <IntlProvider messages={(messages as any)[languageCode]} locale={languageCode} defaultLocale="en">
      <StudentView runtime={new BoundRuntime(runtime, container)} initialCount={initData.count} />
    </IntlProvider>
  );
}

// We need to add our init function to the global (window) namespace, without conflicts:
(globalThis as any).initReactXBlock8StudentView = initStudentView;
