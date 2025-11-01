import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Nav from '../components/Nav';
import { UnderlineLargeIcon } from '../components/icons/underline-large';
import ArrowDown from '../components/icons/arrow-down';
import SunIcon from '../components/icons/sun';
import MailIcon from '../components/icons/mail';
import TwitterIcon from '../components/icons/twitter';
import LinkedInIcon from '../components/icons/linked-in';
import GithubIcon from '../components/icons/github';
import MoonIcon from '../components/icons/moon';
import { InView } from 'react-intersection-observer';
import Head from 'next/head';
import useCurrentTheme from '../hooks/useCurrentTheme';
import { cn } from '../helpers';

const Home: NextPage = () => {
	const [currentTheme, toggleTheme] = useCurrentTheme();
	const [currentSection, setCurrentSection] = useState<'main' | 'about' | 'experience' | 'contact'>('main');
	const [currentTab, setCurrentTab] = useState<'jurismemo' | 'lawsanse' | 'ulorin' | 'unec' | 'lawsaimsu'>('jurismemo');

	const mainRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const experienceRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	const goToAbout = () => {
		aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const handleOnVisibilityChanged = (inView: boolean, section: 'main' | 'about' | 'experience' | 'contact') => {
		inView && setCurrentSection(section);
	};

	const handlePressNav = (section: 'main' | 'about' | 'experience' | 'contact') => {
		switch (section) {
			case 'main':
				mainRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case 'about':
				aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case 'experience':
				experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case 'contact':
				contactRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			default:
				break;
		}
	};

	const handleOnChangeTab = (tab: 'jurismemo' | 'lawsanse' | 'ulorin' | 'unec' | 'lawsaimsu') => {
		setCurrentTab(tab);
	};
	useEffect(() => {
		document.documentElement.style.setProperty(
			'--scrollbar-background',
			`${currentTheme === 'light' ? 'white' : '#080b16'}`
		);
		document.documentElement.style.setProperty(
			'--scrollbar-thumb-background',
			`${currentTheme === 'dark' ? 'white' : '#080b16'}`
		);
	}, [currentTheme]);

	return (
		<>
			<Head>
				<title>Ugo.B | Full Stack Developer in Imo State</title>
				<meta
					name='description'
					content='Ugo.B is a professional full-stack web developer and web designer based in Owerri, Imo State, Nigeria. I build fast, modern, SEO-optimized websites for businesses and individuals across Nigeria.'
				/>
				<meta
					name='keywords'
					content='web developer, website developer, web developer Owerri, web designer Owerri, web developer Imo State, website developer Owerri, web design Imo, Owerri web developer, freelance web developer Nigeria, full stack developer Owerri, best web designer Owerri, website development in Owerri'
				/>
				<meta name='author' content='Ugo.B' />
				<meta name='robots' content='index, follow' />

				<meta property='og:type' content='website' />
				<meta property='og:title' content='Ugo.B — Web Developer & Web Designer in Owerri' />
				<meta
					property='og:description'
					content='Looking for a professional web developer in Owerri or Imo State? Ugo.B builds clean, responsive, and SEO-driven websites that help brands stand out online.'
				/>
				<meta property='og:image' content='https://i.postimg.cc/TY6tR7k1/Generated-Image-November-01-2025-1-42PM.png' />
				<meta property='og:url' content='https://build-with-ugob.com.ng' />
				<meta property='og:site_name' content='Ugo.B Portfolio' />

				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content='Ugo.B — Web Developer in Owerri' />
				<meta
					name='twitter:description'
					content='Hire an experienced web developer and web designer in Owerri, Imo State. I create fast, modern, and responsive websites for businesses across Nigeria.'
				/>
				<meta
					name='twitter:image'
					content='https://i.postimg.cc/TY6tR7k1/Generated-Image-November-01-2025-1-42PM.png'
				/>

				<meta name='geo.region' content='NG-IM' />
				<meta name='geo.placename' content='Owerri' />
				<meta name='geo.position' content='5.4853;7.0350' />
				<meta name='ICBM' content='5.4853, 7.0350' />

				<link rel='canonical' href='https://build-with-ugob.com.ng' />

				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Person',
							name: 'Ugo.B',
							alternateName: 'Emeka Emmanuel Ugonna',
							jobTitle: 'Web Developer & Web Designer',
							telephone: '+2348103579586',
							description:
								'Full-stack web developer based in Owerri, Imo State, Nigeria. I specialize in building responsive, SEO-optimized websites for brands and individuals.',
							url: 'https://build-with-ugob.com.ng',
							image: 'https://i.postimg.cc/TY6tR7k1/Generated-Image-November-01-2025-1-42PM.png',
							address: {
								'@type': 'PostalAddress',
								addressLocality: 'Owerri',
								addressRegion: 'Imo State',
								addressCountry: 'Nigeria',
							},
							sameAs: [
								'https://github.com/donugob',
								'https://x.com/Don_ugob',
								'https://linkedin.com/in/emmanuel-emeka-2a8b2a281',
							],
						}),
					}}
				/>

				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'LocalBusiness',
							name: 'Ugo.B (Emeka Emmanuel Ugonna)',
							image: 'https://i.postimg.cc/TY6tR7k1/Generated-Image-November-01-2025-1-42PM.png',
							telephone: '+2348103579586',
							address: {
								'@type': 'PostalAddress',
								addressLocality: 'Owerri',
								addressRegion: 'Imo State',
								addressCountry: 'NG',
							},
							url: 'https://build-with-ugob.com.ng',
							sameAs: [
								'https://github.com/donugob',
								'https://x.com/Don_ugob',
								'https://linkedin.com/in/emmanuel-emeka-2a8b2a281',
							],
						}),
					}}
				/>
				<link
					rel='preload'
					as='image'
					href='https://i.postimg.cc/TY6tR7k1/Generated-Image-November-01-2025-1-42PM.png'
				/>
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap' rel='stylesheet' />

				{/* Favicon */}
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav currentSection={currentSection} currentTheme={currentTheme} onPressNav={handlePressNav} />
			<div
				className={clsx(
					'relative snap-y snap-mandatory min-h-screen overflow-y-scroll',
					currentTheme === 'dark' ? 'bg-main' : 'bg-white'
				)}>
				<section
					ref={mainRef}
					className='h-screen container mx-auto flex items-center justify-center snap-center px-2 md:px-0'>
					<div className='text-3xl lg:text-7xl text-center'>
						<div className='overflow-hidden'>
							<p className='mb-8 animate-slide-in'>
								Hi!, I’m <br /> Ugo.B, a
							</p>
						</div>
						<InView className='overflow-hidden' onChange={(inView) => handleOnVisibilityChanged(inView, 'main')}>
							<p className='font-bold mb-8 animate-slide-in'>Full Stack Developer</p>
						</InView>
						<div className='flex flex-col justify-center items-center'>
							<UnderlineLargeIcon
								className={clsx(
									'w-2/3 mx-auto lg:w-auto lg:mx-0 animate-slide-in-x delay-1000',
									currentTheme === 'dark' ? 'text-white' : 'text-main'
								)}
							/>
							<div
								className={clsx(
									'cursor-pointer rounded-full border-2 py-10 px-12 mt-16 animate-bounce delay-1000',
									currentTheme === 'dark' ? 'border-white' : 'border-main'
								)}
								onClick={goToAbout}>
								<ArrowDown
									className={clsx(
										'w-4 h-8 lg:w-auto lg:h-auto animate-slide-in delay-1000',
										currentTheme === 'dark' ? 'text-white' : 'text-main'
									)}
								/>
							</div>
						</div>
					</div>
				</section>

				<section
					className='h-screen container mx-auto flex flex-col justify-center snap-center px-2 md:px-0'
					ref={aboutRef}>
					<InView onChange={(inView) => handleOnVisibilityChanged(inView, 'about')}>
						<p className='text-2xl lg:text-6xl font-bold text-center'>About Me</p>
					</InView>
					<div
						className={clsx(
							'flex justify-between px-4 border-t-2 border-b-2 py-5 md:py-10 text-md md:text-2xl mt-12',
							currentTheme === 'dark' ? 'border-t-white border-b-white' : 'border-t-main border-b-main'
						)}>
						<span>Developer</span>
						<span>Creative Thinker</span>
						<span>Problem Solver</span>
						<span>Gamer</span>
					</div>
					<p className='text-md md:text-2xl mt-12 lg:text-left'>
						I’m <strong>Emeka Emmanuel Ugonna</strong> (popularly known as <strong>Ugo.B</strong>), a passionate
						full-stack web developer based in <strong>Owerri, Imo State</strong>. I specialize in building fast, clean,
						and responsive websites that don’t just look great but also perform exceptionally well on search engines.
						Over the years, I’ve worked on diverse projects — from personal portfolios to business websites and tech
						platforms — helping brands bring their ideas to life through functional and visually appealing design.
						<br />
						<br />
						What drives me is simple: turning creative concepts into scalable digital experiences that make an impact.
						Whether it’s front-end development, backend logic, or deployment, I enjoy crafting solutions that balance
						performance, usability, and design. When I’m not coding, you’ll probably find me reading about design
						systems, exploring new technologies, or gaming to clear my head.
					</p>
				</section>

				<section
					ref={experienceRef}
					className='h-screen container mx-auto flex flex-col justify-center snap-center px-2 md:px-0'>
					<InView onChange={(inView) => handleOnVisibilityChanged(inView, 'experience')}>
						<p className='text-md md:text-2xl font-bold mb-4 md:mb-14'>Projects & Experience</p>
					</InView>

					<div className='flex flex-col lg:flex-row min-h-[428px] lg:min-h-[504px]'>
						{/* Tabs */}
						<div className='tabs mb-4 lg:mb-0 flex-col lg:items-start lg:h-full lg:shrink-0'>
							<a
								className={cn(
									'tab lg:border-l-2 tab-bordered text-lg lg:text-4xl py-2 lg:py-5 flex-grow w-full lg:justify-start lg:pl-10',
									currentTab === 'jurismemo' ? 'tab-active' : ''
								)}
								onClick={() => handleOnChangeTab('jurismemo')}>
								Jurismemo
							</a>

							<a
								className={cn(
									'tab lg:border-l-2 tab-bordered text-lg lg:text-4xl py-2 lg:py-5 flex-grow w-full lg:justify-start lg:pl-10',
									currentTab === 'lawsanse' ? 'tab-active' : ''
								)}
								onClick={() => handleOnChangeTab('lawsanse')}>
								LAWSAN South East Zone
							</a>

							<a
								className={cn(
									'tab lg:border-l-2 tab-bordered text-lg lg:text-4xl py-2 lg:py-5 flex-grow w-full lg:justify-start lg:pl-10',
									currentTab === 'ulorin' ? 'tab-active' : ''
								)}
								onClick={() => handleOnChangeTab('ulorin')}>
								Law Students Society, Unilorin
							</a>

							<a
								className={cn(
									'tab lg:border-l-2 tab-bordered text-lg lg:text-4xl py-2 lg:py-5 flex-grow w-full lg:justify-start lg:pl-10',
									currentTab === 'unec' ? 'tab-active' : ''
								)}
								onClick={() => handleOnChangeTab('unec')}>
								UNEC Voting System
							</a>

							<a
								className={cn(
									'tab lg:border-l-2 tab-bordered text-lg lg:text-4xl py-2 lg:py-5 flex-grow w-full lg:justify-start lg:pl-10',
									currentTab === 'lawsaimsu' ? 'tab-active' : ''
								)}
								onClick={() => handleOnChangeTab('lawsaimsu')}>
								LAWSA IMSU Voting System
							</a>
						</div>

						{/* Content */}
						<div className='relative flex-grow overflow-hidden'>
							{/* Jurismemo */}
							<div
								className={cn(
									'flex-grow lg:pl-20 absolute top-0 left-0 opacity-0 -translate-x-40 transition-[opacity_transform]',
									'duration-300 lg:translate-x-40',
									currentTab === 'jurismemo' && 'opacity-100 translate-x-0 lg:translate-x-0'
								)}>
								<p className='text-lg lg:text-4xl font-bold'>Founder & Developer @ Jurismemo</p>
								<p className='text-md md:text-2xl md:mt-5 mb-7'>2025 – Present</p>
								<ul className='text-md md:text-2xl list-disc list-outside pl-4 flex flex-col md:gap-y-10'>
									<li>
										Created <strong>Jurismemo</strong>, a digital legal resource platform simplifying complex legal
										materials for Nigerian students.
									</li>
									<li>
										Handled everything from UI/UX design and frontend architecture to backend APIs and data models.
									</li>
									<li>
										Currently expanding the platform to include AI-powered case summaries and searchable legal insights.
									</li>
								</ul>
							</div>

							{/* LAWSAN South East */}
							<div
								className={cn(
									'flex-grow lg:pl-20 absolute top-0 left-0 opacity-0 -translate-x-40 transition-[opacity_transform]',
									'duration-300 lg:translate-x-40',
									currentTab === 'lawsanse' && 'opacity-100 translate-x-0 lg:translate-x-0'
								)}>
								<p className='text-lg lg:text-4xl font-bold'>Web Developer @ LAWSAN South East Zone</p>
								<p className='text-md md:text-2xl md:mt-5 mb-7'>2025</p>
								<ul className='text-md md:text-2xl list-disc list-outside pl-4 flex flex-col md:gap-y-10'>
									<li>
										Designed and developed the official <strong>LAWSAN South East Zone</strong> website, featuring event
										registration and awards voting systems.
									</li>
									<li>Integrated secure payment gateways and live voting features for seamless user participation.</li>
									<li>Optimized the portal for speed, accessibility, and mobile responsiveness.</li>
								</ul>
							</div>

							{/* LSS Unilorin */}
							<div
								className={cn(
									'flex-grow lg:pl-20 absolute top-0 left-0 opacity-0 -translate-x-40 transition-[opacity_transform]',
									'duration-300 lg:translate-x-40',
									currentTab === 'ulorin' && 'opacity-100 translate-x-0 lg:translate-x-0'
								)}>
								<p className='text-lg lg:text-4xl font-bold'>
									Web Developer @ Law Students Society, University of Ilorin
								</p>
								<p className='text-md md:text-2xl md:mt-5 mb-7'>2025</p>
								<ul className='text-md md:text-2xl list-disc list-outside pl-4 flex flex-col md:gap-y-10'>
									<li>
										Developed a professional-grade website for the <strong>LSS Unilorin</strong> association.
									</li>
									<li>Structured content systems for news, podcasts, events, and announcements.</li>
									<li>Ensured high accessibility and compliance with modern web standards.</li>
								</ul>
							</div>

							{/* UNEC Voting System */}
							<div
								className={cn(
									'flex-grow lg:pl-20 absolute top-0 left-0 opacity-0 -translate-x-40 transition-[opacity_transform]',
									'duration-300 lg:translate-x-40',
									currentTab === 'unec' && 'opacity-100 translate-x-0 lg:translate-x-0'
								)}>
								<p className='text-lg lg:text-4xl font-bold'>Voting System Developer @ UNEC LAWSA</p>
								<p className='text-md md:text-2xl md:mt-5 mb-7'>2025</p>
								<ul className='text-md md:text-2xl list-disc list-outside pl-4 flex flex-col md:gap-y-10'>
									<li>
										Developed a secure and reliable digital voting system for <strong>UNEC LAWSA Awards</strong>.
									</li>
									<li>Implemented encrypted authentication and real-time result tracking.</li>
									<li>Delivered a seamless voting dashboard with live result updates.</li>
								</ul>
							</div>

							{/* LAWSA IMSU Voting System */}
							<div
								className={cn(
									'flex-grow lg:pl-20 absolute top-0 left-0 opacity-0 -translate-x-40 transition-[opacity_transform]',
									'duration-300 lg:translate-x-40',
									currentTab === 'lawsaimsu' && 'opacity-100 translate-x-0 lg:translate-x-0'
								)}>
								<p className='text-lg lg:text-4xl font-bold'>Developer @ LAWSA IMSU</p>
								<p className='text-md md:text-2xl md:mt-5 mb-7'>2025</p>
								<ul className='text-md md:text-2xl list-disc list-outside pl-4 flex flex-col md:gap-y-10'>
									<li>
										Built a monetized and transparent voting portal for <strong>LAWSA IMSU Awards</strong>.
									</li>
									<li>Integrated role-based authentication and live result analytics.</li>
									<li>Improved efficiency by over 70% and revenue by 900% compared to previous manual processes.</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section
					ref={contactRef}
					className='h-screen container mx-auto flex flex-col justify-center items-center snap-center px-2 md:px-0'>
					<InView onChange={(inView) => handleOnVisibilityChanged(inView, 'contact')}>
						<p className='text-3xl lg:text-7xl'>Contact Me</p>
					</InView>
					<div className='flex justify-between mt-16 gap-x-5 lg:gap-x-16'>
						<a
							href='mailto:contactugob@gmail.com'
							title='Email'
							className={clsx(
								'btn btn-circle bg-transparent border-2 w-[50px] h-[50px] lg:w-[82px] lg:h-[82px] p-2 group',
								currentTheme === 'dark' ? 'border-white' : 'border-main'
							)}>
							<MailIcon
								className={clsx(
									'w-5 h-5 lg:w-auto lg:h-auto transition-colors group-hover:text-white',
									currentTheme === 'dark' ? 'text-white' : 'text-main'
								)}
							/>
						</a>
						<a
							href='https://twitter.com/Don_ugob'
							target='_blank'
							rel='noreferrer'
							title='Twitter'
							className={clsx(
								'btn btn-circle bg-transparent border-2 w-[50px] h-[50px] lg:w-[82px] lg:h-[82px] p-2 group',
								currentTheme === 'dark' ? 'border-white' : 'border-main'
							)}>
							<TwitterIcon
								className={clsx(
									'w-5 h-5 lg:w-auto lg:h-auto transition-colors group-hover:text-white',
									currentTheme === 'dark' ? 'text-white' : 'text-main'
								)}
							/>
						</a>
						<a
							href='https://www.linkedin.com/in/emmanuel-emeka-2a8b2a281/'
							target='_blank'
							rel='noreferrer'
							title='LinkedIn'
							className={clsx(
								'btn btn-circle bg-transparent border-2 w-[50px] h-[50px] lg:w-[82px] lg:h-[82px] p-2 group',
								currentTheme === 'dark' ? 'border-white' : 'border-main'
							)}>
							<LinkedInIcon
								className={clsx(
									'w-5 h-5 lg:w-auto lg:h-auto transition-colors group-hover:text-white',
									currentTheme === 'dark' ? 'text-white' : 'text-main'
								)}
							/>
						</a>
						<a
							href='https://github.com/donugob'
							target='_blank'
							rel='noreferrer'
							title='GitHub'
							className={clsx(
								'btn btn-circle bg-transparent border-2 w-[50px] h-[50px] lg:w-[82px] lg:h-[82px] p-2 group',
								currentTheme === 'dark' ? 'border-white' : 'border-main'
							)}>
							<GithubIcon
								className={clsx(
									'w-5 h-5 lg:w-auto lg:h-auto transition-colors group-hover:text-white',
									currentTheme === 'dark' ? 'text-white' : 'text-main'
								)}
							/>
						</a>
					</div>
				</section>

				<button
					data-theme={currentTheme == 'dark' ? 'light' : 'dark'}
					data-toggle-theme='dark,light'
					className={clsx(
						'btn btn-circle fixed right-5 bottom-10 lg:right-10 flex justify-center items-center w-[48px] h-[30px] lg:w-[82px] lg:h-[82px]',
						currentTheme == 'dark' ? 'bg-white hover:bg-[#C7C7C7]' : 'bg-main'
					)}
					onClick={toggleTheme}>
					<SunIcon
						className={cn(
							'absolute h-[22px] w-[22px] lg:h-auto lg:w-auto -rotate-90 scale-0 transition-transform',
							currentTheme == 'dark' && 'rotate-0 scale-100'
						)}
					/>
					<MoonIcon
						className={cn(
							'absolute h-[22px] w-[22px] lg:h-auto lg:w-auto rotate-90 scale-0 transition-transform',
							currentTheme == 'light' && 'rotate-0 scale-100'
						)}
					/>
				</button>
			</div>
		</>
	);
};

export default Home;
