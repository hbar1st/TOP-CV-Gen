import "../styles/Header.css";

function ExperienceSection({ experienceList, isHero, charType, isFinale }) {
  let classNames = "";
  if (isFinale) {
    classNames += "finale ";
  }
  classNames += charType.toLowerCase();

  const list = experienceList.map((experience) => {
    console.log("experience.key : ", experience.key);
    return (
      <section key={experience.key}>
        <div className="experience-section">
          <div className="top-align">
            <p>
              {experience.startDate}
              {` - `}
              {experience.endDateCurrent ? "Current" : experience.endDate}
            </p>
            <span></span>
            <p>{experience.title}</p>
          </div>
          <div className="left-and-right">
            <div className="left-align">
              <p>{experience.employer}</p>
              <p>{experience.location}</p>
            </div>
            <div className="right-align">
              <p>{experience.desc}</p>
            </div>
          </div>
        </div>
      </section>
    );
  });

  return (
    <section className={classNames}>
      <h2>
        <span>Experience</span>
      </h2>

      {list}
    </section>
  );
}

export default ExperienceSection;
