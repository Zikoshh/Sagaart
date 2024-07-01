import { signIn, signUp } from '../api';

interface submitHandlerProps {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
}

const submitHandler = ({
  firstName,
  lastName,
  password,
  email,
  phone,
}: submitHandlerProps) => {
  return signUp({
    firstName,
    lastName,
    password,
    email,
    phone,
  })
    .then(() => {
      signIn({ email, password })
        .then(({ auth_token }) => {
          localStorage.setItem('token', auth_token);
          localStorage.setItem('firstName', firstName);
          localStorage.setItem('lastName', lastName);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export { submitHandler };
