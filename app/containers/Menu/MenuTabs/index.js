import * as React from 'react';
import styles from './style.scss';



const MenuTabs = () => (
    <div >
            <div className={styles.tabsContainer}>
                <div className={styles.projectsRew}>
                    <p>Projects for review</p>
                </div>
                <div className={styles.upcoming}>
                    <p>Upcoming LMS</p>
                </div>
                <div className={styles.syllabus}>
                    <p>Syllabus</p>
                </div>
                <div className={styles.myVid}>
                    <p>My Videos</p>
                </div>
        </div>
    </div>
)
export default MenuTabs;