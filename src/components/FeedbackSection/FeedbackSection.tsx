"use client"; 

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import styles from './FeedbackSection.module.scss';
import { apiClient, ApiError } from '../../shared/api/client';
import feedbackSvg from "../../../public/feedback.svg"

interface IFeedbackForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  agreement: boolean;
}

export default function FeedbackSection() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFeedbackForm>();

  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit: SubmitHandler<IFeedbackForm> = async (data) => {
    setSuccessMessage('');
    try {
      await apiClient('/feedbacks', {
        method: 'POST',
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      setSuccessMessage('Ваша заявка успешно отправлена!');
      reset(); 
    } catch (err) {
      const error = err as ApiError;
      
      if (error.status === 422 && error.errors) {
        Object.keys(error.errors).forEach((key) => {
          setError(key as keyof IFeedbackForm, {
            type: 'server',
            message: error.errors![key][0], 
          });
        });
      } else {
        alert('Произошла ошибка при отправке. Попробуйте позже.');
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <Image
              src={feedbackSvg}
              alt="Feedback Icon"
              width={85}
              height={85}
              className={styles.feedbackIcon}
            />
            <h2 className={styles.title}>
              Расскажите
              <br />о вашем проекте<span className={styles.colon}>:</span>
            </h2>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputsGrid}>
              <div className={styles.inputWrapper}>
                <input
                  id="name"
                  type="text"
                  placeholder="Ваше имя*"
                  className={styles.input}
                  {...register("name", { required: "Это поле обязательно" })}
                />
                <label htmlFor="name" className={styles.staticLabel}>
                  Ваше имя*
                </label>
                {errors.name && (
                  <span className={styles.errorText}>
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className={styles.inputWrapper}>
                <input
                  id="email"
                  type="email"
                  placeholder="Email*"
                  className={styles.input}
                  {...register("email", {
                    required: "Это поле обязательно",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Неверный формат email",
                    },
                  })}
                />
                <label htmlFor="email" className={styles.staticLabel}>
                  Email*
                </label>
                {errors.email && (
                  <span className={styles.errorText}>
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className={styles.inputWrapper}>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Телефон*"
                  className={styles.input}
                  {...register("phone", { required: "Это поле обязательно" })}
                />
                <label htmlFor="phone" className={styles.staticLabel}>
                  Телефон*
                </label>
                {errors.phone && (
                  <span className={styles.errorText}>
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                placeholder="Сообщение*"
                className={styles.textarea}
                {...register("message", { required: "Это поле обязательно" })}
              />
              <label htmlFor="message" className={styles.staticLabel}>
                Сообщение*
              </label>
              {errors.message && (
                <span className={styles.errorText}>
                  {errors.message.message}
                </span>
              )}
            </div>

            <div className={styles.footerForm}>
              <label className={styles.desktopAgreement}>
                <input
                  type="checkbox"
                  className={styles.customCheckbox}
                  {...register("agreement")}
                />
                <span className={styles.checkboxText}>
                  Согласие на обработку персональных данных
                </span>
              </label>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "Обсудить проект"}
              </button>

              <span className={styles.mobileAgreement}>
                Нажимая “Отправить”, Вы даете согласие на обработку персональных
                данных.
              </span>
            </div>

            {errors.agreement && (
              <span className={styles.errorText}>
                {errors.agreement.message}
              </span>
            )}
            {successMessage && (
              <div className={styles.successText}>{successMessage}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}