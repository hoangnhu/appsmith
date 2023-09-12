export default {
	setEnv: async () => {
		const getEnvQuery = await getEnv.run();
		if(getEnvQuery.length > 0) {
			storeValue('BASE_API_URL_LMS', getEnvQuery[0].BASE_API_URL_LMS);
			storeValue('BASE_API_URL', getEnvQuery[0].BASE_API_URL);
			storeValue('BASE_WEB_URL', getEnvQuery[0].BASE_WEB_URL);
		}
		return appsmith.store.BASE_WEB_URL;
	},

	setTokenHash: async () => {
		storeValue('TOKEN_HASH', appsmith.URL.queryParams.token_hash);
		return appsmith.store.TOKEN_HASH;
	},

	setAuthToken: async () => {
		const getCustomTokenResult = await getCustomToken.run();
		if (getCustomTokenResult?.errors && getCustomTokenResult?.errors[0].extensions.code === 'NOT_AUTHENTICATED') {
			storeValue('CUSTOM_TOKEN', '');
			// navigateTo(appsmith.store.BASE_WEB_URL);	
		} else {
			storeValue('CUSTOM_TOKEN', getCustomToken.data.data.users.getCustomToken.customToken);
		}
		return appsmith.store.CUSTOM_TOKEN;
	},

	verifyCustomToken: async () => {
		const getTokenResult = await verifyCustomToken.run();
		if (getTokenResult) {
			storeValue('TOKEN', getTokenResult.idToken);
		}
		return appsmith.store.TOKEN;
	}
}