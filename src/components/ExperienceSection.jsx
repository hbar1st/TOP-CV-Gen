import "../styles/Header.css";

function ExperienceSection({ experienceList, isHero, charType, isFinale }) {
  let classNames = "";
  if (isFinale) {
    classNames += "finale ";
  }
  classNames += charType.toLowerCase();

  const list = experienceList.map((experience) => {
    console.log("experience.key : ", experience.key);

    const respList = experience.responsibilities.map((resp) => {
      const key = Object.keys(resp)[0];

      return <li key={key}>{resp[key]}</li>;
    });
    return (
      <li key={experience.key}>
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
          <ul>{respList}</ul>
        </div>
      </li>
    );
  });

  return (
    <section className={classNames}>
      <h2>
        <span>Experience</span>
      </h2>
      <ul>{list}</ul>
    </section>
  );
}

export default ExperienceSection;
