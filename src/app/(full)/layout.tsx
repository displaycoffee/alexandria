/* Components */
import { ContainerFull } from '@/layout/container/Container';

/* Pages in this group use the full width, without the sidebar */
/* Note: route groups don't change the url, so (full)/page-two would still be /page-two */
export default function FullLayout({ children }: LayoutProps<'/'>) {
	return <ContainerFull>{children}</ContainerFull>;
}
