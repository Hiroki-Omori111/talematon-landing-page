import React, { useState } from "react";
import {
  MapPin,
  Heart,
  PenTool,
  Users,
  Building2,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import NewsList from "../components/NewsList";

const LandingPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <MapPin className="w-12 h-12 text-blue-500" />,
      title: "思い出の場所を共有",
      description:
        "特別な場所での経験や思い出を位置情報とともに記録。あなたの思い出が、誰かの新しい発見につながります。",
    },
    {
      icon: <PenTool className="w-12 h-12 text-purple-500" />,
      title: "創作の舞台を探索",
      description:
        "小説、イラスト、音楽など、場所にインスパイアされた作品を共有。新しい創作の可能性が広がります。",
    },
    {
      icon: <Building2 className="w-12 h-12 text-green-500" />,
      title: "地域の魅力を再発見",
      description:
        "懐かしいレトロスポットや隠れた名所を通じて、地域の新たな魅力を発掘。地方の物語を次世代へ。",
    },
  ];

  const news = [
    {
      category: "イベント",
      date: "2024.03.20",
      title:
        "○○県との連携プロジェクト始動！地域の隠れた名所を発掘するイベントを開催",
      type: "government",
    },
    {
      category: "メディア",
      date: "2024.03.15",
      title: "創作活動を通じた地域活性化の取り組みが○○新聞で紹介されました",
      type: "media",
    },
    {
      category: "コラボ",
      date: "2024.03.10",
      title: "人気クリエイター○○氏とのコラボレーション企画を開始",
      type: "creator",
    },
    {
      category: "募集",
      date: "2024.03.05",
      title: "地方創生に興味のある学生インターン募集中！",
      type: "student",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* ヒーローセクション */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            場所の心を紡いでいく。
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            思い出を残そう。創作を生み出そう。地域の魅力を再発見しよう。
          </p>
          {/* <button className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors">
            いますぐ始める
          </button> */}
        </div>
      </div>

      {/* 特徴セクション */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NewsList news={news} />

      {/* 利用者セクション */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            こんな方におすすめ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <Heart className="w-8 h-8 text-red-500 mx-auto" />
              <h3 className="font-semibold mt-4">思い出作りが好きな方</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto" />
              <h3 className="font-semibold mt-4">探索が好きな方</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <PenTool className="w-8 h-8 text-purple-500 mx-auto" />
              <h3 className="font-semibold mt-4">創作活動をする方</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <Sparkles className="w-8 h-8 text-yellow-500 mx-auto" />
              <h3 className="font-semibold mt-4">新しい体験を求める方</h3>
            </div>
          </div>
        </div>
      </div>

      {/* 地域活性化セクション */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              地域の未来をともに作る
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow">
                <Building2 className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4">
                  地方自治体の皆様へ
                </h3>
                <p className="text-gray-600">
                  地域の隠れた魅力を発信し、新しい観光体験を創出。若い世代の興味関心を引き付け、地域の活性化につなげます。
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <Users className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4">
                  施設運営者の皆様へ
                </h3>
                <p className="text-gray-600">
                  思い出の場所としての価値を再発見。クリエイターとのコラボレーションで、新しい魅力を創出します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA セクション */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">現在サービス準備中</h2>
          <p className="text-xl mb-8">2025年初旬リリース予定</p>
          {/* <button className="bg-white text-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            無料で始める
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
