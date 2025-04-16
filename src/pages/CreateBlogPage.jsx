import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    categories: [],
    image: null,
    imagePreview: null
  });

  const [newCategory, setNewCategory] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Predefined categories for selection
  const predefinedCategories = [
    'Bankacılık', 'Fintech', 'Dijital Dönüşüm', 'Ödeme Sistemleri', 
    'E-ticaret', 'POS', 'İşletme', 'Verimlilik', 'Güvenlik', 'KOBİ'
  ];

  // Generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'title') {
      setFormData({
        ...formData,
        title: value,
        slug: generateSlug(value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleContentChange = (e) => {
    setFormData({
      ...formData,
      content: e.target.value
    });
  };

  const handleCategoryAdd = () => {
    if (newCategory && !formData.categories.includes(newCategory)) {
      setFormData({
        ...formData,
        categories: [...formData.categories, newCategory]
      });
      setNewCategory('');
    }
  };

  const handlePredefinedCategorySelect = (category) => {
    if (!formData.categories.includes(category)) {
      setFormData({
        ...formData,
        categories: [...formData.categories, category]
      });
    }
  };

  const handleCategoryRemove = (categoryToRemove) => {
    setFormData({
      ...formData,
      categories: formData.categories.filter(category => category !== categoryToRemove)
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: file,
          imagePreview: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Başlık zorunludur';
    }
    
    if (!formData.excerpt.trim()) {
      newErrors.excerpt = 'Özet zorunludur';
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'İçerik zorunludur';
    }
    
    if (formData.categories.length === 0) {
      newErrors.categories = 'En az bir kategori seçmelisiniz';
    }
    
    if (!formData.image) {
      newErrors.image = 'Kapak resmi zorunludur';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Reset form after success
        setTimeout(() => {
          setFormData({
            title: '',
            slug: '',
            excerpt: '',
            content: '',
            categories: [],
            image: null,
            imagePreview: null
          });
          setIsSuccess(false);
        }, 3000);
      }, 1500);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Yeni Blog Yazısı Oluştur</h1>
        <p className="text-lg text-gray-600">Finans dünyası ile ilgili bilgi ve deneyimlerinizi paylaşın.</p>
      </div>

      {Object.keys(errors).length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Lütfen aşağıdaki hataları düzeltin:
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <ul className="list-disc pl-5 space-y-1">
                  {Object.keys(errors).map(key => (
                    <li key={key}>{errors[key]}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSuccess && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                Blog yazınız başarıyla oluşturuldu!
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Başlık <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`block w-full rounded-md border ${errors.title ? 'border-red-300' : 'border-gray-300'} px-4 py-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="Başlık giriniz"
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
              Özet <span className="text-red-500">*</span>
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows="2"
              className={`block w-full rounded-md border ${errors.excerpt ? 'border-red-300' : 'border-gray-300'} px-4 py-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="Blog yazısının kısa bir özetini girin (160-200 karakter)"
            ></textarea>
            {errors.excerpt && <p className="mt-1 text-sm text-red-600">{errors.excerpt}</p>}
            <p className="mt-1 text-xs text-gray-500">
              {formData.excerpt.length}/200 karakter
            </p>
          </div>
          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              İçerik <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleContentChange}
              rows="15"
              className={`block w-full rounded-md border ${errors.content ? 'border-red-300' : 'border-gray-300'} px-4 py-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="Blog içeriğinizi buraya yazın... HTML formatında yazabilirsiniz (<p>, <h2>, <ul> vb. taglar kullanılabilir)."
            ></textarea>
            {errors.content && <p className="mt-1 text-sm text-red-600">{errors.content}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kategoriler <span className="text-red-500">*</span>
            </label>

            <div className="mb-3">
              {formData.categories.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {formData.categories.map(category => (
                    <span key={category} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full flex items-center">
                      {category}
                      <button
                        type="button"
                        onClick={() => handleCategoryRemove(category)}
                        className="ml-1 text-blue-600 hover:text-blue-800 focus:outline-none"
                      >
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">Henüz kategori seçilmedi</p>
              )}
            </div>

            <div className="flex">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="flex-grow rounded-l-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Yeni kategori"
              />
              <button
                type="button"
                onClick={handleCategoryAdd}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Ekle
              </button>
            </div>
            <div className="mt-3">
              <p className="text-sm text-gray-500 mb-2">Önerilen kategoriler:</p>
              <div className="flex flex-wrap gap-2">
                {predefinedCategories.map(category => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handlePredefinedCategorySelect(category)}
                    className={`text-xs px-3 py-1 rounded-full ${
                      formData.categories.includes(category) 
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {errors.categories && <p className="mt-1 text-sm text-red-600">{errors.categories}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kapak Resmi <span className="text-red-500">*</span>
            </label>
            
            <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md ${errors.image ? 'border-red-300' : 'border-gray-300'}`}>
              {formData.imagePreview ? (
                <div className="text-center">
                  <img
                    src={formData.imagePreview}
                    alt="Preview"
                    className="mx-auto h-48 w-auto object-cover mb-4"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, image: null, imagePreview: null})}
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    Resmi Kaldır
                  </button>
                </div>
              ) : (
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="image-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Dosya Yükle</span>
                      <input
                        id="image-upload"
                        name="image-upload"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                    <p className="pl-1">veya sürükleyip bırakın</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF en fazla 5MB
                  </p>
                </div>
              )}
            </div>
            {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
          </div>
        </div>

        <div className="px-8 py-5 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
          <Link
            to="/"
            className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            İptal
          </Link>
          <button
            type="button"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Taslak Olarak Kaydet
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Yayınlanıyor...
              </>
            ) : (
              'Yayınla'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;



