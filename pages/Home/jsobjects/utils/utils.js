export default {
	setEnv: () => {
		const hostName = appsmith.URL.hostname;
		if (hostName === "localhost") {
			storeValue('URL_API', 'https://lms-api-dev.mindx.edu.vn/');
		} else {
			storeValue('URL_API', 'https://lms-api-dev.mindx.edu.vn/');
		}
		return appsmith.store.URL_API;
	},

	getCourses: async () => {
		const courses = await getCourses.run();
		if(!courses.data.courses) {
			navigateTo("Login");
		}
		return courses;
	}
}