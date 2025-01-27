import "../styles/Header.css";

function EducationSection({ educationList, isHero, charType, isFinale }) {
  const list = educationList.map((education) => {
    console.log("education.key : ", education.key);
    return (
      <section key={education.key}>
        {education.school}
        {education.study}
        {education.date}
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
