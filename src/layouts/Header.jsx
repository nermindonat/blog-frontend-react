import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/image.png";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img className="h-8 w-auto" src={logo} alt="Heranında Logo" />
              <span className="ml-2 text-2xl font-bold text-blue-800">
                Heranında
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-gray-800 hover:text-blue-600 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-600"
            >
              Giriş Yap
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-gray-800 hover:text-blue-600 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-600"
            >
              Kayıt Ol
            </Link>
            <Link
              to="/create-blog"
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-200"
            >
              Blog Oluştur
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

