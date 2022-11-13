import styles from "./App.module.css";
import Form from "./component/Form";
import logo from "./assets/FSMIrJCWQAQTYgt.jpg";
// import logo from "logo.svg";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <div className={styles.title}>
            {/* <h1>Programa de</h1>
            <h2>Estágio</h2>
            <h3>2023</h3> */}
            <img src={logo} alt="" />
          </div>
        </div>

        <div className={styles.overlay}></div>
      </div>
      <div className={styles.form}>
        <Form />
      </div>
    </div>
  );
}

export default App;
