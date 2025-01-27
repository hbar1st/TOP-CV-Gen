import "../styles/Experience.css";
import deleteIcon from "../assets/delete.svg";
import moveUpIcon from "../assets/move-up.svg";
import moveDownIcon from "../assets/move-down.svg";
import addIcon from "../assets/add.svg";

function Experience({
  experienceList,
  isHero,
  updateExperienceList,
  experienceCount,
}) {
  console.log(experienceList);

  function updateExperience(e, checked = undefined) {
    const key = e.target.getAttribute("data-key");
    const value = checked ?? e.target.value;
    const id = e.target.id;

    console.log("try to update: ", experienceList[+key]);

    const newArr = [...experienceList];
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
    updateExperienceList(newArr);
  }

  function delExperience(key) {
    const newArr = experienceList.filter((obj) => obj.key !== key);
    updateExperienceList(newArr);
  }

  function addExperience() {
    console.log("count: ", experienceCount.current);
    const newArr = [
      {
        key: experienceCount.current,
        title: "",
        location: "",
        startDate: "",
        endDateCurrent: false,
        endDate: "",
        employer: "",
        desc: "",
        responsibilities: "",
      },
      ...experienceList,
    ];
    experienceCount.current += 1;
    console.log("new Arr after add: ", newArr);
    console.log("count after add: ", experienceCount.current);
    updateExperienceList(newArr);
  }

  function moveUpTheList(key) {
    let newArr = [];

    for (let i = 0; i < experienceList.length; i++) {
      if (experienceList[i].key === key) {
        const prevObj = newArr.pop();
        newArr.push(experienceList[i]);
        newArr.push(prevObj);
      } else {
        newArr.push(experienceList[i]);
      }
    }
    updateExperienceList(newArr);
  }

  function moveDownTheList(key) {
    let newArr = [];

    for (let i = 0; i < experienceList.length; i++) {
      if (experienceList[i].key === key) {
        newArr.push(experienceList[i + 1]);
        newArr.push(experienceList[i]);
        i++;
      } else {
        newArr.push(experienceList[i]);
      }
    }
    updateExperienceList(newArr);
  }

  function endDateSelector(experience) {
    return (
      <label htmlFor="endDate" className="disabled">
        End Date:
        <input
          name="endDate"
          type="date"
          id="endDate"
          value={experience.endDate}
          data-key={experience.key}
          onChange={updateExperience}
          disabled={experience.endDateCurrent}
        />
      </label>
    );
  }
  const list = experienceList.map((experience, index) => {
    console.log("re-render with experience.key: ", experience.key);
    return (
      <section className="experience" key={experience.key}>
        <button
          onClick={() => delExperience(experience.key)}
          type="button"
          id="deleteIcon"
        >
          <img src={deleteIcon} alt="delete" />
        </button>
        {index > 0 && (
          <button
            onClick={() => moveUpTheList(experience.key)}
            type="button"
            id="moveUpIcon"
          >
            <img src={moveUpIcon} alt="move up" />
          </button>
        )}
        {index < experienceList.length - 1 && (
          <button
            onClick={() => moveDownTheList(experience.key)}
            type="button"
            id="moveDownIcon"
          >
            <img src={moveDownIcon} alt="move down" />
          </button>
        )}
        <fieldset>
          <legend>Job Details</legend>

          <label htmlFor="title">
            Title:
            <input
              name="title"
              type="text"
              id="title"
              value={experience.title}
              data-key={experience.key}
              onChange={updateExperience}
            />
          </label>
          <label htmlFor="desc">
            Description:
            <input
              name="desc"
              type="text"
              size="25"
              id="desc"
              value={experience.desc}
              data-key={experience.key}
              onChange={updateExperience}
            />
          </label>
          <label htmlFor="employer">
            Employer:
            <input
              name="employer"
              type="text"
              id="employer"
              value={experience.employer}
              data-key={experience.key}
              onChange={updateExperience}
            />
          </label>
          <label htmlFor="location">
            Location:
            <input
              name="location"
              type="text"
              id="location"
              value={experience.location}
              data-key={experience.key}
              onChange={updateExperience}
            />
          </label>
          <label htmlFor="startDate">
            Start Date:
            <input
              name="startDate"
              type="date"
              id="startDate"
              value={experience.startDate}
              data-key={experience.key}
              onChange={updateExperience}
            />
          </label>
          <label htmlFor="endDateCurrent">
            End Date Current?
            <input
              type="checkbox"
              checked={experience.endDateCurrent}
              data-key={experience.key}
              onChange={(e) => updateExperience(e, e.target.checked)}
              name="endDateCurrent"
              id="endDateCurrent"
            />
          </label>
          {endDateSelector(experience)}
          <textarea name="details" id="details"></textarea>
        </fieldset>
      </section>
    );
  });
  return (
    <section>
      <h2>Professional Experience:</h2>
      <form>
        <button onClick={addExperience} id="add-icon" type="button" name="Add">
          Add
          <img src={addIcon} alt="add experience" />
        </button>
        {list}
      </form>
    </section>
  );
}

export default Experience;
