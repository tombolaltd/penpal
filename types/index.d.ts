export interface IConnectionObject {
    promise: Promise<any>;
    destroy: () => {};
}

export interface IChildConnectionObject extends IConnectionObject {
    iframe: HTMLElement;
}

export type ConnectionMethods<T> = {
    [P in keyof T]: () => Promise<any>;
};

export type ERR_CONNECTION_DESTROYED = 'ConnectionDestroyed';
export type ERR_CONNECTION_TIMEOUT = 'ConnectionTimeout';
export type ERR_NOT_IN_IFRAME = 'NotInIframe';
export type ERR_IFRAME_ALREADY_ATTACHED_TO_DOM = 'IframeAlreadyAttachedToDom';

export interface IConnectionOptions {
    methods?: ConnectionMethods<{}>;
    timeout?: number;
}

export interface IChildConnectionOptions extends IConnectionOptions {
    url: string;
    appendTo?: HTMLElement;
    iframe?: HTMLIFrameElement;
}

export interface IParentConnectionOptions extends IConnectionOptions {
    parentOrigin?: string;
}

export interface PenpalStatic {
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
