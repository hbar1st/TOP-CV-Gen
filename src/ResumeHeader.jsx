function ResumeHeader({ charType }) {
  return (
    <section className={charType.toLowerCase()}>
      <header>
        <h1>{charType}</h1>
      </header>
    </section>
  );
}

export default ResumeHeader;
