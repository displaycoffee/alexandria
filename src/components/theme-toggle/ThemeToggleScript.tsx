/* Scripts */
import { themeToggle } from './scripts/theme-toggle';

/* Apply a saved theme before the first paint, so it doesn't flash the OS theme while the page loads */
/* Note: only a saved theme is set here; without one, the prefers-color-scheme rules in _root.scss follow the OS */
/* Note: localStorage can throw (e.g. blocked storage), so it fails quietly and falls back to the OS theme */
const script = `(function(){try{var t=localStorage.getItem(${JSON.stringify(themeToggle.storageKey)});if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export const ThemeToggleScript = () => {
	return <script dangerouslySetInnerHTML={{ __html: script }} />;
};
