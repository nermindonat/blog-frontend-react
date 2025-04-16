import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";
import Button from "../components/Button";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Ad Soyad alanı zorunludur.")
    .min(3, "Ad Soyad en az 3 karakter olmalıdır"),
  email: Yup.string()
    .email("Geçerli bir e-posta adresi giriniz")
    .required("E-posta alanı zorunludur."),
  phone: Yup.string()
    .required("Telefon numarası zorunludur.")
    .matches(/^[0-9]{10}$/, "Geçerli bir telefon numarası giriniz"),
  password: Yup.string()
    .required("Şifre alanı zorunludur.")
    .min(6, "Şifre en az 6 karakter olmalıdır")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      "Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir"
    ),
});

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
};

const RegisterPage = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form gönderildi:", values);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className="mb-6">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Yeni hesap oluşturun
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Zaten hesabınız var mı?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Giriş yapın
            </Link>
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6" noValidate>
              <Field
                name="fullName"
                component={Input}
                label="Ad Soyad"
                type="text"
                placeholder="Adınızı ve soyadınızı girin"
                required={true}
              />

              <Field
                name="email"
                component={Input}
                label="E-posta"
                type="email"
                placeholder="E-posta adresinizi girin"
                required={true}
              />

              <Field
                name="phone"
                component={Input}
                label="Telefon"
                type="tel"
                placeholder="Telefon numaranızı girin"
                required={true}
              />

              <Field
                name="password"
                component={Input}
                label="Şifre"
                type="password"
                placeholder="Şifrenizi girin"
                required={true}
              />

              <div>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Kaydediliyor..." : "Kayıt Ol"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
