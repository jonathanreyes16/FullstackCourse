import PageDescription from "@/components/PageDescription";
import { Button, Chip, Grid, Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function AboutPage({skills}) {
    const router = useRouter();
    return (
        <section>
            <PageDescription
             title="about me"
             description={"Here you will find more informattion about me"} 
            />

            <Grid container spacing={2}>
                <Grid item md={6}>
                    <h2>Get to know me!</h2>
                    <p>example text1</p>
                    <p>example text2</p>
                    <p>example text3</p>
                    <Button
                     variant="contained"
                     size="Large"
                     onClick={()=> router.push("/projects")}
                     >Contact</Button>
                </Grid>
                <Grid item md={6}>
                    <h2>My Skills</h2>
                    <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" >
                        {skills.map((skill) => (
                          <Chip key={skill} label={skill} />
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
        const response = await fetch("https://portfolioapi-aa99c-default-rtdb.firebaseio.com/skills.json");
        const data = await response.json();
        skills= data.split(",");
    }
    catch(error){
        console.error(error);
    }
    return{
        props:{
            skills,
            revalidate: 30,
        },
    };
}