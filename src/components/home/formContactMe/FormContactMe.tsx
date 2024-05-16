"use client";

import React, { useState } from "react";
import styles from "./FormContactMe.module.css";

const FormContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<boolean>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/919c4dd60ef842da985da8e62c1a9d13",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const result = await res.json();
      if (result.success === "true") {
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

  //   const getMessageByStatus = () => {
  //     switch (status) {
  //       case "success":
  //         return "¡Correo enviado exitosamente!";
  //       case "error":
  //         return "Error al enviar el correo. Por favor, intenta nuevamente.";
  //       default:
  //         return "";
  //     }
  //   };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.containerInputs}>
        <label htmlFor="email">Tu email</label>
        <span className={styles.spanInput}>
          <input
            type="email"
            id="email"
            autoComplete="off"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
      </div>
      <div className={styles.containerInputs}>
        <label htmlFor="name">Tu nombre</label>
        <span className={styles.spanInput}>
          <input
            type="text"
            id="name"
            autoComplete="off"
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </span>
      </div>
      <div className={styles.containerInputs}>
        <label htmlFor="message">Mensaje</label>
        <span className={styles.spanInput}>
          <textarea
            id="message"
            autoComplete="off"
            required
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </span>
      </div>
      <button type="submit" className={styles.button}>
        {isLoading ? "Enviando..." : "Enviar mensaje"}
      </button>
      <input type="hidden" name="_next" value="http://localhost:3000" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      {status === true ? (
        <div className={styles.statusMessageSuccess}>
          ¡Correo enviado exitosamente!
        </div>
      ) : status === false ? (
        <div className={styles.statusMessageError}>
          Error al enviar el correo. Por favor, intenta nuevamente.
        </div>
      ) : (
        <></>
      )}
    </form>
  );
};

export default FormContactMe;
