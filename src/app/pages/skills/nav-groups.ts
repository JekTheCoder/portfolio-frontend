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
				label: 'Enneto',
				fragment: 'enneto',
			},
			{
				label: 'Conecta Surveys',
				fragment: 'conecta-survey',
			},
			{
				label: 'Midagri',
				fragment: 'midagri',
			},
			{
				label: 'Host Observable',
				fragment: 'host-observable',
			},
			{
				label: 'Linked Elements',
				fragment: 'linked-elements',
			},
		],
	},
	{
		title: 'Rust',
		src: 'rust',
		items: [
			{
				label: 'Blog server',
				fragment: 'personal-blog',
			},
			{
				label: 'Code Conjurer',
				fragment: 'code-conjurer',
			},
		],
	},
	{
		title: 'Svelte',
		src: 'svelte',
		items: [
			{
				label: 'Blog website',
				fragment: 'blog-website',
			},
			{
				label: 'Catstagram',
				fragment: 'catstagram',
			},
		],
	},
];
