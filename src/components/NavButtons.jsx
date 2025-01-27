export default function NavButtons({ moveBack, moveForward = null }) {
  return (
    <div className="nav-buttons">
      <button type="button" onClick={moveBack}>
        Previous
      </button>
      {moveForward && (
        <button type="button" onClick={moveForward}>
          Next
        </button>
      )}
    </div>
  );
}
