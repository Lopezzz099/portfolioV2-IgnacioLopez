'use client'

import React, { useState } from "react";
import styles from "./FormContactMe.module.css";
import { useTranslations } from "next-intl";

const FormContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const t = useTranslations("SectionContactame");

  // Regex para validar el email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const validateForm = () => {
    let isValid = true;
    let errors = {
      name: "",
      email: "",
      message: "",
    };

    if (name.length < 3) {
      errors.name = t("errorNameLength");
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      errors.email = t("errorEmailInvalid");
      isValid = false;
    }

    if (message.length < 10) {
      errors.message = t("errorMessageLength");
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus(false);
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await res.json();
      if (result.success) {
        setStatus(true);
      } else {
        setStatus(false);
      }

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus(false);
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.containerInputs}>
        <label htmlFor="email">{t("email")}</label>
        <span className={styles.spanInput}>
          <input
            type="email"
            id="email"
            autoComplete="off"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? styles.inputError : ""}
          />
          {errors.email && (
            <span className={styles.errorText}>{errors.email}</span>
          )}
        </span>
      </div>
      <div className={styles.containerInputs}>
        <label htmlFor="name">{t("name")}</label>
        <span className={styles.spanInput}>
          <input
            type="text"
            id="name"
            autoComplete="off"
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? styles.inputError : ""}
          />
          {errors.name && (
            <span className={styles.errorText}>{errors.name}</span>
          )}
        </span>
      </div>
      <div className={styles.containerInputs}>
        <label htmlFor="message">{t("message")}</label>
        <span className={styles.spanInput}>
          <textarea
            id="message"
            autoComplete="off"
            required
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={errors.message ? styles.inputError : ""}
          ></textarea>
          {errors.message && (
            <span className={styles.errorText}>{errors.message}</span>
          )}
        </span>
      </div>
      <button type="submit" className={styles.button}>
        {isLoading ? t("loading") : t("send")}
      </button>
      {status === true ? (
        <div className={styles.statusMessageSuccess}>{t("success")}</div>
      ) : status === false ? (
        <div className={styles.statusMessageError}>{t("error")}</div>
      ) : (
        <></>
      )}
    </form>
  );
};

export default FormContactMe;

