<script lang="ts">
	interface Experience {
		company: string;
		position: string;
		modality: string;
		period: string;
		country: string;
		technologies: string[];
	}

	interface Project {
		name: string;
		position: string;
		description: string;
		skills: string[];
	}

	const experiences: Experience[] = [
		{
			company: 'Penguin Academy',
			position: 'Full-stack & Team Lead',
			modality: 'Full time',
			period: 'nov/021 - Current',
			country: 'Paraguay',
			technologies: ['TypeScript', 'SvelteKit', 'Node.js', 'PostgeSQL', 'Flutter', 'GPT-3']
		},
		{
			company: 'Calima Technologies',
			position: 'Front-end',
			modality: 'Freelance',
			period: 'jun/021 - oct/021',
			country: 'Spain',
			technologies: ['Vue.js', 'Scss']
		},
		{
			company: 'Taller de Ideas',
			position: 'Full-stack',
			modality: 'Full time',
			period: 'abr/021 - jul/021',
			country: 'Paraguay',
			technologies: ['Angular', 'Node.js', 'AWS Lambda']
		},
		{
			company: 'GolStats',
			position: 'Front-end',
			modality: 'Freelance',
			period: 'jun/020 - apr/021',
			country: 'Mexico',
			technologies: ['Vue 2', 'Nuxt.js', 'Vuex', 'Sass', 'Scrum']
		}
	];

	const projects: Project[] = [
		{
			name: 'FINDAMAKER (side-project)',
			position: 'Full-stack',
			description:
				'A platform that matches people who have problems with developers who want to create solutions.',
			skills: ['Sveltekit', 'TypeScript', 'Prisma', 'PostgreSQL', 'TailwindCSS', 'Twitter API']
		},
		{
			name: 'Fundación Natan (ONG)',
			position: 'Full-stack',
			description: 'Volunteering. Web App for reception and distribution of donations.',
			skills: ['Django', 'PostgreSQL']
		},
		{
			name: 'LinkStart',
			position: 'Founder & Mentor',
			description: 'Hackerspace',
			skills: ['Custom learning paths', 'Mentorship', 'Resources Management', 'Web development']
		}
	];
</script>

<div class="grid grid-cols-6 w-5/6 m-auto py-4">
	<div class="grid-cols-1">
		<!-- Just for spacing -->
	</div>
	<div
		class="col-span-4 grid grid-cols-2 grid-rows-5 border border-blue-950 rounded-md py-10 px-10"
	>
		<div class="col-span-2 row-span-1 mx-auto py-4 text-center">
			<h1 class="text-6xl text-primary font-bold py-1">FERNANDO MELLONE</h1>
			<h2 class="text-2xl text-secondary font-semibold">FULL-STACK DEVELOPER</h2>
			<p class="w-full whitespace-nowrap text-md pt-1">If you want to see more details about me:</p>
			<div class="flex flex-nowrap justify-center items-center gap-x-2 my-1">
				<a href="https://www.linkedin.com/in/fernando-mellone" target="_blank">
					<img
						class="w-10"
						src="https://media-public.canva.com/gvtPM/MADnBogvtPM/4/t.png"
						alt="LinkedIn"
					/>
				</a>
				<a href="https://github.com/fermellone" target="_blank">
					<img
						class="w-10"
						src="https://media-public.canva.com/MADnBmVJEIU/3/thumbnail.png"
						alt="GitHub"
					/>
				</a>
			</div>
		</div>
		<div
			class="col-span-1 row-span-4 bg-primary text-white px-9 py-8 flex flex-col flex-nowrap justify-start gap-10 text-center rounded-md"
		>
			<div>
				<h2 class="font-bold py-2 text-xl">PERSONAL PROFILE</h2>
				<p>
					I am a self-taught developer with experience creating applications, and features and
					participating in user-oriented design sessions. In my previous positions, I've managed to
					optimize service consumption, decrease company costs, and unblock my colleagues, allowing
					them to improve their time and achieve their goals.
				</p>
			</div>
			<div>
				<h2 class="font-bold py-2 text-xl">WHAT CAN I DO</h2>
				<ul class="text-start">
					<li>• Clean architecture</li>
					<li>• Web design</li>
					<li>• Progressive web apps</li>
					<li>• Databases</li>
					<li>• REST APIs</li>
				</ul>
			</div>
			<div>
				<h2 class="font-bold py-2 text-xl">CONTACT</h2>
				<div class="text-start">
					<p><b>Phone: </b> +595 991 403 011</p>
					<p><b>Email: </b> fernandomellone2@gmail.com</p>
					<p>
						<b>Portfolio: </b>
						<a href="http://fermellone.co" target="_blank">fermellone.co</a>
					</p>
					<p>Asunción, Paraguay.</p>
				</div>
			</div>
		</div>
		<div class="col-span-1 row-span-4 pl-6">
			<div class="flex flex-nowrap flex-col gap-4">
				<div>
					<h2 class="font-bold text-2xl text-primary">Experience</h2>
					{#each experiences as exp}
						<div class="font-bold my-2">
							<h3 class="text-md text-secondary">{exp.company} | {exp.position}</h3>
							<div class="pl-2">
								<h4 class="text-sm text-primary">{exp.period}</h4>
								<p class="text-sm text-secondary">({exp.modality} / {exp.country})</p>
								<p class="text-xs xl:whitespace-nowrap">
									{exp.technologies.join(' | ')}
								</p>
							</div>
						</div>
					{/each}
				</div>
				<div>
					<h2 class="font-bold text-2xl text-primary">Projects</h2>
					{#each projects as pj}
						<div class="font-bold my-2">
							<h3 class="text-md text-secondary">{pj.name} | {pj.position}</h3>
							<div class="pl-2">
								<h4 class="text-sm text-primary">{pj.description}</h4>
								<p class="text-xs">
									{pj.skills.join(' | ')}
								</p>
							</div>
						</div>
					{/each}
				</div>
				<div>
					<h2 class="font-bold text-2xl text-primary">Technologies I can work with</h2>
					<div class="font-bold my-2">
						<h3 class="text-md text-secondary">Back-end</h3>
						<p class="text-xs">TypeScript, Express.js, Prisma, PostgreSQL.</p>
					</div>
					<div class="font-bold my-2">
						<h3 class="text-md text-secondary">Front-end</h3>
						<p class="text-xs">TypeScript, Vue 2, Svelte, HTML, CSS, TailwindCSS.</p>
					</div>

					<div class="font-bold my-2">
						<h3 class="text-md text-secondary">AI</h3>
						<p class="text-xs">GPT-3, Langchain, Pinecone.</p>
					</div>

					<div class="font-bold my-2">
						<h3 class="text-md text-secondary">Others</h3>
						<p class="text-xs">Firebase, Vercel, Heroku, Netlify.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="grid-cols-1">
		<!-- Just for spacing -->
	</div>
</div>
