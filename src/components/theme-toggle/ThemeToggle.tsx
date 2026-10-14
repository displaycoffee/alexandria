'use client';

/* Styles */
import './styles/theme-toggle.scss';

/* Packages */
import type { ThemeMode } from '@displaycoffee/tokens';
import { useSyncExternalStore } from 'react';

/* Scripts */
import { settings } from '@/_core/data/settings';
import { themeToggle } from './scripts/theme-toggle';

/* Components */
import { Icon } from '@/components/icons/Icons';

/* Theme toggle
   Note: everything for the toggle lives in this folder, so it can be removed by deleting it, <ThemeToggle /> and <ThemeToggleScript />.
   Note: ThemeToggleScript applies a saved theme in <head> before the first paint; this component only reads and changes it. */

/* localStorage can throw (e.g. blocked storage or some private browsing modes), so writes fail quietly */
const setStoredTheme = (theme: ThemeMode) => {
	try {
		localStorage.setItem(themeToggle.storageKey, theme);
	} catch {
		// Not saved, but still applied for this page view
	}
};

/* Start from the OS setting, or from the default theme if the tokens don't follow the OS (setting.theme.system) */
const systemQuery = `(prefers-color-scheme: ${settings.theme.alternate})`;
const getSystemTheme = (): ThemeMode => {
	const { alternate, default: defaultTheme, system } = settings.theme;
	return system && window.matchMedia(systemQuery).matches ? alternate : defaultTheme;
};

/* Current theme: data-theme if it's been set (saved or toggled), otherwise the OS / default theme */
const getTheme = (): ThemeMode => {
	const current = document.documentElement.getAttribute('data-theme');
	return current === 'light' || current === 'dark' ? current : getSystemTheme();
};

/* Update when data-theme changes or the OS preference changes */
const subscribe = (onChange: () => void) => {
	const observer = new MutationObserver(onChange);
	observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

	const mediaQuery = window.matchMedia(systemQuery);
	mediaQuery.addEventListener('change', onChange);

	return () => {
		observer.disconnect();
		mediaQuery.removeEventListener('change', onChange);
	};
};

export const ThemeToggle = () => {
	// Note: the server can't know the visitor's theme, so it renders the default theme and the browser corrects it right after hydration
	const theme = useSyncExternalStore(subscribe, getTheme, () => settings.theme.default);
	const toggleId = 'theme-toggle-choice';

	// Flip the theme, save it, and apply it immediately (the observer picks up the new data-theme)
	const toggleTheme = () => {
		const next: ThemeMode = theme === 'dark' ? 'light' : 'dark';
		setStoredTheme(next);
		document.documentElement.setAttribute('data-theme', next);
	};

	// Note: the label stays "Dark mode", since the switch's checked state tells screen readers whether it's on, and CSS shows the sun or moon icon from :checked
	return (
		<label className="theme-toggle pointer" htmlFor={toggleId}>
			<span className="theme-toggle-label sr-only">Dark mode</span>
			<input id={toggleId} className="theme-toggle-choice sr-only" checked={theme === 'dark'} onChange={toggleTheme} role="switch" type="checkbox" name="theme-toggle" />
			<Icon name={'sun'} size={'2xl'} />
			<Icon name={'moon'} size={'2xl'} />
		</label>
	);
};
