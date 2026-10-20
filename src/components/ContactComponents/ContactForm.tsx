import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { ContactFormData, ContactFormErrors } from "../../Data/interface";
import { Unread } from "reicon-react";

const ContactForm = () => {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Validazione del form
  const validateForm = (): ContactFormErrors => {
    const newErrors: ContactFormErrors = {};

    // NAME
    if (!formData.name.trim()) {
      newErrors.name = t("contact.form.errors.nameRequired");
    }

    // EMAIL
    if (!formData.email.trim()) {
      newErrors.email = t("contact.form.errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = t("contact.form.errors.emailInvalid");
    }

    // SUBJECT
    if (!formData.subject.trim()) {
      newErrors.subject = t("contact.form.errors.subjectRequired");
    }

    // MESSAGE
    if (!formData.message.trim()) {
      newErrors.message = t("contact.form.errors.messageRequired");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("contact.form.errors.messageMinLength");
    }

    return newErrors;
  };

  // Gestione cambiamenti nei campi
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Rimuove l'errore del campo mentre l'utente lo corregge
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    setIsValidated(false);
  };

  // Aggiornamento degli errori quando cambia lingua
  useEffect(() => {
    setErrors((prevErrors) => {
      const updatedErrors: ContactFormErrors = {};

      if (prevErrors.name) {
        updatedErrors.name = t("contact.form.errors.nameRequired");
      }

      if (prevErrors.email) {
        if (!formData.email.trim()) {
          updatedErrors.email = t("contact.form.errors.emailRequired");
        } else {
          updatedErrors.email = t("contact.form.errors.emailInvalid");
        }
      }

      if (prevErrors.subject) {
        updatedErrors.subject = t("contact.form.errors.subjectRequired");
      }

      if (prevErrors.message) {
        if (!formData.message.trim()) {
          updatedErrors.message = t("contact.form.errors.messageRequired");
        } else {
          updatedErrors.message = t("contact.form.errors.messageMinLength");
        }
      }

      return updatedErrors;
    });
  }, [i18n.language, t, formData.email, formData.message]);

  // Invio del form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setIsValidated(false);
      return;
    }

    try {
      setIsLoading(true);

      // Simulazione invio del messaggio
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsValidated(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Errore durante l'invio:", error);
    } finally {
      setIsLoading(false);
    }

    console.log("Form valido:", formData);

    // Qui puoi collegare il servizio per inviare il messaggio
  };

  useEffect(() => {
    console.log("isValidated aggiornato:", isValidated);
  }, [isValidated]);

  return (
    <section className="bg-main-bg lg:w-full py-30 lg:pb-50 px-10 gap-4">
      {isValidated ? (
        <div className="flex flex-col w-full sm:py-20 px-4 sm:px-6 lg:px-10 gap-4 justify-center items-center text-center lg:border-t lg:border-b lg:border-secondary-font/20">
          <Unread
            className="text-effect w-9 h-9 sm:w-11 sm:h-11 shrink-0"
            size={45}
          />

          <h3 className="text-4xl sm:text-4xl lg:text-5xl text-white font-main tracking-wider sm:tracking-widest max-w-full">
            {t("contact.form.successTitle")}
          </h3>

          <p className="font-secondary text-secondary-font tracking-wide sm:tracking-widest text-xs sm:text-sm max-w-md leading-relaxed">
            {t("contact.form.successMessage")}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-8">
            {/* NAME & EMAIL */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* NAME */}
              <label className="flex flex-col gap-4">
                <span className="font-secondary text-white text-sm font-semibold">
                  {t("contact.form.name")}
                </span>

                <input
                  className="font-secondary text-white text-sm font-semibold border-b py-2 w-80"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.form.namePlaceholder")}
                  aria-invalid={Boolean(errors.name)}
                  disabled={isLoading}
                />

                {errors.name && (
                  <span className="text-red-400 text-xs font-secondary">
                    {errors.name}
                  </span>
                )}
              </label>

              {/* EMAIL */}
              <label className="flex flex-col gap-4">
                <span className="font-secondary text-white text-sm font-semibold">
                  {t("contact.form.email")}
                </span>

                <input
                  className="font-secondary text-white text-sm font-semibold border-b py-2 w-80"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.form.emailPlaceholder")}
                  aria-invalid={Boolean(errors.email)}
                  disabled={isLoading}
                />

                {errors.email && (
                  <span className="text-red-400 text-xs font-secondary">
                    {errors.email}
                  </span>
                )}
              </label>
            </div>

            {/* SUBJECT */}
            <div>
              <label className="flex flex-col gap-4">
                <span className="font-secondary text-white text-sm font-semibold">
                  {t("contact.form.subject")}
                </span>

                <input
                  className="font-secondary text-white text-sm font-semibold border-b py-2 w-full"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("contact.form.subjectPlaceholder")}
                  aria-invalid={Boolean(errors.subject)}
                  disabled={isLoading}
                />

                {errors.subject && (
                  <span className="text-red-400 text-xs font-secondary">
                    {errors.subject}
                  </span>
                )}
              </label>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="flex flex-col gap-4">
                <span className="font-secondary text-white text-sm font-semibold">
                  {t("contact.form.message")}
                </span>

                <textarea
                  className="font-secondary text-white text-sm font-semibold border-b py-2 w-full"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.messagePlaceholder")}
                  aria-invalid={Boolean(errors.message)}
                  disabled={isLoading}
                />

                {errors.message && (
                  <span className="text-red-400 text-xs font-secondary">
                    {errors.message}
                  </span>
                )}
              </label>
            </div>

            {/* BUTTON */}
            <button
              className="font-secondary text-xs font-semibold w-40 py-4 px-5 bg-white cursor-pointer transition-all duration-200 hover:bg-effect disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="w-4 h-4 border-2 border-main-bg/30 border-t-main-bg rounded-full animate-spin" />
                  INVIO IN CORSO...
                </span>
              ) : (
                t("contact.form.submit")
              )}
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
