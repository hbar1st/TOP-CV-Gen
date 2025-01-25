function Experience({ experience, isHero, updateExperience }) {
  return (
    <section>
      <form className="data-form">
        <label htmlFor="experience">
          {isHero ? "Life Saving Experience:" : "Evil Deeds:"}
        </label>
      </form>
    </section>
  );
}

export default Experience;
