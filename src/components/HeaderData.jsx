function HeaderData({ data, isHero, setters }) {
  return (
    <section>
      <form className="data-form">
        <label htmlFor="alias">
          {isHero ? "Alias:" : "Name:"}
          <input
            type="text"
            id="alias"
            value={data.name}
            onChange={(e) => setters.setName(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          {isHero ? "Email:" : "Tor Mail:"}
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => setters.setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="phone">
          {isHero ? "Phone #:" : "Dark Line #:"}
          <input
            type="phone"
            id="phone"
            value={data.phone}
            onChange={(e) => setters.setPhone(e.target.value)}
          />
        </label>
      </form>
    </section>
  );
}

export default HeaderData;
