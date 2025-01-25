function HeaderData({ data, isHero, setters }) {
  return (
    <section>
      <form>
        <label htmlFor="alias">
          Alias:
          <input
            type="text"
            name="alias"
            id="alias"
            value={data.name}
            onChange={(e) => setters.setName(e.target.value)}
          />
        </label>
      </form>
    </section>
  );
}

export default HeaderData;
