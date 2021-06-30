import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor
          lobortis sapien, cursus semper urna. Donec sit amet felis sapien.
          Praesent finibus ornare magna, laoreet porta velit lobortis sed.
          Praesent tempus est a ex feugiat rutrum. Aliquam eleifend fringilla
          est quis tristique. Duis porttitor euismod mauris sit amet venenatis.
          Proin semper leo tellus, ut aliquet ligula finibus in. Donec nulla
          dui, tristique at lacus at, finibus maximus lectus. Proin et lectus
          varius, suscipit est vel, ultricies felis. Vestibulum cursus fermentum
          consequat. Nam tempus erat non dapibus lacinia. Nam fringilla non dui
          sit amet consequat. Integer lobortis metus vel quam rhoncus hendrerit.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor
          lobortis sapien, cursus semper urna. Donec sit amet felis sapien.
          Praesent finibus ornare magna, laoreet porta velit lobortis sed.
          Praesent tempus est a ex feugiat rutrum. Aliquam eleifend fringilla
          est quis tristique. Duis porttitor euismod mauris sit amet venenatis.
          Proin semper leo tellus, ut aliquet ligula finibus in. Donec nulla
          dui, tristique at lacus at, finibus maximus lectus. Proin et lectus
          varius, suscipit est vel, ultricies felis. Vestibulum cursus fermentum
          consequat. Nam tempus erat non dapibus lacinia. Nam fringilla non dui
          sit amet consequat. Integer lobortis metus vel quam rhoncus hendrerit.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
