import './Info.css';
import styles from './info.modules.css';

console.log(styles);

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info components</h1>
      <button className="my-button">Click me!</button>
    </div>
  );
}

export default Info;
