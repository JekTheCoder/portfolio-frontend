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
				label: 'Advanced Rxjs',
				fragment: 'deep-reactive-section',
			},
			{
				label: 'Dependency Injection',
				fragment: 'di-section',
			},
			{
				label: 'Libraries',
				fragment: 'libraries-section',
			},
		],
	},
	{
		title: 'Angular Projects & Experience',
		src: 'angular-projects',
		items: [
			{
				label: 'Host Observable',
				fragment: 'host-observable',
			},
			{
				label: 'Linked Elements',
				fragment: 'linked-elements',
			},
			{
				label: 'Enneto',
				fragment: 'enneto',
			},
			{
				label: 'Generic E-Shop',
				fragment: 'g-eshop',
			},
		],
	},
	{
		title: 'Rust',
		src: 'rust',
    items: [

		]
	}
];
