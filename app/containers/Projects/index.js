import * as React from 'react';
import styles from './style.scss';
import pic2 from '../../img/headerimg.png';

const Projects = props => {
  const postReason = props.reason ? <div className={styles.reason}>{props.reason}</div> : null;
  const checkIcon = props.icon ? (
    <i style={{ color: '#09ac41', marginRight: '5px' }} className={props.icon}>
      {' '}
    </i>
  ) : null;
  const thumbnail = props.thumbnail ? (
    <div className={styles.thumbnail}>
      <img src={props.thumbnail} alt="project" />
      <i className="fa fa-play-circle" style={{ color: 'black', backgroundColor: 'white' }} />
    </div>
  ) : (
    <div className={styles.thumbnail} style={{ backgroundColor: 'grey' }}>
      <div className={styles.nothingBorder}>
        <i className="fa fa-ellipsis-h" />
      </div>
    </div>
  );
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.title}>
        <p>
          <b>Project</b>: {props.title}
        </p>
        <div style={{ color: props.color }}>
          {checkIcon} {props.status}
        </div>
      </div>
      <div className={styles.secondContainer}>
        {thumbnail}
        <div className={styles.authorName}>
          <p>
            <img className={styles.imageProfile} src={pic2} />
            John Marshall
          </p>
          <p>November 30 at </p>
        </div>
        <div className={styles.hours}>
          <p>Program Start</p>
          <p>Jun 25 (8 weeks)</p>
        </div>
        <div className={styles.course}>
          <p>Course </p>
          <p>Cinematography 101</p>
        </div>
        <div className={styles.projectDate}>
          <p>Project Date </p>
          <p>Jan 02</p>
        </div>
        <div className={styles.review}>
          <p>Review due </p>
          <p>Jan 05</p>
        </div>
        <div className={styles.comments}>
          <p>Comments</p>
          <p>
            <i className="fa fa-comment" />0
          </p>
        </div>
      </div>
      {postReason}
    </div>
  );
};
export default Projects;
