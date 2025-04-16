import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";
import Button from "../components/Button";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli bir e-posta adresi giriniz")
    .required("E-posta adresi gereklidir"),
  password: Yup.string()
    .required("Şifre gereklidir")
    .min(6, "Şifre en az 6 karakter olmalıdır"),
});

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const LoginPage = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form gönderildi:", values);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className="mb-6">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Hesabınıza giriş yapın
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Veya{" "}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              yeni hesap oluşturun
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
                name="email"
                component={Input}
                label="E-posta"
                type="email"
                placeholder="E-posta adresinizi girin"
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

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Field
                    type="checkbox"
                    name="rememberMe"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Beni hatırla
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to="/sifremi-unuttum"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Şifremi unuttum
                  </Link>
                </div>
              </div>

              <div>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Giriş yapılıyor..." : "Giriş Yap"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Veya şununla devam et
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
            >
              <img
                className="h-5 w-5 mr-2"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
              />
              Google
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
            >
              <img
                className="h-5 w-5 mr-2"
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook logo"
              />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
