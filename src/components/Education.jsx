import "../styles/Experience.css";
import deleteIcon from "../assets/delete.svg";
import moveUpIcon from "../assets/move-up.svg";
import moveDownIcon from "../assets/move-down.svg";
import addIcon from "../assets/add.svg";

function Education({
  educationList,
  isHero,
  updateEducationList,
  educationCount,
}) {
  console.log(educationList);

  function updateEducation(e) {
    const key = e.target.getAttribute("data-key");
    const value = e.target.value;
    const id = e.target.id;

    const newArr = [...educationList];
    console.log(newArr);
    for (let i = 0; i < newArr.length; i++) {
      console.log(newArr[i].key);
      if (newArr[i].key === +key) {
        const newObj = {
          ...newArr[i],
          default: false, //always set to false if any change is made
          [id]: value,
        };
        console.log("new object: ", newObj);
        newArr[i] = newObj; //targetted update, leaving the array untouched otherwise
      }
    }
    console.log("new array should be : ", newArr);
    updateEducationList(newArr);
  }

  function delEducation(key) {
    const newArr = educationList.filter((obj) => obj.key !== key);
    updateEducationList(newArr);
  }

  function addEducation() {
    console.log("count: ", educationCount.current);
    const newArr = [
      {
        key: educationCount.current,
        school: "",
        study: "",
        date: "",
      },
      ...educationList,
    ];
    educationCount.current += 1;
    console.log("new Arr after add: ", newArr);
    console.log("count after add: ", educationCount.current);
    updateEducationList(newArr);
  }

  function moveUpTheList(key) {
    let newArr = [];

    for (let i = 0; i < educationList.length; i++) {
      if (educationList[i].key === key) {
        const prevObj = newArr.pop();
        newArr.push(educationList[i]);
        newArr.push(prevObj);
      } else {
        newArr.push(educationList[i]);
      }
    }
    updateEducationList(newArr);
  }

  function moveDownTheList(key) {
    let newArr = [];

    for (let i = 0; i < educationList.length; i++) {
      if (educationList[i].key === key) {
        newArr.push(educationList[i + 1]);
        newArr.push(educationList[i]);
        i++;
      } else {
        newArr.push(educationList[i]);
      }
    }
    updateEducationList(newArr);
  }
  const list = educationList.map((education, index) => {
    console.log("re-render with education.key: ", education.key);
    return (
      <section className="education" key={education.key}>
        <button
          onClick={() => delEducation(education.key)}
          type="button"
          id="deleteIcon"
        >
          <img src={deleteIcon} alt="delete" />
        </button>
        {index > 0 && (
          <button
            onClick={() => moveUpTheList(education.key)}
            type="button"
            id="moveUpIcon"
          >
            <img src={moveUpIcon} alt="move up" />
          </button>
        )}
        {index < educationList.length - 1 && (
          <button
            onClick={() => moveDownTheList(education.key)}
            type="button"
            id="moveDownIcon"
          >
            <img src={moveDownIcon} alt="move down" />
          </button>
        )}
        <fieldset>
          <legend>Education Details</legend>

          <label htmlFor="title">
            School Name:
            <input
              name="school"
              type="text"
              id="school"
              value={education.school}
              data-key={education.key}
              onChange={updateEducation}
            />
          </label>
          <label htmlFor="desc">
            Field of Study:
            <input
              name="study"
              type="text"
              size="25"
              id="study"
              value={education.study}
              data-key={education.key}
              onChange={updateEducation}
            />
          </label>
          <label htmlFor="employer">
            Date Completed:
            <input
              name="date"
              type="date"
              id="date"
              value={education.date}
              data-key={education.key}
              onChange={updateEducation}
            />
          </label>
        </fieldset>
      </section>
    );
  });
  return (
    <section>
      <h2>Professional Education:</h2>
      <form>
        <button onClick={addEducation} id="add-icon" type="button" name="Add">
          Add
          <img src={addIcon} alt="add Education" />
        </button>
        {list}
      </form>
    </section>
  );
}

export default Education;
