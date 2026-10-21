import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type {
  ReservationFormData,
  ReservationFormErrors,
} from "../../Data/interface";
import { Unread } from "reicon-react";
import { BookingTime, services, staff } from "../../Data/Data";

const ReservationForm = () => {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState<ReservationFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    baber: "",
    date: "",
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState<ReservationFormErrors>({});
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Validazione del form
  const validateForm = (): ReservationFormErrors => {
    const newErrors: ReservationFormErrors = {};

    // NAME
    if (!formData.name.trim()) {
      newErrors.name = t("booking.form.errors.nameRequired");
    }

    // EMAIL
    if (!formData.email.trim()) {
      newErrors.email = t("booking.form.errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = t("contact.form.errors.emailInvalid");
    }

    // PHONE
    if (!formData.phone.trim()) {
      newErrors.phone = t("booking.form.errors.phoneRequired");
    }

    // SERVICE
    if (!formData.service) {
      newErrors.service = t("booking.form.errors.serviceRequired");
    }

    // BARBER
    if (!formData.baber) {
      newErrors.baber = t("booking.form.errors.baberRequired");
    }

    // DATE
    if (!formData.date) {
      newErrors.date = t("booking.form.errors.dateRequired");
    }

    // TIME
    if (!formData.time) {
      newErrors.time = t("booking.form.errors.timeRequired");
    }

    return newErrors;
  };

  // Gestione cambiamenti nei campi
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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
      const updatedErrors: ReservationFormErrors = {};

      // NAME
      if (prevErrors.name) {
        updatedErrors.name = t("booking.form.errors.nameRequired");
      }

      // EMAIL
      if (prevErrors.email) {
        if (!formData.email.trim()) {
          updatedErrors.email = t("booking.form.errors.emailRequired");
        } else {
          updatedErrors.email = t("booking.form.errors.emailInvalid");
        }
      }

      // PHONE
      if (prevErrors.phone) {
        updatedErrors.phone = t("booking.form.errors.phoneRequired");
      }

      // SERVICE
      if (prevErrors.service) {
        updatedErrors.service = t("booking.form.errors.serviceRequired");
      }

      // BARBER
      if (prevErrors.baber) {
        updatedErrors.baber = t("booking.form.errors.baberRequired");
      }

      // DATE
      if (prevErrors.date) {
        updatedErrors.date = t("booking.form.errors.dateRequired");
      }

      // TIME
      if (prevErrors.time) {
        updatedErrors.time = t("booking.form.errors.timeRequired");
      }

      // MESSAGE
      if (prevErrors.message) {
        updatedErrors.message = t("booking.form.errors.messageRequired");
      }

      return updatedErrors;
    });
  }, [i18n.language, t, formData.email]);

  // Invio del form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validazione del form
    const validationErrors = validateForm();

    setErrors(validationErrors);

    // Se ci sono errori, interrompe l'invio
    if (Object.keys(validationErrors).length > 0) {
      setIsValidated(false);
      return;
    }

    try {
      setIsLoading(true);

      // Simulazione invio della prenotazione
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Prenotazione completata
      setIsValidated(true);

      // Reset del form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        baber: "",
        date: "",
        time: "",
        message: "",
      });

      // Reset degli errori
      setErrors({});
    } catch (error) {
      console.error("Errore durante l'invio della prenotazione:", error);
    } finally {
      setIsLoading(false);
    }

    console.log("Prenotazione valida:", formData);
  };
  useEffect(() => {
    console.log("isValidated aggiornato:", isValidated);
  }, [isValidated]);

  return (
    <section className="bg-main-bg w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
      {isValidated ? (
        <div className="flex flex-col w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-10 gap-4 justify-center items-center text-center border-t border-b border-secondary-font/20">
          <Unread
            className="text-effect w-9 h-9 sm:w-11 sm:h-11 shrink-0"
            size={45}
          />

          <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white font-main tracking-wider sm:tracking-widest max-w-full">
            {t("booking.form.successTitle")}
          </h3>

          <p className="font-secondary text-secondary-font tracking-wide sm:tracking-widest text-xs sm:text-sm max-w-md leading-relaxed">
            {t("booking.form.successMessage")}
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="w-full max-w-4xl mx-auto"
        >
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* NAME & EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* NAME */}
              <label className="flex flex-col gap-3 min-w-0">
                <span className="font-secondary text-white text-sm font-semibold">
                  {t("booking.form.name")}
                </span>

                <input
                  className="font-secondary text-white text-sm font-semibold border-b border-secondary-font/20 py-3 w-full min-w-0 bg-transparent outline-none focus:border-effect transition-colors"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("booking.form.namePlaceholder")}
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
              <label className="flex flex-col gap-3 min-w-0">
                <span className="font-secondary text-white text-sm font-semibold">
                  {t("booking.form.email")}
                </span>

                <input
                  className="font-secondary text-white text-sm font-semibold border-b border-secondary-font/20 py-3 w-full min-w-0 bg-transparent outline-none focus:border-effect transition-colors"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("booking.form.emailPlaceholder")}
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

            {/* PHONE & SERVICE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* PHONE */}
              <label className="flex flex-col gap-3 min-w-0">
                <span className="font-secondary text-white text-sm font-semibold">
                  {t("booking.form.phone")}
                </span>

                <input
                  className="font-secondary text-white text-sm font-semibold border-b border-secondary-font/20 py-3 w-full min-w-0 bg-transparent outline-none focus:border-effect transition-colors"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("booking.form.phonePlaceholder")}
                  aria-invalid={Boolean(errors.phone)}
                  disabled={isLoading}
                />

                {errors.phone && (
                  <span className="text-red-400 text-xs font-secondary">
                    {errors.phone}
                  </span>
                )}
              </label>

              {/* SERVICE */}
              <label className="flex flex-col gap-3 min-w-0">
                <span className="font-secondary text-white text-sm font-semibold">
                  {t("booking.form.service")}
                </span>

                <select
                  className="font-secondary text-sm font-semibold border-b border-secondary-font/20 py-3 w-full min-w-0 bg-transparent text-secondary-font outline-none focus:border-effect"
                  value={formData.service}
                  onChange={handleChange}
                  name="service"
                  aria-invalid={Boolean(errors.service)}
                  disabled={isLoading}
                >
                  <option value="">{t("booking.form.serviceDefault")}</option>

                  {services.map((service) => (
                    <option key={service.id} value={String(service.id)}>
                      {t(service.nameKey)} - €{service.price}
                    </option>
                  ))}
                </select>

                {errors.service && (
                  <span className="text-red-400 text-xs font-secondary">
                    {errors.service}
                  </span>
                )}
              </label>
            </div>

            {/* BARBER & DATE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* BARBER */}
              <label className="flex flex-col gap-3 min-w-0">
                <span className="font-secondary text-white text-sm font-semibold">
                  {t("booking.form.baber")}
                </span>

                <select
                  className="font-secondary text-sm font-semibold border-b border-secondary-font/20 py-3 w-full min-w-0 bg-transparent text-secondary-font outline-none focus:border-effect"
                  value={formData.baber}
                  onChange={handleChange}
                  name="baber"
                  aria-invalid={Boolean(errors.baber)}
                  disabled={isLoading}
                >
                  <option value="">{t("booking.form.baberDefault")}</option>

                  {staff.map((member) => (
                    <option key={member.id} value={String(member.id)}>
                      {member.name}
                    </option>
                  ))}
                </select>

                {errors.baber && (
                  <span className="text-red-400 text-xs font-secondary">
                    {errors.baber}
                  </span>
                )}
              </label>

              {/* DATE */}
              <label className="flex flex-col gap-3 min-w-0">
                <span className="font-secondary text-white text-sm font-semibold">
                  {t("booking.form.date")}
                </span>

                <input
                  className="font-secondary text-white text-sm font-semibold border-b border-secondary-font/20 py-3 w-full min-w-0 bg-transparent outline-none focus:border-effect transition-colors"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.date)}
                  disabled={isLoading}
                />

                {errors.date && (
                  <span className="text-red-400 text-xs font-secondary">
                    {errors.date}
                  </span>
                )}
              </label>
            </div>

            {/* TIME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-3 min-w-0">
                <span className="font-secondary text-white text-sm font-semibold">
                  {t("booking.form.time")}
                </span>

                <select
                  className="font-secondary text-sm font-semibold border-b border-secondary-font/20 py-3 w-full min-w-0 bg-transparent text-secondary-font outline-none focus:border-effect"
                  value={formData.time}
                  onChange={handleChange}
                  name="time"
                  aria-invalid={Boolean(errors.time)}
                  disabled={isLoading}
                >
                  <option value="">{t("booking.form.timeDefault")}</option>

                  {BookingTime.map((slot) => (
                    <option key={slot.id} value={slot.time}>
                      {slot.time}
                    </option>
                  ))}
                </select>

                {errors.time && (
                  <span className="text-red-400 text-xs font-secondary">
                    {errors.time}
                  </span>
                )}
              </label>
            </div>

            {/* MESSAGE */}
            <label className="flex flex-col gap-3 w-full">
              <span className="font-secondary text-white text-sm font-semibold">
                {t("booking.form.message")}
              </span>

              <textarea
                className="font-secondary text-sm font-semibold border-b border-secondary-font/20 py-3 w-full min-w-0 bg-transparent text-white outline-none focus:border-effect transition-colors resize-y"
                placeholder={t("booking.form.messagePlaceholder")}
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                aria-invalid={Boolean(errors.message)}
                disabled={isLoading}
              />

              {errors.message && (
                <span className="text-red-400 text-xs font-secondary">
                  {errors.message}
                </span>
              )}
            </label>

            {/* BUTTON */}
            <button
              className="font-secondary text-xs font-semibold w-full sm:w-48 py-4 px-5 bg-white cursor-pointer transition-all duration-200 hover:bg-effect disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="w-4 h-4 border-2 border-main-bg/30 border-t-main-bg rounded-full animate-spin" />
                  {t("booking.form.loading")}
                </span>
              ) : (
                t("booking.form.submit")
              )}
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default ReservationForm;
