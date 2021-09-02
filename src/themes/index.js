import light from './theme-light.json';
import dark from './theme-dark.json';

export default function getTheme(theme) {
	switch (theme) {
		case 'light':
			return light;

		case 'dark':
			return dark;

		default:
			return light;
	}
}
