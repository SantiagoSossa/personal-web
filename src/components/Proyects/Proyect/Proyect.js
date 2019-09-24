import React from 'react';
import classes from './Proyect.module.css';
import proyectTest from '../../../assets/images/ProyectTest.png';

const Proyect = (props) => (
    <div className={classes.Proyect}>
        <div className={classes.Card}>
            <div className={[classes.Face,classes.Face1].join(" ")}>
                <div className={classes.Content}>
                    <img src={proyectTest} alt="Test"/>
                    <h3>Design</h3>
                </div>
            </div>
            <div className={[classes.Face,classes.Face2].join(" ")}>
                <div className={classes.Content}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                        nimi dolorem officiis blanditiis eius eos molestias</p>
                    <a href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
);

export default Proyect;