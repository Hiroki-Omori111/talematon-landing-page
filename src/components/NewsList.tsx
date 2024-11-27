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

type NewsItem = {
  category: string;
  date: string;
  title: string;
  type: string;
};

type NewsListProps = {
  news: NewsItem[];
};

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">News</h2>
          <p className="text-gray-600">
            最新の取り組みやイベント情報をお届けします
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.type === "government"
                        ? "bg-blue-100 text-blue-600"
                        : item.type === "creator"
                        ? "bg-purple-100 text-purple-600"
                        : item.type === "student"
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 inline-flex items-center"
                >
                  詳しく見る
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
          >
            ニュース一覧を見る
            <ChevronRight className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
