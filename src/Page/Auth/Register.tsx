import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import NavbarAuth from "../../components/NavbarAuth";
import { registerUser } from "../../services/authService";

const Register = () => {
  const { t } = useTranslation();

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Form registrazione

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);

    try {
      const data = await registerUser({
        fullName,
        email,
        password,
      });

      if (data.session) {
        setSuccessMessage("Account creato e accesso effettuato correttamente.");
      } else {
        setSuccessMessage(
          "Registrazione completata! Controlla la tua email per confermare l'account.",
        );
      }
    } catch (error: unknown) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Si è verificato un errore durante la registrazione.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavbarAuth />

      <div className="bg-main-bg w-full min-h-screen flex justify-center items-center px-4 py-16 sm:py-24 lg:py-30">
        <div className="flex flex-col justify-center gap-4 bg-main-bg w-full max-w-md min-h-128 border border-secondary-font/20 px-6 sm:px-10 py-8">
          <p className="font-secondary text-xs tracking-widest font-semibold text-effect">
            {t("register.adminLabel")}
          </p>

          <h3 className="text-3xl sm:text-4xl font-main text-white tracking-wider">
            {t("register.title")}
          </h3>

          <span className="font-secondary text-secondary-font tracking-wider text-sm">
            {t("register.description")}
          </span>

          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-4 text-white"
          >
            {/* FULL NAME */}
            <label className="flex flex-col gap-3">
              <span className="text-lg font-main text-white tracking-wider">
                Nome completo
              </span>

              <input
                className="bg-transparent border-b border-secondary-font/20 px-2 py-2 outline-none focus:border-effect"
                type="text"
                name="fullName"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                autoComplete="name"
                required
              />
            </label>

            {/* EMAIL */}
            <label className="flex flex-col gap-3">
              <span className="text-lg font-main text-white tracking-wider">
                {t("register.email")}
              </span>

              <input
                className="bg-transparent border-b border-secondary-font/20 px-2 py-2 outline-none focus:border-effect"
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
              />
            </label>

            {/* PASSWORD */}
            <label className="flex flex-col gap-3">
              <span className="text-lg font-main text-white tracking-wider">
                {t("register.password")}
              </span>

              <input
                className="bg-transparent border-b border-secondary-font/20 px-2 py-2 outline-none focus:border-effect"
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="new-password"
                minLength={8}
                required
              />
            </label>

            {/* ERROR MESSAGE */}
            {errorMessage && (
              <p role="alert" className="text-sm text-red-400">
                {errorMessage}
              </p>
            )}

            {/* SUCCESS MESSAGE */}
            {successMessage && (
              <p role="status" className="text-sm text-green-400">
                {successMessage}
              </p>
            )}

            <button
              className="bg-white text-black py-3 mt-2 transition-all duration-200 cursor-pointer hover:bg-effect hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              <span className="font-secondary tracking-wider text-xs font-semibold">
                {loading ? "Registrazione in corso..." : t("register.submit")}
              </span>
            </button>
          </form>

          <a
            href="/login"
            className="font-secondary text-sm tracking-wider text-secondary-font underline cursor-pointer transition-all duration-200 hover:text-white"
          >
            {t("register.loginPrompt")}
          </a>
        </div>
      </div>
    </>
  );
};

export default Register;
