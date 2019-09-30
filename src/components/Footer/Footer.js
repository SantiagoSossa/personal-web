import React, {Component} from 'react';
import classes from './Footer.module.css';


class Footer extends Component{
    render() {
        const style = {
            color: this.props.colors.text,
            background: this.props.colors.bg3
        }
        return(
            <div className={classes.Footer} style={style}>
                <p>Made By Santiago Sossa</p>
            </div>
        )
    }
};

export default Footer;