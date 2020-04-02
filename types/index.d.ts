interface IConnectionObject {
    promise: Promise<any>;
    destroy: () => {};
}

interface IChildConnectionObject extends IConnectionObject {
    iframe: HTMLElement;
}

type ConnectionMethods<T> = {
    [P in keyof T]: () => Promise<any>;
};

type ERR_CONNECTION_DESTROYED = 'ConnectionDestroyed';
type ERR_CONNECTION_TIMEOUT = 'ConnectionTimeout';
type ERR_NOT_IN_IFRAME = 'NotInIframe';
type ERR_IFRAME_ALREADY_ATTACHED_TO_DOM = 'IframeAlreadyAttachedToDom';

interface IConnectionOptions {
    methods?: ConnectionMethods<{}>;
    timeout?: number;
}

interface IChildConnectionOptions extends IConnectionOptions {
    url: string;
    appendTo?: HTMLElement;
    iframe?: HTMLIFrameElement;
}

interface IParentConnectionOptions extends IConnectionOptions {
    parentOrigin?: string;
}

interface PenpalStatic {
    connectToChild(options: IChildConnectionOptions): IChildConnectionObject;
    connectToParent(options?: IParentConnectionOptions): IConnectionObject;
    Promise: typeof Promise;
    debug: boolean;
    ERR_CONNECTION_DESTROYED: ERR_CONNECTION_DESTROYED;
    ERR_CONNECTION_TIMEOUT: ERR_CONNECTION_TIMEOUT;
    ERR_NOT_IN_IFRAME: ERR_NOT_IN_IFRAME;
    ERR_IFRAME_ALREADY_ATTACHED_TO_DOM: ERR_IFRAME_ALREADY_ATTACHED_TO_DOM;
}

declare const Penpal: PenpalStatic;
export default Penpal;
export const ERR_CONNECTION_DESTROYED: ERR_CONNECTION_DESTROYED;
export const ERR_CONNECTION_TIMEOUT: ERR_CONNECTION_TIMEOUT;
export const ERR_NOT_IN_IFRAME: ERR_NOT_IN_IFRAME;
export const ERR_IFRAME_ALREADY_ATTACHED_TO_DOM: ERR_IFRAME_ALREADY_ATTACHED_TO_DOM;
