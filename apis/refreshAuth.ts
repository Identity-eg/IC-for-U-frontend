import { client, setHeaderToken } from './client';

export const fetchNewToken = async () => {
  try {
    const { data } = await client.get('/auth/refresh');
    return data.accessToken;
  } catch (error) {
    return null;
  }
};


export const refreshAuth = async (failedRequest: any) => {
  const newToken = await fetchNewToken();
  if (newToken) {
    failedRequest.response.config.headers.Authorization = `Bearer ${newToken}`;
    setHeaderToken(newToken);
    return Promise.resolve(newToken);
  } else {
    return Promise.reject();
  }
};
