////////////////////////////////////////////////////////////////////////////////
// Remember: changes in this file will only take effect when you run          //
// npm run build       or      npm run watch_studio                           //
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

interface Fields {
  display_name: string;
  count: number;
}

/** Data passed from our student_view render method when it calls frag.initialize_js() */
interface InitData {
  fields: Fields;
}

interface Props {
  runtime: BoundRuntime;
  fields: Fields;
}

const StudioView: React.FC<Props> = ({ runtime, fields }) => {

  const [displayName, setDisplayName] = React.useState<string>(fields.display_name);
  const displayNameId = React.useId();

  const saveChanges = React.useCallback(async () => {
    // Show that we're starting to save changes:
    await runtime.studioSaveAndClose(
      runtime.postHandler('save_authored_data', {
        display_name: displayName,
      })
    );
  }, [runtime, displayName]);

  return <div className="react_xblock_2_block">
    <label htmlFor={displayNameId} style={{display: 'block'}}>Display name</label>
    <input
      id={displayNameId}
      type="text"
      value={displayName}
      onChange={(event) => { setDisplayName(event.target.value) }}
    />
    <br />
    <button onClick={saveChanges}>Save</button>
  </div>;
}

function initStudioView(runtime: XBlockRuntime, container: HTMLDivElement | JQueryWrappedDiv, initData: InitData) {
  if ('jquery' in container) {
    // Fix inconsistent parameter typing:
    container = container[0];
  }
  /** Get the language selected by the user, e.g. 'en' or 'fr' */
  const languageCode = document.body.parentElement!.lang;
  const root = ReactDOM.createRoot(container!);
  root.render(
    <IntlProvider messages={(messages as any)[languageCode]} locale={languageCode} defaultLocale="en">
      <StudioView runtime={new BoundRuntime(runtime, container)} fields={initData.fields} />
    </IntlProvider>
  );
}

// We need to add our init function to the global (window) namespace, without conflicts:
(globalThis as any).initReactXBlock8StudioView = initStudioView;
