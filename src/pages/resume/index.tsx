import type { NextPage } from 'next';
import Page from '../../components/Page';
import Head from 'next/head';
import clsx from 'clsx';
import useCurrentTheme from '../../hooks/useCurrentTheme';

const Print: NextPage = () => {
	const [currentTheme] = useCurrentTheme();

	// Environment-driven contact links (set these in your .env.local or hosting provider)
	const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || '#';
	const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'contact@yourdomain.com';
	const LINKEDIN = process.env.NEXT_PUBLIC_LINKEDIN || '#';
	const GITHUB = process.env.NEXT_PUBLIC_GITHUB || '#';
	const PORTFOLIO = process.env.NEXT_PUBLIC_PORTFOLIO || '#';
	const LOCATION = process.env.NEXT_PUBLIC_LOCATION || 'Owerri, Imo State, Nigeria';

	return (
		<>
			<Head>
				<title>Emeka Emmanuel Ugonna (Ugo.B) — Web Developer in Owerri</title>
				<meta
					name='description'
					content='Ugo.B — Freelance full-stack web developer based in Owerri, Imo State. I build fast, responsive and SEO-optimized websites and web apps for businesses, associations and individuals.'
				/>
				<meta
					name='keywords'
					content='web developer Owerri, web developer Imo, freelance web developer Owerri, website developer Owerri, web designer Owerri, full stack developer Nigeria'
				/>
			</Head>

			<a
				href={RESUME_URL}
				target='_blank'
				rel='noreferrer'
				className={clsx('link absolute top-0 right-10', currentTheme === 'light' ? 'text-main' : 'text-white')}>
				Download PDF
			</a>

			<Page>
				<div className='font-sans px-8 space-y-6 print:text-black print:bg-white'>
					{/* Header / Contact */}
					<header className='text-center space-y-2'>
						<h1 className='text-2xl font-bold text-[#003366]'>EMEKA EMMANUEL UGONNA</h1>
						<p className='text-sm'>
							{LOCATION} |{' '}
							<a href={`mailto:${EMAIL}`} className='text-blue-600 link'>
								{EMAIL}
							</a>{' '}
							|{' '}
							<a href={LINKEDIN} className='text-blue-600 link' target='_blank' rel='noreferrer'>
								LinkedIn
							</a>{' '}
							|{' '}
							<a href={GITHUB} className='text-blue-600 link' target='_blank' rel='noreferrer'>
								GitHub
							</a>{' '}
							|{' '}
							<a href={PORTFOLIO} className='text-blue-600 link' target='_blank' rel='noreferrer'>
								Portfolio
							</a>
						</p>
					</header>

					{/* Professional Summary */}
					<section>
						<h2 className='text-lg font-bold text-[#003366] border-b border-gray-300 mb-3'>PROFESSIONAL SUMMARY</h2>
						<p className='text-sm'>
							Freelance full-stack web developer (Ugo.B) based in Owerri, Imo State. I design and build fast,
							accessible, and SEO-optimised websites and web applications for student associations, small businesses and
							organizations across Nigeria. I focus on pragmatic solutions — clean frontends, reliable backends, and
							deployable systems that make an immediate difference to clients.
						</p>
					</section>

					{/* Core Competencies */}
					<section>
						<h2 className='text-lg font-bold text-[#003366] border-b border-gray-300 mb-3'>CORE COMPETENCIES</h2>
						<div className='grid grid-cols-2 gap-4'>
							<ul className='list-disc list-outside ml-4 text-sm'>
								<li>Responsive Frontend (HTML, CSS, Tailwind)</li>
								<li>Backend & API design (Node, PHP, simple REST)</li>
								<li>Static site & SEO optimisation</li>
								<li>Authentication & role-based systems</li>
							</ul>
							<ul className='list-disc list-outside ml-4 text-sm'>
								<li>Payment gateway integration</li>
								<li>Voting systems & secure result verification</li>
								<li>Performance & accessibility</li>
							</ul>
						</div>
					</section>

					{/* Projects & Experience (Freelance / Client Work) */}
					<section>
						<h2 className='text-lg font-bold text-[#003366] border-b border-gray-300 mb-3'>PROJECTS & EXPERIENCE</h2>

						<div className='space-y-6 text-sm'>
							{/* Jurismemo */}
							<div>
								<div className='flex justify-between items-baseline'>
									<div>
										<h3 className='font-bold text-[#800000]'>Founder & Developer — Jurismemo</h3>
										<p className='italic'>Personal project</p>
									</div>
									<div className='text-right'>
										<p className='italic'>Owerri / Remote</p>
										<p className='text-sm'>2024 – Present</p>
									</div>
								</div>
								<ul className='list-disc list-outside ml-4 mt-2 space-y-1'>
									<li>
										Built <strong>Jurismemo</strong>, a digital resource platform aimed at simplifying legal concepts
										for students — from design and frontend to backend APIs and content delivery.
									</li>
									<li>Designed searchable content, user authentication, and a responsive reading experience.</li>
									<li>
										Ongoing work: integrating lightweight AI-assisted summaries and improving site discoverability.
									</li>
								</ul>
							</div>

							{/* LAWSAN South East Zone */}
							<div>
								<div className='flex justify-between items-baseline'>
									<div>
										<h3 className='font-bold text-[#800000]'>Web Developer — LAWSAN South East Zone</h3>
										<p className='italic'>Client project</p>
									</div>
									<div className='text-right'>
										<p className='italic'>Owerri / Remote</p>
										<p className='text-sm'>2024 – 2025</p>
									</div>
								</div>

								<ul className='list-disc list-outside ml-4 mt-2 space-y-1'>
									<li>
										Designed and developed the official LAWSAN South East Zone website and events portal, including
										event registration and an awards voting system.
									</li>
									<li>
										Integrated secure payment flows and a voting mechanism to support large concurrent participation.
									</li>
									<li>Optimized UI/UX for mobile-first access and fast load times for campus networks.</li>
								</ul>
							</div>

							{/* Law Students Society — University of Ilorin */}
							<div>
								<div className='flex justify-between items-baseline'>
									<div>
										<h3 className='font-bold text-[#800000]'>Web Developer — Law Students Society, Unilorin</h3>
										<p className='italic'>Client project</p>
									</div>
									<div className='text-right'>
										<p className='italic'>Remote</p>
										<p className='text-sm'>2024</p>
									</div>
								</div>

								<ul className='list-disc list-outside ml-4 mt-2 space-y-1'>
									<li>
										Built the society’s website with a structured content system for news, events and announcements.
									</li>
									<li>
										Implemented easy content editing workflows so society officers can update pages without developer
										help.
									</li>
								</ul>
							</div>

							{/* UNEC / LAWSA Voting Systems */}
							<div>
								<div className='flex justify-between items-baseline'>
									<div>
										<h3 className='font-bold text-[#800000]'>Voting Systems — UNEC & LAWSA IMSU</h3>
										<p className='italic'>Client projects</p>
									</div>
									<div className='text-right'>
										<p className='italic'>Remote / On-site</p>
										<p className='text-sm'>2023 – 2025</p>
									</div>
								</div>

								<ul className='list-disc list-outside ml-4 mt-2 space-y-1'>
									<li>
										Built secure and transparent voting portals for student elections and awards, including encrypted
										authentication and live result tracking.
									</li>
									<li>
										Added role-based access for admins and auditors, and dashboards for real-time analytics during
										voting windows.
									</li>
									<li>Worked closely with clients to ensure trust, usability and verifiable result integrity.</li>
								</ul>
							</div>

							{/* Other client & personal projects (summary) */}
							<div>
								<div className='flex justify-between items-baseline'>
									<div>
										<h3 className='font-bold text-[#800000]'>Other Projects & Freelance Work</h3>
										<p className='italic'>Various clients</p>
									</div>
									<div className='text-right'>
										<p className='italic'>2019 – Present</p>
									</div>
								</div>

								<ul className='list-disc list-outside ml-4 mt-2 space-y-1'>
									<li>
										Multiple one-off websites, landing pages and admin dashboards delivered to small businesses and
										student groups.
									</li>
									<li>Experience integrating payment gateways, building admin tools and improving site performance.</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Education (kept general — edit if you prefer exact entries) */}
					<section>
						<h2 className='text-lg font-bold text-[#003366] border-b border-gray-300 mb-3'>EDUCATION</h2>
						<div>
							<div className='flex justify-between'>
								<h3 className='font-bold text-[#800000]'>LL.B (in view) / Legal Studies</h3>
								<span className='italic'>In Progress</span>
							</div>
							<p className='text-sm italic'>
								Currently completing law degree while operating as a freelance web developer. (Edit this section to add
								your institution and dates if you want them visible on the printed resume.)
							</p>
						</div>
					</section>

					{/* Projects summary */}
					<section>
						<h2 className='text-lg font-bold text-[#003366] border-b border-gray-300 mb-3'>PROJECT HIGHLIGHTS</h2>
						<ul className='list-disc list-outside ml-4 text-sm space-y-2'>
							<li>
								<strong>Jurismemo</strong> — ongoing personal platform for legal study aids and summaries; focus on
								content UX and discoverability.
							</li>
							<li>
								Voting & events platforms for student associations — emphasis on security, usability and fast
								deployment.
							</li>
						</ul>
					</section>

					{/* Additions / Skills */}
					<section>
						<h2 className='text-lg font-bold text-[#003366] border-b border-gray-300 mb-3'>SKILLS & TOOLS</h2>
						<div className='space-y-2 text-sm'>
							<p>
								<strong>Tech:</strong> HTML, CSS, Tailwind, Typescript, Next.js, Node.js, PHP, Laravel, MySQL,
								PostgreSQL, Git, Docker, Vercel/Netlify.
							</p>
							<p>
								<strong>Soft Skills:</strong> Communication, client collaboration, project scoping, time management and
								pragmatic problem-solving.
							</p>
						</div>
					</section>

					{/* References */}
					<section>
						<h2 className='text-lg font-bold text-[#003366] border-b border-gray-300 mb-3'>REFERENCES</h2>
						<p className='text-sm'>Available on request.</p>
					</section>
				</div>
			</Page>
		</>
	);
};

export default Print;
