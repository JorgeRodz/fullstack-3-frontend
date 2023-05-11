import { Button, Grid, Chip, Stack } from "@mui/material";
import PageDescription from "@/components/PageDescription";
import { useRouter } from "next/router";

export default function About({ skills }) {
  const router = useRouter();

  return (
    <section>
      <PageDescription
        title="About Me"
        description="Here you can find information about me"
      />
      <Grid container spacing={2}>
        <Grid item md={6}>
          <h2>Get to know me!</h2>
          <p>
            I am a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <p>
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my Linkedin
            where I post useful content related to Web Development and
            Programming
          </p>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("./projects")}
          >
            Contact
          </Button>
        </Grid>
        <Grid item md={6}>
          <h2>My Skills</h2>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            {skills.map((skill) => (
              <Chip key={skill} label={skill}></Chip>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
}

export async function getStaticProps() {
  let skills = [];

  try {
    const response = await fetch(
      "https://jarf-my-skills-api-default-rtdb.firebaseio.com/skills.json"
    );
    const data = await response.json();
    skills = data.split(",");
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      skills,
    },
    revalidate: 30,
  };
}
