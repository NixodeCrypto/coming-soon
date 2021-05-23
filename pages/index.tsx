import Head from 'next/head'
import Image from 'next/image'
import { Container, Header} from "@/styles/index"

export default function Home() {
  return (
    <>
      <Head>

        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
        />
      </Head>
    <Container>
      <img src="logo.png" alt="Nixode Logo"/>
      <Header h1>Nixode is an upcoming cryptocurrency startup</Header>
      <Header h2>Our website is currently in development and will be shipping out soon.</Header>
    </Container>
    </>
  )
}


