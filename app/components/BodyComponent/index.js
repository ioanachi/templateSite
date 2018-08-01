import * as React from 'react';
import Projects from '../../containers/Projects';
import Sidebar from '../../containers/Sidebar';
import Menu from '../../containers/Menu';
import styles from './style.scss';
import photo from '../../img/largeimg.jpg';
import pic1 from '../../img/thumbnail.png';

const BodyComponent = () => (
    <div className={`row ${styles.bodyComp}`}>
        <div className='col-sm-12 '>
            <div className='col-sm-9'>
                <Menu />
                <Projects title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' color="rgb(28, 167, 0)" status="Reviewd" reason='' thumbnail={pic1} icon='' pic={photo} time=''  />
                <Projects title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' color="rgb(175, 55, 48)" status="Rejected" reason="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " thumbnail={pic1} icon='' time='' />
                <Projects title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' color="#fff" status="Ready to review" reason="" thumbnail='' icon="fa fa-check" time='' />
                <Projects title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' color="#fff" status="" reason="" thumbnail={pic1} icon='' time='' />
                <Projects title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit eiusmod dolor sit amet, consectetur adipiscing elit doloreiusmod dolor sit amet, consectetur adipiscing elit dolor' color="rgb(28, 167, 0)" status="" reason='' thumbnail={pic1} icon='' time='' />
            </div>
            <div className='col-sm-3'>
                <Sidebar />
            </div>
        </div>

    </div>
)
export default BodyComponent;      