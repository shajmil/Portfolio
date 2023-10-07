import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'angular-developer',
		company: 'KidsBuddy',
		description: 'A platform that connects parents and children with various educational and recreational activities. At KidsBuddy, I am responsible for developing and maintaining the frontend features, integrating with the backend APIs, and ensuring the performance and security of the web application. I also collaborate with the design and product teams to deliver a seamless and intuitive user experience.'
		,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Kochi',
		period: { from: new Date(2022, 11, 18) },
		skills: getSkills('Angular', 'ts', 'Tailwind', 'html', 'css', 'scss', 'js'),
		name: 'Angular Developer',
		color: 'red',
		links: [{
			label: 'Website',
			newTab: true,
			to: 'https://www.kidsbuddyapp.com/'
		},], logo: 'https://kidsbuddyapp.com/favicon.ico',
		shortDescription: 'E-Learning Platform'
	},
	{
		slug: 'Internship',
		company: 'Luminar TechnoLab',
		description: 'Transformative Learning, Real-world Impact.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Kakkanad',
		period: { from: new Date(2022, 6, 1), to: new Date(2022, 12, 30) },
		skills: getSkills('Angular', 'React', 'MongoDB', 'NodeJs', 'ExpressJs', 'js'),
		name: 'MEARN Stack Internship',
		color: '#232342',
		links: [{
			label: 'Website',
			newTab: true,
			to: 'https://www.luminartechnolab.com/'
		},],
		logo: 'https://www.luminartechnolab.com/favicon.ico',
		shortDescription: 'Transformative Learning, Real- world Impact.',
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2020, 3, 1), to: new Date(2022, 6, 30) },
		skills: getSkills('PHP', 'css', 'html', 'js'),
		name: 'Junior Freelancer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
