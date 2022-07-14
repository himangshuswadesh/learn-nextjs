import Head from 'next/head';
import { Layout } from '../../components';

const About = () => {
	return (
		<>
			<Head>
				<title>Learning Nextjs - About</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<h1>About</h1>
			</Layout>
		</>
	);
};
export default About;
