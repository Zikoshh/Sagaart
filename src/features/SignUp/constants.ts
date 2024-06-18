const logoSize = {
  width: '111px',
  height: '132px',
};

const title =
  'Зарегистрируйтесь, чтобы покупать и продавать художественные шедевры';

const styles = {
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(37, 37, 37, 0.7)',
  },
  container: {
    padding: '60px',
    borderRadius: '4px',
    maxWidth: '880px',
    maxHeight: '90%',
    backgroundColor: 'white',
    position: 'relative',
    overflow: 'auto',
  },
  title: {
    color: '#010101',
    fontSize: '36px',
    fontWeight: '400',
    lineHeight: '50.4px',
    maxWidth: '550px',
  },
};

const selectData = {
  defaultValue: 'Да/Нет',
  options: ['Да', 'Нет'],
};

const signUpButton = {
  text: 'Регистрация',
  bgColor: '#252525',
  padding: '16px 0',
  fontSize: '24px',
  lineHeight: '33.6px',
  width: '100%',
  color: 'white',
};

const orText = 'или';

const checkboxText =
  'Создавая аккаунт, вы соглашаетесь с Условиями и Политикой конфиденциальности Saagart';

const appleButton = {
  text: 'Продолжить с Apple',
  bgColor: 'white',
  padding: '16px 0',
  fontSize: '24px',
  lineHeight: '33.6px',
  width: '100%',
  color: '#252525',
  borderColor: '#757575',
};

const googleButton = {
  text: 'Продолжить с Google',
  bgColor: 'white',
  padding: '16px 0',
  fontSize: '24px',
  lineHeight: '33.6px',
  width: '100%',
  color: '#252525',
  borderColor: '#757575',
};

const yetFirstPart = 'Есть аккаунт?';

const yetSecondPart = 'Вход';

export {
  logoSize,
  title,
  styles,
  selectData,
  signUpButton,
  orText,
  checkboxText,
  appleButton,
  googleButton,
  yetFirstPart,
  yetSecondPart,
};
