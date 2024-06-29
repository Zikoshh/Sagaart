const apiUrl = 'http://158.160.134.225';

interface signUpProps {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
}

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

const signUp = ({
  firstName,
  lastName,
  password,
  email,
  phone,
}: signUpProps) => {
  return fetch(`${apiUrl}/users/v1/users/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: firstName,
      surname: lastName,
      password: password,
      email: email,
      phone_number: phone,
    }),
  }).then(getResponse);
};

const signIn = ({ email, password }: signInProps) => {
  return fetch(`${apiUrl}/users/auth/token/login/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(getResponse);
};

export { signUp, signIn };
