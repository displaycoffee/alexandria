/* Scripts */
import { head } from '@/layout/head/scripts/head';

export const PreloadedStyles = () => {
	return <style id="preloaded-styles">{`${head.styles.fallbacks()}${head.styles.fonts()}`}</style>;
};
