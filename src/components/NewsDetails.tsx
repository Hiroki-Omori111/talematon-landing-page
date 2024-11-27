import React, { useState } from 'react';
import { Calendar, ChevronRight, ArrowLeft, Building2, Users, PenTool, Newspaper } from 'lucide-react';

// ニュースの一覧データ
const allNews = [
  {
    id: 1,
    category: "イベント",
    date: "2024.03.20",
    title: "○○県との連携プロジェクト始動！地域の隠れた名所を発掘するイベントを開催",
    excerpt: "○○県と連携し、地域の隠れた名所を発掘するプロジェクトを開始します。地元の学生やクリエイターと協力し、新しい観光スポットの創出を目指します。",
    content: `○○県と連携し、地域の隠れた名所を発掘するプロジェクトを開始します。

    【プロジェクトの概要】
    ・期間：2024年4月〜2024年9月
    ・対象エリア：○○県全域
    ・参加者：地元学生、クリエイター、地域住民
    
    【主な活動内容】
    1. 地域の隠れた名所の発掘
    2. 地元クリエイターによる作品制作
    3. 観光モデルコースの作成
    4. SNSを活用した情報発信
    
    【参加方法】
    下記の参加フォームよりお申し込みください...`,
    type: "government",
    image: "/api/placeholder/800/400"
  },
  {
    id: 2,
    category: "メディア",
    date: "2024.03.15",
    title: "創作活動を通じた地域活性化の取り組みが○○新聞で紹介されました",
    excerpt: "当プラットフォームを活用した創作活動による地域活性化の取り組みが、○○新聞の文化面で紹介されました。",
    type: "media",
    image: "/api/placeholder/800/400"
  },
  // ... 他のニュース記事
];

// ニュース一覧ページ
const NewsListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'すべて' },
    { id: 'government', label: '自治体連携' },
    { id: 'creator', label: 'クリエイター' },
    { id: 'media', label: 'メディア' },
    { id: 'event', label: 'イベント' }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? allNews 
    : allNews.filter(news => news.type === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-6 h-6" />
            </a>
            <h1 className="text-2xl font-bold">ニュース</h1>
          </div>
        </div>
      </div>

      {/* カテゴリーフィルター */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category.id 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* ニュース一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNews.map(news => (
            <a
              key={news.id}
              href={`/news/${news.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    news.type === 'government' ? 'bg-blue-100 text-blue-600' :
                    news.type === 'creator' ? 'bg-purple-100 text-purple-600' :
                    news.type === 'media' ? 'bg-green-100 text-green-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {news.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {news.date}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{news.excerpt}</p>
                <span className="text-blue-500 hover:text-blue-600 inline-flex items-center text-sm">
                  続きを読む
                  <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// ニュース詳細ページ
const NewsDetailPage = ({ newsId }: { newsId: string }) => {
  const news = allNews.find(n => n.id === parseInt(newsId));
  
  if (!news) return <div>記事が見つかりません</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <a href="/news" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-6 h-6" />
            </a>
            <span className="text-gray-400">ニュース</span>
          </div>
        </div>
      </div>

      {/* 記事本文 */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  news.type === 'government' ? 'bg-blue-100 text-blue-600' :
                  news.type === 'creator' ? 'bg-purple-100 text-purple-600' :
                  news.type === 'media' ? 'bg-green-100 text-green-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {news.category}
                </span>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-5 h-5 mr-2" />
                  {news.date}
                </div>
              </div>
              
              <h1 className="text-3xl font-bold mb-6">{news.title}</h1>
              
              <div className="prose max-w-none">
                {news.content?.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>

              {/* 関連情報 */}
              <div className="mt-12">
                <h2 className="text-xl font-bold mb-4">関連情報</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Building2 className="w-6 h-6 text-blue-500 mr-3" />
                    <div>
                      <h3 className="font-medium">自治体の方へ</h3>
                      <p className="text-sm text-gray-600">連携についての詳細はこちら</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <PenTool className="w-6 h-6 text-purple-500 mr-3" />
                    <div>
                      <h3 className="font-medium">クリエイターの方へ</h3>
                      <p className="text-sm text-gray-600">参加方法について</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewsListPage, NewsDetailPage };