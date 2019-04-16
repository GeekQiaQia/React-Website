import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import FavoriteIcon from '@material-ui/icons/Favorite';

import ThumbUp from '@material-ui/icons/ThumbUp';
import RestoreIcon from '@material-ui/icons/Restore';
import Typography from '@material-ui/core/Typography';
import GridList from "../Grid/GridList";

import SvgIcon from '@material-ui/core/SvgIcon'

function LaptopIcon(props){
  return (
    <SvgIcon {...props}>
      <path fill="#000000" d="M20,15H4V5H20M14,18H10V17H14M22,18V3H2V18H0V20H24V18H22Z" />
    </SvgIcon>
  )
}
function CameraIcon(props){
  return (
    <SvgIcon {...props}>
      <path fill="#000000" d="M13.73,15L9.83,21.76C10.53,21.91 11.25,22 12,22C14.4,22 16.6,21.15 18.32,19.75L14.66,13.4M2.46,15C3.38,17.92 5.61,20.26 8.45,21.34L12.12,15M8.54,12L4.64,5.25C3,7 2,9.39 2,12C2,12.68 2.07,13.35 2.2,14H9.69M21.8,10H14.31L14.6,10.5L19.36,18.75C21,16.97 22,14.6 22,12C22,11.31 21.93,10.64 21.8,10M21.54,9C20.62,6.07 18.39,3.74 15.55,2.66L11.88,9M9.4,10.5L14.17,2.24C13.47,2.09 12.75,2 12,2C9.6,2 7.4,2.84 5.68,4.25L9.34,10.6L9.4,10.5Z" />
    </SvgIcon>
  )
}

function Books(props){
  return (
    <SvgIcon {...props}>
      <path fill="#000000" d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.5 6.5,20.5C8.45,20.5 10.55,20.9 12,22C13.35,21.15 15.8,20.5 17.5,20.5C19.15,20.5 20.85,20.81 22.25,21.56C22.35,21.61 22.4,21.59 22.5,21.59C22.75,21.59 23,21.34 23,21.09V6.5C22.4,6.05 21.75,5.75 21,5.5V7.5L21,13V19C19.9,18.65 18.7,18.5 17.5,18.5C15.8,18.5 13.35,19.15 12,20V13L12,8.5V6.5C10.55,5.4 8.45,5 6.5,5V5Z" />
    </SvgIcon>
  )
}

function Movies(props){
  return (
    <SvgIcon {...props}>
      <path fill="#000000" d="M18,4L20,8H17L15,4H13L15,8H12L10,4H8L10,8H7L5,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V4H18Z" />
    </SvgIcon>
  )
}
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}





TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabsStyle:{
    justifyContent:'center'
  }
});

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root} >
        <AppBar position="static" color="default" >
         <div  style={{ display:'flex', justifyContent:'center'}}>
           <Tabs
             value={value}
             onChange={this.handleChange}
             variant="scrollable"
             scrollButtons="on"
             indicatorColor="primary"
             textColor="primary"

           >
             <Tab label="最新推送" icon={<RestoreIcon />} />
             <Tab label="最受欢迎" icon={<FavoriteIcon />} />
             <Tab label="点赞文章" icon={<ThumbUp />} />
             <Tab label="计算机" icon={<LaptopIcon />} />
             <Tab label="摄影分享" icon={<CameraIcon />} />
             <Tab label="文学随笔" icon={<Books />} />
             <Tab label="影视分享" icon={<Movies />} />
           </Tabs>
         </div>
        </AppBar>
        {value === 0 && <TabContainer> <GridList/></TabContainer>}
        {value === 1 && <TabContainer> <GridList/></TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);
