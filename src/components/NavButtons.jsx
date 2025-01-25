export default function NavButtons({ moveBack, moveForward }) {
  return (
    <div className="nav-buttons">
      <button type="button" onClick={moveBack}>
        Previous
      </button>
      <button type="button" onClick={moveForward}>
        Next
      </button>
    </div>
  );
}
