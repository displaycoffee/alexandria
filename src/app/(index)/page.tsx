/* Styles */
import './styles/index.scss';

/* Components */
import { Icon } from '@/components/icons/Icons';

export default function Home() {
	return (
		<div>
			<Icon name={'house'} size={'2xl'} />
			<p>Hello</p>
		</div>
	);
}
