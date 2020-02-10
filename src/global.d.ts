declare module 'StoreTypes' {
  import { ThunkAction } from 'redux-thunk';
  import { StateType, ActionType } from 'typesafe-actions';
  import { Path } from 'history';

  // https://github.com/supasate/connected-react-router/issues/286
  import { CallHistoryMethodAction, LocationState } from 'connected-react-router';

  type Push = (
    path: Path,
    state?: LocationState
  ) => CallHistoryMethodAction<[Path, LocationState?]>;
  interface RouterActions {
    push: Push;
  }

  export type Store = StateType<typeof import('./store/store').default>;
  export type RootAction =
    | ActionType<typeof import('./store/rootAction').default>
    | ActionType<RouterActions>;
  export type RootState = StateType<ReturnType<typeof import('./store/rootReducer').default>>;
  export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootAction>;
  export type StateSelector<T> = (state: RootState) => T;
}

declare module 'react-paginate' {
  import React from 'react';
  export interface ReactPaginateProps {
    pageCount: number;
    pageRangeDisplayed: number;
    marginPagesDisplayed: number;
    previousLabel?: JSX.Element | string;
    nextLabel?: JSX.Element | string;
    breakLabel?: JSX.Element | string;
    breakClassName?: string;
    breakLinkClassName?: string;
    onPageChange?: ({ selected: number }) => void;
    initialPage?: number;
    forcePage?: number;
    disableInitialCallback?: boolean;
    containerClassName?: string;
    subContainerClassName?: string;
    pageClassName?: string;
    pageLinkClassName?: string;
    activeClassName?: string;
    activeLinkClassName?: string;
    previousClassName?: string;
    nextClassName?: string;
    previousLinkClassName?: string;
    nextLinkClassName?: string;
    disabledClassName?: string;
    hrefBuilder?: (pageIndex: number) => string;
    extraAriaContext?: string;
    ariaLabelBuilder?: (pageIndex: number) => string;
  }

  class ReactPaginate extends React.Component<ReactPaginateProps, {}> {}

  export default ReactPaginate;
}

declare module 'react-intl-formatted-duration';
declare module 'react-notifications-component' {
  import React from 'react';
  type Store = {
    addNotification(notification: any): void;
  };

  export const store: Store;
  export default class ReactNotification extends React.Component<{}, {}> {};
}
