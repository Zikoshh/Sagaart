import { getUser, signIn } from '../api';

interface submitHandlerProps {
  email: string;
  password: string;
}

const submitHandler = ({ email, password }: submitHandlerProps) => {
  return signIn({ email, password })
    .then(({ auth_token }) => {
      localStorage.setItem('token', auth_token);
      getUser()
        .then(({ name, surname }) => {
          localStorage.setItem('firstName', name);
          localStorage.setItem('lastName', surname);
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
