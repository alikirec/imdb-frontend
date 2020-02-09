import React from 'react';

import Page from '../../UiElements/Layout/Page';
import { Grid, GridItem } from './Grid';
import { WatchListProps } from '../types';
import WatchListCard from './Cards/WatchListCard';

const WatchList: React.FunctionComponent<WatchListProps> = (props) => (
  <Page backgroundImage='http://www.dominioncinema.co.uk/wp-content/uploads/2016/11/Dominion-511-of-21.jpg'>
    <Grid my={7}>
      {props.watchList.map((item) => (
        <GridItem key={item.id}>
          <WatchListCard item={item} onClick={props.removeFromWatchList} />
        </GridItem>
      ))}
    </Grid>
  </Page>
);

export default WatchList;
