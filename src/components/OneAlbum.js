import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import { FixedSizeList } from 'react-window';


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
  },
  others:{
    width: '100%',
    height: 400,
    backgroundColor: theme.palette.background.paper,
  },
  songs:{
    fontSize:13,
    marginRight:-13,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

function Songs(songs)  {
  const classes = useStyles();
  const row = ({ index, style}) => (
      <div style={style} className={classes.songs}>
         {index+1} - {songs[index]}
      </div>
    );
  return (
      <FixedSizeList
          height={150}
          width={282}
          itemSize={25}
          itemCount={songs.length}
      >
  {row}
</FixedSizeList>
    );
};

export default function RecipeReviewCard({allsongs}) {
  const classes = useStyles()
  let news = [];
  for (var index = 0; allsongs[index]; index++) {
    news.push(allsongs[index].title);
  }
  let list = Songs(news);

  return (
    <Card className={classes.root}>
      <CardContent align="justify">
        {list}
      </CardContent>
    </Card>
  );
}
