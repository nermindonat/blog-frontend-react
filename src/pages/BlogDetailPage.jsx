import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  const blogDatabase = {
    "dijital-bankacilik-finans-dunyasinda-yeni-bir-cag": {
      id: 1,
      title: "Dijital Bankacılık: Finans Dünyasında Yeni Bir Çağ",
      slug: "dijital-bankacilik-finans-dunyasinda-yeni-bir-cag",
      author: "Mehmet Yılmaz",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "15 Mart 2024",
      readTime: "5 dk",
      categories: ["Bankacılık", "Dijital Dönüşüm", "Fintech"],
      image:
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      content: `
        <p class="mb-4">Dijital bankacılık, geleneksel bankacılık hizmetlerinin internet üzerinden veya mobil uygulamalar aracılığıyla sunulmasıdır. Son yıllarda teknolojik gelişmelerle birlikte dijital bankacılık hizmetleri hızla yaygınlaşmış ve finansal ekosistemin vazgeçilmez bir parçası haline gelmiştir.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Dijital Bankacılığın Sağladığı Avantajlar</h2>
        <p class="mb-4">Dijital bankacılık, müşteriler ve bankalar için birçok avantaj sunmaktadır:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">7/24 erişilebilirlik</li>
          <li class="mb-2">Düşük işlem maliyetleri</li>
          <li class="mb-2">Hızlı ve kolay işlem yapabilme</li>
          <li class="mb-2">Kişiselleştirilmiş bankacılık deneyimi</li>
          <li class="mb-2">Gelişmiş güvenlik önlemleri</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Dijital Bankacılıkta Yeni Trendler</h2>
        <p class="mb-4">Dijital bankacılık alanında son dönemde öne çıkan bazı trendler şunlardır:</p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">1. Açık Bankacılık (Open Banking)</h3>
        <p class="mb-4">Açık bankacılık, finansal verilerin güvenli bir şekilde paylaşılmasını sağlayan API'ler aracılığıyla üçüncü taraf uygulamaların banka verileriyle entegre olmasını sağlar. Bu, müşterilere daha geniş bir finansal hizmet yelpazesi sunar ve rekabeti artırır.</p>

        <h3 class="text-xl font-semibold mt-6 mb-3">2. Yapay Zeka ve Makine Öğrenimi</h3>
        <p class="mb-4">Yapay zeka ve makine öğrenimi, kişiselleştirilmiş müşteri deneyimi, dolandırıcılık tespiti ve risk yönetimi gibi alanlarda bankacılık sektöründe devrim yaratıyor.</p>

        <h3 class="text-xl font-semibold mt-6 mb-3">3. Dijital Cüzdanlar ve Mobil Ödemeler</h3>
        <p class="mb-4">Dijital cüzdanlar ve mobil ödeme sistemleri, nakit kullanımını azaltarak daha hızlı ve güvenli ödeme seçenekleri sunuyor. Bu trend, özellikle pandemi döneminde temassız ödeme ihtiyacıyla birlikte daha da hızlandı.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Güvenlik Zorlukları ve Çözümler</h2>
        <p class="mb-4">Dijital bankacılığın yaygınlaşmasıyla birlikte güvenlik endişeleri de artmıştır. Bankalar, müşteri verilerini korumak için şu önlemleri almaktadır:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Çok faktörlü kimlik doğrulama</li>
          <li class="mb-2">Biyometrik güvenlik önlemleri</li>
          <li class="mb-2">Gelişmiş şifreleme teknolojileri</li>
          <li class="mb-2">Gerçek zamanlı izleme ve dolandırıcılık tespiti</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Sonuç</h2>
        <p class="mb-4">Dijital bankacılık, finans dünyasını dönüştürmeye devam ediyor. Müşteriler için daha fazla kolaylık ve erişilebilirlik, bankalar için daha düşük maliyetler ve operasyonel verimlilik sağlıyor. Gelecekte, teknolojik gelişmelerle birlikte dijital bankacılık hizmetlerinin daha da gelişeceği ve yaygınlaşacağı öngörülmektedir.</p>
        <p class="mb-4">Bir sonraki yazımızda, dijital bankacılık alanındaki düzenlemeler ve müşteri gizliliği konularına daha detaylı değineceğiz. Takipte kalın!</p>
      `,
      relatedPosts: [
        "finansal-teknolojilerin-kobilere-sagladigi-avantajlar",
        "elektronik-odeme-sistemleri-ve-guvenlik",
      ],
    },
    "finansal-teknolojilerin-kobilere-sagladigi-avantajlar": {
      id: 2,
      title: "Finansal Teknolojilerin KOBİ'lere Sağladığı Avantajlar",
      slug: "finansal-teknolojilerin-kobilere-sagladigi-avantajlar",
      author: "Ayşe Demir",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "14 Mart 2024",
      readTime: "4 dk",
      categories: ["Fintech", "KOBİ", "İş Finansmanı"],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      content: `
        <p class="mb-4">Finansal teknolojiler (Fintech), küçük ve orta büyüklükteki işletmelerin (KOBİ) finansal operasyonlarını dönüştürmekte ve onlara daha önce sadece büyük şirketlerin erişebildiği avantajlar sunmaktadır. Bu yazıda, fintech çözümlerinin KOBİ'lere sağladığı önemli avantajları inceleyeceğiz.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">KOBİ'ler İçin Fintech Çözümlerinin Avantajları</h2>
        <p class="mb-4">Fintech çözümleri, KOBİ'lere aşağıdaki alanlarda önemli avantajlar sağlamaktadır:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Alternatif finansman kaynaklarına erişim</li>
          <li class="mb-2">Otomatikleştirilmiş finansal süreçler</li>
          <li class="mb-2">Maliyet tasarrufu</li>
          <li class="mb-2">Gelişmiş nakit akışı yönetimi</li>
          <li class="mb-2">Küresel pazarlara erişim kolaylığı</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">KOBİ'ler İçin Önemli Fintech Çözümleri</h2>
        <p class="mb-4">KOBİ'lerin yararlanabileceği başlıca fintech çözümleri şunlardır:</p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">1. Dijital Ödeme Sistemleri</h3>
        <p class="mb-4">Modern ödeme sistemleri, KOBİ'lerin müşterilerinden daha hızlı ödeme almalarını ve tedarikçilere ödemeleri daha verimli bir şekilde yapmalarını sağlar. Temassız ödemeler, QR kod ödemeleri ve sanal POS çözümleri, nakit akışı yönetimini kolaylaştırır.</p>

        <h3 class="text-xl font-semibold mt-6 mb-3">2. Bulut Tabanlı Muhasebe Yazılımları</h3>
        <p class="mb-4">Bulut tabanlı muhasebe çözümleri, işletmelerin finansal verilerini gerçek zamanlı olarak izlemelerine ve faturalandırma, vergi hesaplamaları gibi süreçleri otomatikleştirmelerine olanak tanır.</p>

        <h3 class="text-xl font-semibold mt-6 mb-3">3. Alternatif Finansman Platformları</h3>
        <p class="mb-4">Kitlesel fonlama, P2P krediler ve fatura finansmanı gibi alternatif finansman platformları, KOBİ'lerin geleneksel banka kredilerine bağımlılığını azaltır ve daha esnek finansman seçenekleri sunar.</p>
      `,
      relatedPosts: [
        "dijital-bankacilik-finans-dunyasinda-yeni-bir-cag",
        "elektronik-odeme-sistemleri-ve-guvenlik",
      ],
    },
    "elektronik-odeme-sistemleri-ve-guvenlik": {
      id: 3,
      title: "Elektronik Ödeme Sistemleri ve Güvenlik",
      slug: "elektronik-odeme-sistemleri-ve-guvenlik",
      author: "Ahmet Kaya",
      authorImage: "https://randomuser.me/api/portraits/men/64.jpg",
      date: "13 Mart 2024",
      readTime: "6 dk",
      categories: ["Ödeme Sistemleri", "Güvenlik", "E-ticaret"],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      content: `
        <p class="mb-4">Elektronik ödeme sistemleri, hem işletmeler hem de tüketiciler için finansal işlemleri daha hızlı ve kolay hale getirmiştir. Ancak bu kolaylık beraberinde güvenlik endişelerini de getirmektedir. Bu yazıda, elektronik ödeme sistemlerinin güvenliğini sağlamak için kullanılan teknolojileri ve en iyi uygulamaları inceleyeceğiz.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Elektronik Ödeme Sistemlerinin Türleri</h2>
        <p class="mb-4">Elektronik ödeme sistemleri çeşitli şekillerde karşımıza çıkabilir:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Kredi ve banka kartları</li>
          <li class="mb-2">Dijital cüzdanlar</li>
          <li class="mb-2">Mobil ödeme uygulamaları</li>
          <li class="mb-2">Temassız ödemeler</li>
          <li class="mb-2">Çevrimiçi ödeme ağları</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Elektronik Ödemelerde Güvenlik Zorlukları</h2>
        <p class="mb-4">Elektronik ödeme sistemlerinin karşılaştığı başlıca güvenlik zorlukları şunlardır:</p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">1. Veri İhlalleri</h3>
        <p class="mb-4">Ödeme bilgilerinin saklandığı veritabanlarına yapılan saldırılar, müşteri verilerinin çalınmasına neden olabilir. Bu tür ihlaller, finansal kayıplara ve itibar zararına yol açabilir.</p>

        <h3 class="text-xl font-semibold mt-6 mb-3">2. Kimlik Hırsızlığı</h3>
        <p class="mb-4">Kötü niyetli kişiler, kullanıcıların ödeme bilgilerini çeşitli yöntemlerle elde ederek sahte işlemler gerçekleştirebilir.</p>

        <h3 class="text-xl font-semibold mt-6 mb-3">3. Phishing Saldırıları</h3>
        <p class="mb-4">Sahte e-postalar veya web siteleri aracılığıyla kullanıcıların ödeme bilgilerini vermeye ikna etme girişimleri, en yaygın dolandırıcılık yöntemlerinden biridir.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Güvenliği Artırmak İçin Çözümler</h2>
        <p class="mb-4">Elektronik ödeme sistemlerinin güvenliğini artırmak için kullanılan başlıca teknolojiler ve yöntemler:</p>
        <div class="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
          <pre><code>
// Güvenlik Önlemleri
1. Tokenizasyon
2. Uçtan uca şifreleme (E2EE)
3. 3D Secure teknolojisi
4. Çok faktörlü kimlik doğrulama
5. Gerçek zamanlı dolandırıcılık tespiti
          </code></pre>
        </div>
      `,
      relatedPosts: [
        "dijital-bankacilik-finans-dunyasinda-yeni-bir-cag",
        "finansal-teknolojilerin-kobilere-sagladigi-avantajlar",
      ],
    },
    "modern-pos-cihazlari-ile-isletmenizde-verimliligi-artirin": {
      id: 4,
      title: "Modern POS Cihazları ile İşletmenizde Verimliliği Artırın",
      slug: "modern-pos-cihazlari-ile-isletmenizde-verimliligi-artirin",
      author: "Heranında",
      authorImage: "https://randomuser.me/api/portraits/men/22.jpg",
      date: "10 Mart 2024",
      readTime: "7 dk",
      categories: ["POS", "İşletme", "Verimlilik"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      content: `
        <p class="mb-4">Modern POS (Point of Sale) cihazları, günümüz işletmelerinin verimliliğini artırmada kritik rol oynamaktadır. Bu yazıda, Heranında POS cihazlarının sunduğu avantajlar, hızlı ödeme süreçleri, müşteri memnuniyeti ve işletme verimliliğini nasıl artırdığını detaylı olarak inceleyeceğiz.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Modern POS Cihazlarının Avantajları</h2>
        <p class="mb-4">Modern POS cihazları geleneksel yöntemlere göre birçok avantaj sunar:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Hızlı işlem yapabilme</li>
          <li class="mb-2">Minimum hata oranı</li>
          <li class="mb-2">Envanter takibi</li>
          <li class="mb-2">Müşteri ilişkileri yönetimi</li>
          <li class="mb-2">Detaylı raporlama ve analiz</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">İşletme Verimliliğini Artırma Yöntemleri</h2>
        <p class="mb-4">İşletmelerin verimliliğini artırmak için modern POS cihazlarını nasıl kullanabileceklerine dair bazı öneriler:</p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">1. Entegre Sistemler Kullanın</h3>
        <p class="mb-4">Modern POS cihazları, muhasebe yazılımları, e-ticaret platformları ve stok yönetim sistemleri ile entegre çalışabilir. Bu entegrasyonlar, veri girişindeki duplikasyonu azaltır ve işlemleri hızlandırır.</p>

        <h3 class="text-xl font-semibold mt-6 mb-3">2. Müşteri Deneyimini İyileştirin</h3>
        <p class="mb-4">Hızlı ödeme seçenekleri, temassız ödemeler ve mobil ödeme entegrasyonları ile müşterilerinize daha iyi bir alışveriş deneyimi sunabilirsiniz.</p>

        <h3 class="text-xl font-semibold mt-6 mb-3">3. Veri Analizinden Yararlanın</h3>
        <p class="mb-4">Modern POS sistemleri tarafından toplanan veriler, müşteri davranışları ve satış trendleri hakkında değerli bilgiler sağlar. Bu verileri analiz ederek işletmenizin güçlü ve zayıf yönlerini belirleyebilirsiniz.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Heranında POS Çözümleri</h2>
        <p class="mb-4">Heranında olarak sunduğumuz POS çözümleri, işletmenizin ihtiyaçlarına göre özelleştirilebilir. Fiziksel POS cihazlarımız, sanal POS çözümlerimiz ve mobil ödeme seçeneklerimiz ile işletmenize en uygun çözümü bulabilirsiniz.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Sonuç</h2>
        <p class="mb-4">Modern POS cihazları, işletmenizin verimliliğini artırmada önemli bir role sahiptir. Doğru POS çözümünü seçerek işlemlerinizi hızlandırabilir, müşteri memnuniyetini artırabilir ve işletmenizin büyümesine katkıda bulunabilirsiniz.</p>
        <p class="mb-4">Daha fazla bilgi için bizimle iletişime geçebilir, ihtiyaçlarınıza özel çözümler için danışabilirsiniz.</p>
      `,
      relatedPosts: [
        "finansal-teknolojilerin-kobilere-sagladigi-avantajlar",
        "elektronik-odeme-sistemleri-ve-guvenlik",
      ],
    },
  };

  useEffect(() => {
    if (slug && blogDatabase[slug]) {
      setBlog(blogDatabase[slug]);
      document.title = blogDatabase[slug].title;
    }
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Blog bulunamadı</h2>
          <p className="mt-2 text-gray-600">
            Aradığınız içerik mevcut değil veya yüklenemedi.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  // İlgili blog yazılarını alıyorum
  const relatedPosts = blog.relatedPosts
    ? blog.relatedPosts.map((postSlug) => blogDatabase[postSlug])
    : [];

  return (
    <div className="bg-white">
      <div className="relative h-96 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${blog.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16">
          <div className="flex items-center space-x-2 mb-4">
            {blog.categories.map((category, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium"
              >
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center">
            <img
              src={blog.authorImage}
              alt={blog.author}
              className="w-10 h-10 rounded-full mr-4 border-2 border-white"
            />
            <div className="text-white">
              <p className="font-medium">{blog.author}</p>
              <div className="flex items-center text-sm text-gray-300">
                <span>{blog.date}</span>
                <span className="mx-2">•</span>
                <span>{blog.readTime} okuma</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="prose lg:prose-lg mx-auto"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        <div className="flex items-center">
          <img
            src={blog.authorImage}
            alt={blog.author}
            className="w-16 h-16 rounded-full mr-6"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-900">Yazar Hakkında</h3>
            <p className="text-lg font-medium text-gray-900">{blog.author}</p>
            <p className="text-gray-600 mt-2">
              {blog.author}, finans ve ödeme teknolojileri konusunda uzmanlaşmış
              bir danışman ve yazardır. Modern finansal çözümler ve işletme
              verimliliği üzerine çeşitli yazılar yazıyor ve eğitimler veriyor.
            </p>
          </div>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              İlgili Yazılar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {relatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                >
                  <div className="h-48 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mt-auto">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                    >
                      Okumaya Git →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Tüm Blog Yazılarına Dön
        </Link>
      </div>
    </div>
  );
};

export default BlogDetailPage;

