import styles from "./App.module.css";
import Form from "./component/Form";
// import logo from "logo.svg";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}></div>

        <div className={styles.overlay}></div>
      </div>
      <div className={styles.form}>
        <Form />
      </div>
    </div>
  );
}

export default App;
