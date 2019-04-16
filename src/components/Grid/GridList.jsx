import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import image1 from '../../assets/img/examples/studio-1.jpg';
import image2 from '../../assets/img/examples/studio-2.jpg';
import image3 from '../../assets/img/examples/studio-3.jpg';
import image4 from '../../assets/img/examples/studio-4.jpg';
import image5 from '../../assets/img/examples/studio-5.jpg';

const tileData = [

  {
    img: image1,
    title: 'Image',
    author: 'author',
  },
  {
    img: image2,
    title: 'Image',
    author: 'author',
  },  {
    img: image3,
    title: 'Image',
    author: 'author',
  },
  {
    img: image4,
    title: 'Image',
    author: 'author',
  },
  {
    img: image5,
    title: 'Image',
    author: 'author',
  },
 ]

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    alignItems:'flex-end',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "80vw",
    height: "60vh"

  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img:{
    width: "100%",
    height: '100%',
    position: 'relative'
  },
  listStyle:{
     width:"33%"
  }
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">最新推送</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img} style={{width:'30%',marginLeft:'10px',marginTop:'10px'}}>
            <img src={tile.img} alt={tile.title} className={classes.img}/>
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
