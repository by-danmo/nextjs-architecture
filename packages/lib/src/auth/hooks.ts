import { useState } from "react";
import { authClient, signIn, signOut, signUp } from "./auth-client";

// TODO : use aaction event hook to contral loading, error

export function useSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (email: string, password: string) => {
    setError(null);

    try {
      const result = await signIn.email(
        {
          email,
          password,
        },
        {
          onRequest: () => setLoading(true),
        },
      );

      if (result.error) {
        setError(result.error.message || "Erreur de connexion");
        return { success: false, error: result.error.message };
      }

      return { success: true, data: result.data };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erreur de connexion";
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
}

export function useSignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const result = await signUp.email({
        name,
        email,
        password,
        callbackURL: "/",
      });

      if (result.error) {
        setError(result.error.message || "Erreur d'inscription");
        return { success: false, error: result.error.message };
      }

      return { success: true, data: result.data };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erreur d'inscription";
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
}

export function useForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submit = async (email: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Utiliser le plugin emailOTP pour envoyer le code OTP
      const result = await authClient.forgetPassword.emailOtp({
        email,
      });

      if (result.error) {
        setError(result.error.message || "Erreur lors de l'envoi du code");
        return {
          success: false,
          error: result.error.message,
        };
      }

      setSuccess(true);
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erreur lors de l'envoi du code";
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error, success };
}

export function useResetPassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submit = async (email: string, otp: string, password: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Utiliser le plugin emailOTP pour réinitialiser le mot de passe
      const result = await authClient.emailOtp.resetPassword({
        email,
        otp,
        password,
      });

      if (result.error) {
        setError(result.error.message || "Erreur lors de la réinitialisation");
        return {
          success: false,
          error: result.error.message,
        };
      }

      setSuccess(true);
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Erreur lors de la réinitialisation";
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error, success };
}

export function useVerifyOtp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submit = async (
    email: string,
    otp: string,
    type: "sign-in" | "email-verification" | "forget-password",
  ) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await authClient.emailOtp.checkVerificationOtp({
        email,
        otp,
        type,
      });

      if (result.error) {
        setError(result.error.message || "Code invalide");
        return {
          success: false,
          error: result.error.message,
        };
      }

      setSuccess(true);
      return { success: true };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Code invalide";
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error, success };
}

export function useSignOut() {
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    try {
      await signOut();
      return { success: true };
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : "Erreur de déconnexion",
      };
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading };
}
