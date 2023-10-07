import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Shajmil Portfolio';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Shajmil',
	lastName: 'VJ',
	description:
		'Passionate full-stack wizard with mastery in Angular, React, Nodejs, and Mongodb. Certified in JavaScript, MEARN stack, and ethical hacking—committed to perpetual growth. Currently crafting the future of KidsBuddy as an Angular maestro, sculpting flawless frontend experiences with iron-clad security. Proven track record from pivotal roles at Luminar Technolab and Udemy, hungry for dynamic challenges. Seeking a high-impact role to amplify success, contribute innovative solutions, and thrive in a dynamic professional environment. Eager, adaptable, and poised for exciting opportunities. Ready to revolutionize your team.',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/shajmil' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/shajmil/'
		},

		{
			platform: Platform.Email,
			link: 'v.jshejmil@gmail.com'
		},

	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: 'https://github.com/shajmil/RESUME/raw/main/SHAJMIL_RESUME.pdf'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
