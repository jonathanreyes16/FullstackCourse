import { Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

export default function Layout ({children}) {
return (
    <>
    <Header title="jonathan">
        <Link href="/">Home</Link> 
        <Link href="/about">About</Link>
        <Link href="/project">Project</Link>
        <Link href="/contact">Contact</Link>
    </Header>
    <Container fixed>
        <main>{children}</main>
    </Container>
    <Footer />
    </>
)
}