import { DefaultTheme } from 'styled-components';
import { getBreakpointWidth } from '../../../UiElements/themeHelpers';

export interface PaginationProps {
  marginPagesDisplayed: number;
  pageRangeDisplayed: number;
}

export const defaultPaginationProps: PaginationProps = {
  marginPagesDisplayed: 2,
  pageRangeDisplayed: 5
};

export const getPaginationProps = (theme: DefaultTheme): PaginationProps => {
  if (window.outerWidth < getBreakpointWidth('sm')({ theme })) {
    return {
      marginPagesDisplayed: 1,
      pageRangeDisplayed: 2
    };
  }

  if (window.outerWidth < getBreakpointWidth('md')({ theme })) {
    return {
      marginPagesDisplayed: 2,
      pageRangeDisplayed: 3
    };
  }

  return defaultPaginationProps;
};
