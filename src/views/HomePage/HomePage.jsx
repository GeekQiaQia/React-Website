import React from 'react'
// nodejs library that concatenates classes
//import classNames from 'classnames'

// @material-ui/core components


// @material-ui/icons

// core components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Parallax from "../../components/Parallax/Parallax.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks";
//import GridList from "../../components/Grid/GridList";
//import Card from '../../components/Card/Card'
import MyTab from '../../components/MyTab/MyTab'



// define class components ;



class HomePage extends React.Component{

  constructor(props){
    super(props);
    this.state={

    };
  }
  render(){

    const { classes, ...rest } = this.props;
    return (
      <React.Fragment>
        <div style={{position:'relative'}}>
        <Header color="transparent"
                brand="恰恰在这里"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                  height:100,
                  color:'white'
                }}
                {...rest}
        >
        </Header>
        <Parallax small filter image={require('../../assets/img/homePage-bg.jpg')}/>
        </div>
          <div style={{position:'relative'}}>
           <MyTab/>
         </div>
        <div style={{position:'relative'}}>
          <Footer></Footer>
        </div>

      </React.Fragment>
    )
  }
}

export default HomePage
