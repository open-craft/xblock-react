// Neither the XBlock library nor SDK nor edx-platform provides any type
// information so we need to include it.
//
// 🛑 As an XBlock author, you probably should NOT edit this file. 🛑

export interface XBlockRuntime {
  handlerUrl(element: HTMLDivElement, handlerName: string, suffix?: string, query?: string): string;
  /** @deprecated XBlocks should not use children */
  children(element: HTMLDivElement): string[];

  // On Studio runtime only:
  /** Listen to a Studio event */
  listenTo?(eventName: string, callback: () => void): void;
  /** Refresh the view for the xblock represented by the specified element. */
  refreshXBlock(element: HTMLDivElement): void;
  /** Notify the Studio runtime of a client-side event */
  notify(name: 'save', data: { state: 'start', element: HTMLDivElement, message: string }): void;
  notify(name: 'save', data: { state: 'end', element: HTMLDivElement }): void;
  notify(name: 'error', data: { title: string, message: string }): void;
  notify(name: 'cancel', data: Record<never, never>): void;
  notify(name: 'modal-shown', data: any): void;
}

/**
 * Sometimes the XBlock API returns an HTMLElement wrapped in jQuery.
 * We want to discourage use of jQuery, so this is a minimal type definition
 * that just provides enough typing for you to identify and unwrap such
 * variables. See https://youmightnotneedjquery.com/
 */
export interface JQueryWrappedDiv {
  "0": HTMLDivElement;
  /** The jQuery version number */
  jquery: string;
}

export function getAjaxHeaders(): Record<string, any> {
  const csrfToken = document.cookie.split("; ").find((row) => row.startsWith("csrftoken="))?.split("=")[1];
  return {'X-CSRFToken': csrfToken};
}
