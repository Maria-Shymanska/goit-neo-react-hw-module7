import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";

import css from "./ContactForm.module.css";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items); // Отримання списку контактів із Redux
  const fieldContactId = useId();
  const fieldNumberId = useId();

  const handleSubmit = (values, actions) => {
    // Перевірка на дублювання
    const isDuplicate = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === values.name.toLowerCase() ||
        contact.number === values.number
    );

    if (isDuplicate) {
      alert(`Контакт з таким ім'ям або номером вже існує!`);
      return;
    }

    // Додавання нового контакту
    dispatch(addContact({ name: values.name, number: values.number }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={fieldContactId}>
          Name
          <Field
            id={fieldContactId}
            className={css.field}
            type="text"
            name="name"
          />
          <ErrorMessage className={css.err} name="name" component="span" />
        </label>
        <label className={css.label} htmlFor={fieldNumberId}>
          Number
          <Field
            id={fieldNumberId}
            className={css.field}
            type="tel"
            name="number"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
