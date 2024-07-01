const apiUrl = 'http://158.160.134.225';

const getResponse = async (res: Response) => {
  if (!res.ok) {
    return Promise.reject(await res.json());
  }

  return res.json();
};

const getFavoriteArts = () => {
  return fetch(`${apiUrl}/api/v1/artworks/favorite_arts/`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  }).then(getResponse);
};

export { getFavoriteArts };
