const apiUrl = 'http://158.160.134.225';

interface getArtsProps {
  limit: string;
  offset: string;
}

const getResponse = async (res: Response) => {
  if (!res.ok) {
    return Promise.reject(await res.json());
  }

  return res.json();
};

const getArts = ({ limit, offset }: getArtsProps) => {
  return fetch(`${apiUrl}/api/v1/artworks/?limit=${limit}&offset=${offset}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
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

export { getArts, getFavoriteArts };
