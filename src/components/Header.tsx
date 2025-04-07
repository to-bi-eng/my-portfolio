"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 shadow-md w-full">
      <div className="mx-auto flex items-center justify-between px-6 py-3">
        {/* ロゴ */}
        <div className="text-2xl font-bold text-white">
          <Link href="/">
            <Image
              src="/homepage-logo.jpg"
              alt="HomePage-Logo"
              width={50}
              height={50}
              className="logo"
            />
          </Link>
        </div>

        {/* ハンバーガーメニュー（スマホ用） */}
        <div className="lg:hidden">
          <button className="text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* ナビゲーションメニュー（PC） */}
        <nav className="hidden lg:flex ml-out">
          <ul className="flex space-x-12 text-lg text-black-100">
            <li className="px-4">
              <a href="#" className="hover:text-blue-400 cursor-pointer">トップ</a>
            </li>
            <li className="px-4">
              <a href="#about_site" className="hover:text-blue-400 cursor-pointer">このサイトについて</a>
            </li>
            <li className="px-4">
              <a href="#about_me" className="hover:text-blue-400 cursor-pointer">著者について</a>
            </li>
            <li className="px-4">
              <a href="#hobbis" className="hover:text-blue-400 cursor-pointer">趣味</a>
            </li>
            <li className="px-4">
              <a href="#works" className="hover:text-blue-400 cursor-pointer">制作物</a>
            </li>
          </ul>
        </nav>

        {/* モバイル用メニュー（ハンバーガー展開時） */}
        {isOpen && (
          <div className="absolute top-16 right-6 bg-blue-300 text-black-100 p-4 rounded-lg shadow-md lg:hidden">
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-blue-400 cursor-pointer">トップ</a>
              </li>
              <li>
                <a href="#about_site" className="hover:text-blue-600 cursor-pointer">このサイトについて</a>
              </li>
              <li>
                <a  href="#about_me"className="hover:text-blue-400 cursor-pointer">著者について</a>
              </li>
              <li>
                <a href="#hobbis" className="hover:text-blue-400 cursor-pointer">趣味</a>
              </li>
              <li>
                <a href="#works" className="hover:text-blue-400 cursor-pointer">制作物</a>
              </li>
            </ul>
          </div>
        )}
        
      </div>
    </header>
  );
}