import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavbarAuth from "../../components/NavbarAuth";
import { loginUser } from "../../services/authService";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage("");
    setLoading(true);

    try {
      await loginUser({ email, password });

      // Modifica "/" se hai una pagina riservata specifica.
      navigate("/");
    } catch (error: unknown) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Si è verificato un errore durante l'accesso.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavbarAuth />

      <main className="flex min-h-screen w-full items-center justify-center bg-main-bg px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center gap-4 bg-main-bg w-full max-w-md min-h-128 border border-secondary-font/20 px-6 sm:px-10 py-8">
          <p className="font-secondary text-xs tracking-widest font-semibold text-effect">
            {t("login.adminLabel")}
          </p>

          <h3 className="text-4xl sm:text-5xl font-main text-white tracking-wider">
            {t("login.title")}
          </h3>

          <span className="font-secondary text-secondary-font tracking-wider text-sm">
            {t("login.description")}
          </span>

          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4 text-white"
          >
            {/* EMAIL */}
            <label className="flex flex-col gap-3">
              <span className="text-lg font-main text-white tracking-wider">
                {t("login.email")}
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
                {t("login.password")}
              </span>

              <input
                className="bg-transparent border-b border-secondary-font/20 px-2 py-2 outline-none focus:border-effect"
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                required
              />
            </label>

            {/* ERROR MESSAGE */}
            {errorMessage && (
              <p role="alert" className="text-sm text-red-400">
                {errorMessage}
              </p>
            )}

            {/* SUBMIT */}
            <button
              className="bg-white py-3 mt-2 text-black transition-all duration-200 cursor-pointer hover:bg-effect hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              <span className="font-secondary tracking-wider text-xs font-semibold">
                {loading ? "Accesso in corso..." : t("login.submit")}
              </span>
            </button>
          </form>

          <a
            href="/register"
            className="font-secondary text-sm tracking-wider text-secondary-font underline cursor-pointer transition-all duration-200 hover:text-white"
          >
            {t("login.registerPrompt")}
          </a>
        </div>
      </main>
    </>
  );
};

export default Login;
