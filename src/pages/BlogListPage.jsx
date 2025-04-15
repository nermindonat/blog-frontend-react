import React from "react";
import { Link } from "react-router-dom";

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9çğıöşü\s-]/g, '')
    .replace(/[çÇğĞıİöÖşŞüÜ]/g, c => ({'ç':'c','Ç':'c','ğ':'g','Ğ':'g','ı':'i','İ':'i','ö':'o','Ö':'o','ş':'s','Ş':'s','ü':'u','Ü':'u'}[c]||c))
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const BlogListData = () => {
  const blogs = [
    {
      id: 1,
      title: "Dijital Bankacılık: Finans Dünyasında Yeni Bir Çağ",
      excerpt:
        "Dijital bankacılık hizmetlerinin gelişimi ve finansal ekosistem üzerindeki dönüştürücü etkisi.",
      author: "Mehmet Yılmaz",
      date: "15 Mart 2024",
      readTime: "5 dk",
      image:
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Finansal Teknolojilerin KOBİ'lere Sağladığı Avantajlar",
      excerpt:
        "Modern fintech çözümleri, küçük ve orta ölçekli işletmelere nasıl rekabet avantajı sağlıyor?",
      author: "Ayşe Demir",
      date: "14 Mart 2024",
      readTime: "4 dk",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "Elektronik Ödeme Sistemleri ve Güvenlik",
      excerpt:
        "E-ticaret ve fiziksel mağazalarda ödeme güvenliğini artıran yöntemler ve teknolojiler.",
      author: "Ahmet Kaya",
      date: "13 Mart 2024",
      readTime: "6 dk",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      title: "Modern POS Cihazları ile İşletmenizde Verimliliği Artırın",
      excerpt:
        "Modern POS cihazlarının işletmenizde verimliliği nasıl artıracağına dair kapsamlı bir rehber.",
      author: "Heranında",
      date: "10 Mart 2024",
      readTime: "7 dk",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9FF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Finans Blogumuz
          </h1>
          <p className="text-xl text-gray-600">
            Finansal hizmetler dünyasındaki son gelişmeleri ve önemli bilgileri
            keşfedin
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
                  {blog.readTime}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{blog.author}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.date}</span>
                </div>

                <Link to={`/blog/${slugify(blog.title)}`} className="block">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                    {blog.title}
                  </h2>
                </Link>

                <p className="text-gray-600 mb-4">{blog.excerpt}</p>

                <Link
                  to={`/blog/${slugify(blog.title)}`}
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 inline-block"
                >
                  Devamını Oku →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListData;


