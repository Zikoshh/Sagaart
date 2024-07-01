const apiUrl = 'http://158.160.134.225';

const getResponse = async (res: Response) => {
  if (!res.ok) {
    return Promise.reject(await res.json());
  }

  return res.json();
};

const getArt = (artId: string) => {
  return fetch(`${apiUrl}/api/v1/artworks/${artId}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
};

export { getArt };
