import React, {Component} from 'react';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';


class Footer extends Component{
    render() {
        const style = {
            color: this.props.colors.text,
            background: this.props.colors.bg3
        }
        const reactLogo = <FontAwesomeIcon icon={faReact} className={classes.Icon} />;
        return(
            <div className={classes.Footer} style={style}>
                <p>Made with {reactLogo} by Santiago Sossa</p>
            </div>
        )
    }
};

export default Footer;