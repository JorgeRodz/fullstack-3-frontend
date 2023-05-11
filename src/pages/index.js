import { Button } from "@mui/material";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home({ name, summary }) {
  const router = useRouter();

  return (
    <section className={styles.Home}>
      <h1 className={styles.Name}>{name}</h1>
      <div className={styles.Summary}>
        <p>{summary}</p>
      </div>
      <div>
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push("/projects")}
        >
          Projects
        </Button>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      name: "Jorge Alberto",
      summary:
        "I'm a software engineer, and I love to build things. I'm currently working at Vercel as a Software Engineer. I'm also a maintainer of Next.js. I'm passionate about open-source, and I love to contribute to OSS. I'm also a writer, and I love to write about software engineering, career, and life. I'm also a speaker, and I love to speak about software engineering, career, and life.",
    },
  };
}
