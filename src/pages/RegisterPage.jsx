import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from '../components/Input';
import Button from '../components/Button';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-4 text-center text-2xl font-bold text-gray-900">
            Yeni Hesap Oluşturun
          </h2>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <Input
            label="Ad Soyad"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Adınızı ve soyadınızı girin"
            error={errors.fullName}
            required
          />
          <Input
            label="E-posta"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-posta adresinizi girin"
            error={errors.email}
            required
          />
          <Input
            label="Telefon"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Telefon numaranızı girin"
            error={errors.phone}
            required
          />
          <Input
            label="Şifre"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Şifrenizi girin"
            error={errors.password}
            required
          />
          <div className="mt-6">
            <Button type="submit">
              Kayıt Ol
            </Button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Zaten hesabınız var mı?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Giriş yapın
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

