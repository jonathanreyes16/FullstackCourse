import { Button } from "@mui/material";
import styles from "../styles/Home.module.css"
import Router from "next/router";

export default function Home({name, summary}) {
  return (
    <section className={styles.Home}>
      <h1 className={styles.Name}>{name}</h1>
      <div className={styles.Summary}>{summary}</div>
      <div>
        <Button
        variant="contained"
        size="Large"
        onClick={()=> Router.push("/projects")}
        >Projects</Button>
      </div>
    </section>
  )
}

export async function getStaticProps() {
  //get data from the api
  console.log("Running in the server");
  return{
    props: {
      name: "Jonathan Reyes",
      summary:
      "im a  full-stack developer with proficiency in both front-end and back-end development."
    },
  };
}