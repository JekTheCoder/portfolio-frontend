import { NavGroup } from './components/accordeon-nav-bar/nav-group';

export const navGroups: NavGroup[] = [
	{
		title: 'Angular',
		src: 'angular',
		items: [
			{
				label: 'Fully Reactive Components',
				fragment: 'reactive-section',
			},
			{
				label: 'Deep Rxjs Knowledge',
				fragment: 'deep-reactive-section',
			},
			{
				label: 'Libraries Section',
				fragment: 'libraries-section',
			}
		],
	},
	{
		title: 'NestJS',
		src: 'nestjs',
		items: [
			{
				label: '12',
				fragment: 'r',
			},
			{
				label: '12',
				fragment: 'r',
			},
		],
	},
];
