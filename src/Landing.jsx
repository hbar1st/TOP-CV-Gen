function Landing({ charType, onSelect }) {
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
              onChange={(e) => onSelect(e.target.value)}
              type="radio"
              value="1"
              name="char-type"
              id="hero-character"
              checked={charType === "1"}
            />
            Hero
          </label>
          <label htmlFor="villain-character">
            <input
              onChange={(e) => onSelect(e.target.value)}
              type="radio"
              value="0"
              name="char-type"
              id="villain-character"
              checked={charType === "0"}
            />
            Villain
          </label>
        </fieldset>
      </main>
    </>
  );
}

export default Landing;
