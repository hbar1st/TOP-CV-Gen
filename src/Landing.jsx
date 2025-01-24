import clark from "./assets/clark.jpeg";
import lex from "./assets/luthor.jpeg";

function Landing({ isHero, onSelect }) {
  return (
    <>
      <header>
        <h1>Welcome to your CV generator!</h1>
      </header>
      <main>
        <fieldset className="landing">
          <p>Are you a hero or a villian?</p>
          <div>
            <label htmlFor="hero-character" className="hero">
              <input
                onChange={() => onSelect(true)}
                type="radio"
                value={isHero}
                name="char-type"
                id="hero-character"
                checked={isHero === true}
              />
              Hero
              <img src={clark} alt="Clark Kent From SmallVille"></img>
            </label>
            <label htmlFor="villain-character" className="villain">
              <input
                onChange={() => onSelect(false)}
                type="radio"
                value={!isHero}
                name="char-type"
                id="villain-character"
                checked={isHero === false}
              />
              Villain
              <img src={lex} alt="Lex Luthor from SmallVille"></img>
            </label>
          </div>
        </fieldset>
      </main>
    </>
  );
}

export default Landing;
