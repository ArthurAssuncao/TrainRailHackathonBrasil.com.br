import { useForm } from '@formspree/react';
import sendPlaneFill from '@iconify/icons-ri/send-plane-fill';
import { Icon } from '@iconify/react';
import classNames from 'classnames';
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { ptForm } from 'yup-locale-pt';
import styles from './ContactForm.module.scss';

Yup.setLocale(ptForm);

interface ContactFormProps {
  className?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormStatus {
  message: string;
  type: string;
}

interface ContactFormStatusProps {
  [key: string]: ContactFormStatus;
}

interface ResetForm {
  (): void;
}

const ContactForm = (props: ContactFormProps): JSX.Element => {
  const { className } = props;
  const intialValues = { name: '', email: '', message: '' };
  // const [formValues, setFormValues] = useState(intialValues);
  const [displayFormStatus, setDisplayFormStatus] = useState(false);
  const [formStatus, setFormStatus] = useState<ContactFormStatus>({
    message: '',
    type: '',
  });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [, handleSubmit] = useForm('mrgrylza');
  const { t } = useTranslation();
  const placeholderName = t('contactForm_field_name_helper');
  const placeholderEmail = t('contactForm_field_email_helper');
  const placeholderMessage = t('contactForm_field_message_helper');

  const formStatusProps: ContactFormStatusProps = {
    success: {
      message: t('contactForm_success_msg'),
      type: 'success',
    },
    error: {
      message: t('contactForm_error_msg'),
      type: 'error',
    },
  };

  const fieldsHelper = {
    name: t('contactForm_field_name_helper'),
    email: t('contactForm_field_email_helper'),
    message: t('contactForm_field_message_helper'),
  };

  const validation = Yup.object().shape({
    name: Yup.string().required(fieldsHelper.name),
    email: Yup.string().email().required(fieldsHelper.email),

    message: Yup.string().required(fieldsHelper.message),
  });

  const submitForm = async (data: ContactFormData, resetForm: ResetForm) => {
    console.log(data);
    try {
      const res = await handleSubmit(data);
      if (res) {
        setFormStatus(formStatusProps.success);
        resetForm();
      }
    } catch (error) {
      const response = error.response;
      if (response.data === 'user already exist' && response.status === 400) {
        setFormStatus(formStatusProps.duplicate);
      } else {
        setFormStatus(formStatusProps.error);
      }
    } finally {
      setDisplayFormStatus(true);
    }
  };

  const showFormStatus = (status: ContactFormStatus) => {
    if (status.type === 'error') {
      toast.error(formStatus.message);
    } else if (status.type === 'success') {
      toast.success(formStatus.message);
    } else {
      toast.warning(formStatus.message);
    }
    setDisplayFormStatus(false);
  };

  return (
    <Formik
      initialValues={intialValues}
      validationSchema={validation}
      onSubmit={(values: ContactFormData, actions) => {
        submitForm(values, actions.resetForm);
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 500);
      }}
    >
      {(props: FormikProps<ContactFormData>) => {
        const {
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          isSubmitting,
        } = props;

        return (
          <Form className={classNames(className, styles.container)}>
            <div className={styles.nameEmailWrapper}>
              <div className={styles.fieldWrapper}>
                <Field
                  type="text"
                  name="name"
                  value={values.name}
                  helperText={
                    errors.name && touched.name
                      ? errors.name
                      : fieldsHelper.name
                  }
                  placeholder={placeholderName}
                  error={errors.name && touched.name ? true : false}
                  data-error={errors.name && touched.name ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.nameField}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.fieldError}
                />
              </div>
              <div className={styles.fieldWrapper}>
                <Field
                  type="email"
                  name="email"
                  value={values.email}
                  helperText={
                    errors.email && touched.email
                      ? errors.email
                      : fieldsHelper.email
                  }
                  placeholder={placeholderEmail}
                  error={errors.email && touched.email ? true : false}
                  data-error={errors.email && touched.email ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.emailField}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.fieldError}
                />
              </div>
            </div>
            <div className={styles.fieldWrapper}>
              <Field
                as="textarea"
                name="message"
                value={values.message}
                rows={3}
                helperText={
                  errors.message && touched.message
                    ? errors.message
                    : fieldsHelper.message
                }
                placeholder={placeholderMessage}
                error={errors.message && touched.message ? true : false}
                data-error={errors.message && touched.message ? true : false}
                onChange={handleChange}
                onBlur={handleBlur}
                className={styles.messageField}
              />
              <ErrorMessage
                name="message"
                component="div"
                className={styles.fieldError}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              <Icon icon={sendPlaneFill} className={styles.submitButtonIcon} />
              <span className={styles.submitButtonText}>
                {t('contactForm_field_btn_send_msg')}
              </span>
            </button>
            <ToastContainer />
            {displayFormStatus && showFormStatus(formStatus)}
          </Form>
        );
      }}
    </Formik>
  );
};

export { ContactForm };
