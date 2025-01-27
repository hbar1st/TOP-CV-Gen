import "../styles/Header.css";

function EducationSection({ educationList, isHero, charType, isFinale }) {
  const list = educationList.map((education) => {
    console.log("education.key : ", education.key);
    return (
      <section key={education.key}>
        <div className="education-section">
          <div className="top-align">
            <p>{education.date}</p>
            <span></span>
            <p>{education.study}</p>
          </div>
          <div className="left-and-right">
            <div className="left-align"></div>
            <div className="right-align">{education.school}</div>
          </div>
        </div>
      </section>
    );
  });
  let classNames = "";
  if (isFinale) {
    classNames += "finale ";
  }
  classNames += charType.toLowerCase();

  return (
    <section className={classNames}>
      <h2>
        <span>Education</span>
      </h2>

      {list}
    </section>
  );
}

export default EducationSection;
