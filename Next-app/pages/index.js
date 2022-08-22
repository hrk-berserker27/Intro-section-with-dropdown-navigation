import Head from "next/head";
export default function App() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="This is a site with navigation with dropdown"
        />
        <meta
          name="keywords"
          content="Next.js,react,javascript,SASS,SCSS,CSS,HTML-5,Progressive-Web-app,Navigation,dropdown"
        />
        <title>Frontend Mentor | Intro section with dropdown navigation</title>
      </Head>
      <nav>
        <ul>
          <li>Features</li>
          <li>Company</li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <ul>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </nav>
      <main>
        <h1>Make remote work</h1>
        <section>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
          <button>Learn more</button>
        </section>
        <section></section>
      </main>
    </>
  );
}
