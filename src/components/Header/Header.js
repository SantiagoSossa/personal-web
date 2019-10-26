import React, {Component} from 'react';
import Logo from './Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';
import classes from './Header.module.css';

class Header extends Component {
    render() {
        const style = {
            color: this.props.colors.text,
            background: `linear-gradient(90deg, ${this.props.colors.bg1} 50%,  ${this.props.colors.bg2} 50%)`
        }
    
        return(
            <div className={classes.Header} style={style}>
                <Logo><strong>Santiago</strong> Sossa</Logo>
                <ul>
                    <li>
                    <NavigationItems 
                    className={classes.NavigationItems}
                    colors={this.props.colors} 
                    darkMode={this.props.darkMode} 
                    clicked={this.props.clicked}/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;