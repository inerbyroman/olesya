import { useState } from "react";

const Home = () => {
  const [firstDiploma, setFirstDiploma] = useState(false);
  const [secondDiploma, setSecondDiploma] = useState(false);

  return (
    <div className="container">
      <h2 className="text-white italic my-8 text-5xl text-center font-black text-black">
        Вітаю!
      </h2>
      <h2 className="text-white italic my-8 text-4xl text-center font-black text-black">
        Мене звати Олеся, і я - логопед.
      </h2>
      <h2 className="text-white italic mb-4 text-4xl text-center font-black text-black">
        Якщо ваша дитина :
      </h2>
      <ul className="marker:text-black list-disc pl-5 space-y-3 text-slate-500">
        <li className="tracking-wide">
          {`не вимовляє звук або групу звуків:
          (свистячі[С,С',З,З'Ц,Цʼ] шиплячі [Ш,Ж,Ч,Щ] сонори [Р,Р',Л,Л']`}
        </li>
        <li>{`плутає звуки [С-Ш],[Ж-З] та інші;`}</li>
      </ul>

      <h2 className="text-white my-8 italic text-4xl text-center font-black text-black">
        Пропоную Вам цікаві логопедичні заняття, на яких ми :
      </h2>
      <ul className="marker:text-black list-disc pl-5 space-y-3 text-slate-500">
        <li className="tracking-wide">
          проведемо комплексну диференціальну діагностику мовлення;
        </li>
        <li className="tracking-wide">
          поставимо та автоматизуємо відсутні звуки;
        </li>
        <li className="tracking-wide">
          навчимось робити артикуляційну гімнастику;
        </li>
        <li className="tracking-wide">
          будемо розвивати мовленнєве диханняб фоннематичний слух та дрібну
          моторику;
        </li>
        <li className="tracking-wide">
          покращемо не тільки мовлення, а пам'ять, увагу, уяву та мислення;
        </li>
        <li className="tracking-wide">онлайн заняття або офлайн заняття.</li>
      </ul>
      {/* <Slider /> */}
      {/* <div className="container mt-8 flex">
        <div className="w-1/2 flex my-auto">
          <ul className="marker:text-black list-disc pl-5 space-y-3 text-slate-500">
            <li className="tracking-wide">офлайн заняття.</li>
          </ul>
        </div>
        <div className="w-1/2 flex mt-8 justify-end right-0">
          <img
            className="w-64"
            src="/picture/Picsart_22-12-25_12-45-56-417.png"
            alt=""
          ></img>
        </div>
      </div> */}
      <div className="flex justify-evenly container py-8">
        <div
          onClick={() => {
            setFirstDiploma(!firstDiploma);
          }}
          className={`bg-black text-white flex items-center justify-center -rotate-6 transition-all  duration-700 ${
            firstDiploma
              ? "fixed rotate-0 w-64 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
              : "w-32 sm:w-44 md:w-60 h-40 sm:h-60 md:h-80"
          }`}
        >
          <p> ДИПЛОМ</p>
        </div>
        <div
          onClick={() => {
            setSecondDiploma(!secondDiploma);
          }}
          className={`bg-black text-white flex items-center justify-center rotate-6 transition-all  duration-700 ${
            secondDiploma
              ? "fixed rotate-0 w-64 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
              : "w-32 sm:w-44 md:w-60 h-40 sm:h-60 md:h-80"
          }`}
        >
          <p> ДИПЛОМ</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
