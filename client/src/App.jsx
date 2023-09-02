import styles from "./styles.module.css";
import speaking from "./assets/speaking.png";
import { useState } from "react";

function App() {
  const [wordDescription, setWordDescription] = useState("")
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted:", wordDescription)
    return
  }
  return (
    <main className={styles.main}>
      <img src={speaking} alt="" className="styles.icon" />
      <h3>Generate search with AI</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query-description"
          placeholder="describe word"
          onChange={(e)=> {
            setWordDescription(e.target.value)
          }}
        />
        <input 
          type="submit"
          value="describe your word"
          />
      </form>
    </main>
  );
}

export default App;
