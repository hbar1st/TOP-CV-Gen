function Landing({ isHero, onSelect }) {
  return (
    <>
      <header>
        <h1>Welcome to your CV generator!</h1>
      </header>
      <main>
        <fieldset>
          <p>Are you a hero or a villian?</p>
          <label htmlFor="hero-character">
            <input
              onChange={() => onSelect(true)}
              type="radio"
              value={isHero}
              name="char-type"
              id="hero-character"
              checked={isHero === true}
            />
            Hero
          </label>
          <label htmlFor="villain-character">
            <input
              onChange={() => onSelect(false)}
              type="radio"
              value={!isHero}
              name="char-type"
              id="villain-character"
              checked={isHero === false}
            />
            Villain
          </label>
        </fieldset>
      </main>
    </>
  );
}

export default Landing;
