import "../styles/Header.css";

function ExperienceSection({ experienceList, isHero, charType }) {
  const list = experienceList.map((experience) => {
    return (
      <section key={experience.key}>
        {experience.startDate} - {experience.endDate}
        {experience.title}
        {experience.desc}
        {experience.location}
        {experience.employer}
      </section>
    );
  });

  return (
    <section className={charType.toLowerCase()}>
      <h2>
        <span>Experience</span>
      </h2>

      {list}
    </section>
  );
}

export default ExperienceSection;
