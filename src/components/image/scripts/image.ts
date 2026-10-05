export const image = {
	placeholder: '/assets/images/theme/placeholder.jpg',
	loading: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
	getErrorImage: (src: string) => {
		// Determine if error placeholder has been set
		return src == image.placeholder || src.includes(image.placeholder) ? image.loading : image.placeholder;
	},
};
