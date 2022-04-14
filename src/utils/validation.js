import * as yup from "yup";
import "yup-phone";
import { message } from "../common/validationMessage";
const validationSchema = yup.object({
  file: yup
    .mixed()
    .required(message.FILE_REQUIRED)
    .test("fileSize", message.FILE_SIZE, (values) => {
      return !values || values.size <= 2097152;
    })
    .test("fileType", message.FILE_TYPE, (values) => {
      return (
        !values ||
        (values !== null &&
          ["image/jpg", "image/jpeg", "image/png"].includes(values.type))
      );
    }),
  name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, message.NAME_ALPHABATE)
    .min(2, message.NAME_MIN_LENGHT)
    .max(15, message.NAME_MAX_LENGHT)
    .required(message.NAME_REQUIRED),
  email: yup
    .string()
    .email(message.EMAIL_INVALID)
    .required(message.EMAIL_REQUIRED),
  phone: yup
    .string()
    .phone(null, true, message.PHONE_INVALID)
    .required(message.PHONE_REQUIRED),
  password: yup
    .string()
    .min(8, message.PASSWORD_LENGHT)
    .required(message.PASSWORD_REQUIRED),
  confirmpassword: yup
    .string().required(message.CONFIRMPASSWORD_REQUIRED)
    .oneOf([yup.ref("password"), null], message.CONFIRMPASSWORD_MATCHED),
});

export default validationSchema;
