const apiUrl = 'http://158.160.134.225';

const getResponse = async (res: Response) => {
  if (!res.ok) {
    return Promise.reject(await res.json());
  }

  return res.json();
};

interface addToFavoritesProps {
  artName: string;
  artId: number;
  artPhoto: string;
  artistName: string;
}

interface removeFromFavoritesProps {
  artId: number;
}

const addToFavorites = ({
  artName,
  artId,
  artPhoto,
  artistName,
}: addToFavoritesProps) => {
  return fetch(`${apiUrl}/api/v1/artworks/favorite_arts/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      art_name: artName,
      artwork: artId,
      art_photo: artPhoto,
      artist_name: artistName,
    }),
  }).then(getResponse);
};

const removeFromFavorites = ({ artId }: removeFromFavoritesProps) => {
  return fetch(`${apiUrl}/api/v1/artworks/favorite_arts/`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      artwork: artId,
    }),
  }).then(getResponse);
};

export { addToFavorites, removeFromFavorites };
