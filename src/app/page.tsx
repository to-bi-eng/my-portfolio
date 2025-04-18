import Image from "next/image";
import TravelSlider from "../components/TravelSlider";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-green w-full">
      <div className="relative w-screen h-[480px]">
        <Image
          src="/photo1.jpg" // publicフォルダ内の画像パス
          alt="My Travel Picture"
          fill
          className="object-cover" //画像の縦横比を維持してカバー
        />
      </div>

      {/* タイトル */}
      <div className="w-full overflow-hidden">
        <h1 className="title font-bold text-left mb-4 whitespace-nowrap px-6">Welcome to <br /> My Portfolio!</h1>
      </div>

      <section id="about_site">
        <h2  className="mini_title text-blue-400 pt-4 underline text-center">About this site</h2>
        <p className="text-1xl py-20 px-6 text-center">
          ここはしがない大学生とびたのポートフォリオサイトです。<br />
          今回はNext.js、Typescriptの知識を深めるためにこのサイトを作成しました。<br />
          見に来てくださったあなたに、私のことを知ってもらえるように作ったので、ゆっくり見ていってください。
        </p>
      </section>

      {/* 自己紹介 */}
      <section id="about_me">
        <div className="max-w-8xl mx-auto text-center">
          <h2 className="mini_title text-blue-400 pt-4 underline">About me</h2>
          <p className="text-1xl py-20">
            富山県出身の情報工学科の大学生。<br />
          </p>
          <ul className="list-disc text-left mx-auto max-w-[255] mb-2">
            <li className="text-lg transition-all duration-1000 opacity-100 transition-y-0 text-1xl mb-1">＜大学で学んでいること＞</li>
            <li className="text-lg transition-all duration-1000 opacity-100 transition-y-0">・プログラミング</li>
            <li className="text-lg transition-all duration-1000 opacity-100 transition-y-0">・コンピュータサイエンス</li>
            <li className="text-lg transition-all duration-1000 opacity-100 transition-y-0">・コンピュータアーキテクチャ</li>
            <li className="text-lg transition-all duration-1000 opacity-100 transition-y-0">・IoT</li>
            <li className="text-lg transition-all duration-1000 opacity-100 transition-y-0">・情報セキュリティ</li>
            <li className="text-lg transition-all duration-1000 opacity-100 transition-y-0">・SDGs</li>
            <li className="text-lg transition-all duration-1000 opacity-100 transition-y-0">・ITを用いた市の問題解決方法</li>
          </ul>
        </div>
      </section>

      {/* 趣味 */}
      <section id="hobbis">
        <h2 className="mini_title text-blue-400 pt-4 underline text-center">Hobbis</h2>
        <p className="text-1xl py-20 px-6 text-center">旅行が好きで、大学の長期休暇には彼女と一緒に国内の観光地をめぐっています。</p>
        <TravelSlider />
      </section>

      {/* 成果物 */}
      <section id="works">
        <h2 className="mini_title text-blue-400 py-20 underline text-center">Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 section-wrapper">
          <div className="bg-blue-100 text-center py-20 px-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-2 px-4">自己紹介ホームページ</h3>
            <p className="py-1">自己紹介をしているサイトです。</p>
            <a href="https://my-portfolio-phi-six-31.vercel.app" className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 inline-block transition duration-300">Visit Work</a>
          </div>
          <div className="bg-blue-100 text-center py-20 px-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-2">メモアプリ</h3>
            <p className="py-1">入力した文字を表形式で表示されるメモアプリです。</p>
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg py-2 px-4 inline-block transition duration-300">Visit Work</a>
          </div>
        </div>
      </section>
    </div>
  );
}