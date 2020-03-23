import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
  faKeybase,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.findMe}>
          <a href="https://github.com/diegodelemos/">
            <FontAwesomeIcon icon={faGithubSquare} className={utilStyles.socialNetworkIcon}/>
          </a>
          &nbsp; - &nbsp;
          <a href="https://www.linkedin.com/in/diegodelemos/">
            <FontAwesomeIcon icon={faLinkedin} className={utilStyles.socialNetworkIcon}/>
          </a>
          &nbsp; - &nbsp;
          <a href="https://twitter.com/diego_delemos">
            <FontAwesomeIcon icon={faTwitterSquare} className={utilStyles.socialNetworkIcon}/>
          </a>
          &nbsp; - &nbsp;
          <a href="https://keybase.io/diegodelemos">
            <FontAwesomeIcon icon={faKeybase} className={utilStyles.socialNetworkIcon}/>
          </a>
          &nbsp; - &nbsp;
          <a href="https://www.instagram.com/diegodelemos.me">
            <FontAwesomeIcon icon={faInstagramSquare} className={utilStyles.socialNetworkIcon}/>
          </a>
        </p>
      </section>
    </Layout>
  );
}
