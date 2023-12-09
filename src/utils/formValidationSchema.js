import * as Yup from 'yup';

const nameRegexp = /^[A-Za-zА-Яа-яіІїЇєЄґҐ'\s-]+$/;
// const phoneRegexp = /^\+[0-9]*$/;

export const formValidationSchema = () =>
  Yup.object({
    name: Yup.string()
      .trim()
      .required("* Ім'я обов'язкове")
      .min(3, "* Ім'я має містити не менше 3 символів")
      .max(70, "* Ім'я має містити не більше 70 символів")
      .matches(
        nameRegexp,
        '* Ім`я може містити тільки літери, пробіл, апостроф та тире',
      ),
    phone: Yup.string()
      .trim()
      .required("* Телефон обов'язковий")
      .min(11, '* Телефон закороткий, має містити + на початку та 11 цифр')
      .max(12, '* Телефон задовгий,  має містити + на початку та 12 цифр'),
    // .matches(
    //   phoneRegexp,
    //   '* Телефон некоректний, має містити + на початку та 12 цифр',
    // ),
    message: Yup.string()
      .trim()
      .required("* Повідомлення обов'язковий")
      .min(3, '* Повідомлення має містити не менше 3 символів')
      .max(500, '* Повідомлення має містити не більше 500 символів'),
  }).required();