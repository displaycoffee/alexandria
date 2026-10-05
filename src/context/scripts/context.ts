/* Scripts */
import type { ContextValuesType } from './context-types';
import { theme } from '@/_core/scripts/theme';
import { utils, utilsBrowser } from '@/_core/scripts/utils';
import { variables } from '@/_core/scripts/variables';

/* Global context */
export const context: ContextValuesType = {
	theme,
	utils,
	utilsBrowser,
	variables,
};
