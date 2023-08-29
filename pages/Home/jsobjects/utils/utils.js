export default {
	setEnv: () => {
		const hostName = appsmith.URL.hostname;
		if (hostName === "localhost") {
			storeValue('URL_API', 'https://lms-api-dev.mindx.edu.vn/');
		} else {
			storeValue('URL_API', 'Link to production api');
		}

		return appsmith.store.URL_API;
	}
}