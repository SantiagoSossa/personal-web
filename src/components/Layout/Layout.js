import React, {Component} from 'react';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Proyects from '../Proyects/Proyects';
import Footer from '../Footer/Footer';

class Layout extends Component{

    state = {
        colorsLight: {
            text: '#4D4C4C',
            bg1: '#F7F2F2',
            bg2: '#E6E2E2',
            bg3: '#C1C1C1',
            shadow: '#c0c0c0'
        },
        colorsDark : {
            text : '#F7F2F2',
            bg1 : '#4D4C4C',
            bg2 : '#353535',
            bg3 : '#252525',
            shadow: '#353535'
        },
        darkMode: false
    }

    toggleLightDarkMode = () => {
        const lightMode = !this.state.darkMode;
        this.setState({darkMode : lightMode});
    }
  
    render() {
        let colorMode = this.state.colorsLight;
        if(this.state.darkMode){
            colorMode = this.state.colorsDark;
        }
        return (
            <div>
                <Header 
                    colors={colorMode} 
                    clicked={this.toggleLightDarkMode}
                    darkMode={this.state.darkMode}/>
                <Intro colors={colorMode}/>
                <Proyects colors={colorMode}/>
                <About colors={colorMode}/>
                <Footer colors={colorMode}/>
            </div>
        );
    }
}

export default Layout;


    // --color-text: #4D4C4C;
  //   --color-bg-1: #F7F2F2;
  //   --color-bg-2: #E6E2E2;
  //   --color-bg-3: #C1C1C1;

  //   --color-text-d: #F7F2F2;
  //   --color-bg-1-d: #4D4C4C;
  //   --color-bg-2-d: #353535;
  //   --color-bg-3-d: #C1C1C1;