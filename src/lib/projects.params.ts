import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'Institue-management-sysytem',
		color: '#5e55e3',
		description:
			'Introducing My Institute  Management System website, designed to revolutionize the way educational institutions handle student, course, and teacher records. Say goodbye to manual processes and time-consuming record fetching. With our platform, administrators can effortlessly manage teachers and classes, while teachers can add and edit student details. Students can also enjoy the convenience of online fee payment.',
		shortDescription:
			' Institute management system project idea came to my mind when went to "School". The record of every course, teacher, and student are managed manually and there is no use of a computer in the office. If anyone wants to see student/course/ teacher records then all the records will be fetched one by one. This process is very time-consuming. So there was an extreme requirement for student management system project',
		links: [{ to: 'https://www.linkedin.com/posts/shajmil_share-students-project-activity-7024436439882887168-65ya?utm_source=share&utm_medium=member_desktop', label: 'Project', newTab: true }],
		logo: Assets.Angular,
		name: 'Institute  Management System',
		period: { from: new Date(2022, 6, 1), to: new Date(2022, 8, 30) },
		skills: getSkills('Angular', 'MongoDB', 'NodeJs', 'ExpressJs', 'js'),
		type: 'Website ',

	},
	{
		slug: 'ominiFood',
		color: '#ff3e00',
		description:
			'Omnifood is an AI-powered food subscription that will make you eat healthy again, 365 days per year. It s tailored to your personal tastes and nutritional needs.',
		shortDescription:
			'Static Website Using Html,Css .',
		links: [{ to: 'https://shajmil-omnifood.netlify.app/', label: 'Website', newTab: true }],
		logo: Assets.HTML,
		name: 'ominiFood',
		period: {
			from: new Date(2022, 8, 1), to: new Date(2022, 9, 30)
		},
		skills: getSkills('html', 'css'),
		type: 'Website Template',
		// screenshots: [
		// 	{
		// 		label: 'screen 1',
		// 		src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '2',
		// 		src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '3',
		// 		src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '4',
		// 		src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '5',
		// 		src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '6',
		// 		src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	}
		// ]
	},
	{
		slug: 'SUPPLY CHAIN MANAGEMENT SYSTEM',
		color: '#5e55e3',
		description:
			` project which can be used by the company management to keep track of the sales, dealers and its clients.clients can view all the products and can make order from different companies
Frontend: HTML, CSS, Javascript
Backend: mysql, PHP`, shortDescription:
			` project which can be used by the company management to keep track of the sales, dealers and its clients.clients can view all the products and can make order from different companies
Frontend: HTML, CSS, Javascript
Backend: mysql, PHP`,
		links: [{ to: 'https://github.com/shajmil/supply_chain_management', label: 'Github', newTab: true }],
		logo: Assets.Php,
		name: 'SUPPLY CHAIN MANAGEMENT SYSTEM',
		period: { from: new Date(2022, 0, 1), to: new Date(2022, 3, 30) },
		skills: getSkills('html', 'css', 'Php',),
		type: 'Website ',

	},

];

export default MY_PROJECTS;
