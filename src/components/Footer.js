import InstagramIcon from "../Icon/InstagramIcon";
import PhoneIcon from "../Icon/PhoneIcon";
import TelegramIcon from "../Icon/TelegramIcon";
import ViberIcon from "../Icon/ViberIcon";

const Footer = () => {
  return (
    <div className="fixed  z-50 bg-zinc-300 shadow-xl h-24 justify-center flex flex-col bottom-0 w-screen px-5 ">
      <div className="flex container justify-between">
        <p>
          Хортицький район <br />
          міста Запоріжжя
          <br />
          <a className="flex gap-2.5" href="tel:0665323581">
            <PhoneIcon />
            0665323581
          </a>
        </p>
        <div className="flex gap-5 items-center">
          <p>
            <a
              rel="noreferrer"
              className="text-center"
              href="https://www.instagram.com/olesia.logoped/"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </p>
          <p>
            <a href="https://telegram.me/olesialogoped">
              <TelegramIcon />
            </a>
          </p>
          <p>
            <a href="viber://chat/?number=%2B380665323581">
              <ViberIcon />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
