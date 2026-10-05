/* Components */
import { ContainerSidebar } from '@/layout/container/Container';

/* Pages in this group show the sidebar next to their content */
/* Note: route groups don't change the url, so (sidebar)/page-one is still /page-one */
export default function SidebarLayout({ children }: LayoutProps<'/'>) {
	return <ContainerSidebar>{children}</ContainerSidebar>;
}
