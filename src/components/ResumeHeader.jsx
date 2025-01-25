import "../styles/header.css";
import heroEmailIcon from "../assets/email.svg";
import heroPhoneIcon from "../assets/phone-booth.svg";
import villainEmailIcon from "../assets/villain-email.svg";
import villainPhoneIcon from "../assets/villain-phone.svg";
import leftCurveLine from "../assets/left-curve.svg";
import rightCurveLine from "../assets/right-curve.svg";

import leftVillainLine from "../assets/villain-left-line.svg";
import rightVillainLine from "../assets/villain-right-line.svg";

function ResumeHeader({ data, isHero, charType }) {
  console.log(data);
  return (
    <section className={charType.toLowerCase()}>
      <header className="flex">
        <div>
          <h1>{data.name}</h1>
          <CharacterType isHero={isHero} charType={charType} />
        </div>
        <div className="contact-grid">
          <p>
            <a href={data.email}>{data.email}</a>
          </p>

          <img src={isHero ? heroEmailIcon : villainEmailIcon} alt="email" />
          <p>{data.phone}</p>
          <img
            src={isHero ? heroPhoneIcon : villainPhoneIcon}
            alt="phone-booth"
          />
        </div>
      </header>
    </section>
  );
}

function CharacterType({ isHero, charType }) {
  if (isHero) {
    return (
      <div className="flex">
        <img src={leftCurveLine} />
        <h2 className="hero-highlight">{charType}</h2>
        <img src={rightCurveLine} />
      </div>
    );
  } else {
    return (
      <div className="flex">
        <img src={leftVillainLine} />
        <h2 className="villain-highlight">{charType}</h2>
        <img src={rightVillainLine} />
      </div>
    );
  }
}

export default ResumeHeader;
