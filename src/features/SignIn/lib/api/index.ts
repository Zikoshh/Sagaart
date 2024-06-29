const apiUrl = 'http://158.160.134.225';

interface signInProps {
  email: string;
  password: string;
}

const getResponse = async (res: Response) => {
  if (!res.ok) {
    return Promise.reject(await res.json());
  }

  return res.json();
};

const signIn = ({ email, password }: signInProps) => {
  return fetch(`${apiUrl}/users/auth/token/login/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  }).then(getResponse);
};

const getUser = () => {
  return fetch(`${apiUrl}/users/v1/users/me/`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  }).then(getResponse);
};

export { signIn, getUser };
