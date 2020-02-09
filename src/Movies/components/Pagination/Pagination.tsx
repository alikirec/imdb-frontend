import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { DefaultTheme, withTheme } from 'styled-components';

import StylingContainer from './StylingContainer';
import { defaultPaginationProps, getPaginationProps, PaginationProps } from './utils';

interface Props {
  currentPage: number;
  theme: DefaultTheme;
  totalPages: number;
  onPageChange({ selected }: { selected: number }): void;
}

const Pagination: React.FunctionComponent<Props> = (props) => {
  const [paginationProps, setPaginationProps] = useState<PaginationProps>(defaultPaginationProps);

  useEffect(() => {
    setPaginationProps(getPaginationProps(props.theme));
    const resizeListener = () => {
      setPaginationProps(getPaginationProps(props.theme));
    };
    window.addEventListener('resize', resizeListener);

    return (): void => {
      console.log('Removing listener');
      window.removeEventListener('resize', resizeListener);
    };
  }, [props.theme]);

  return (
    <StylingContainer>
      <ReactPaginate
        activeClassName='active'
        breakLabel='...'
        disableInitialCallback
        forcePage={props.currentPage - 1}
        marginPagesDisplayed={paginationProps.marginPagesDisplayed}
        nextLabel='&rarr;'
        pageCount={props.totalPages}
        pageRangeDisplayed={paginationProps.pageRangeDisplayed}
        previousLabel='&larr;'
        onPageChange={props.onPageChange}
      />
    </StylingContainer>
  );
};

export default withTheme(Pagination);
