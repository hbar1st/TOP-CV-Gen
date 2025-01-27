import "../styles/Experience.css";
import delRespIcon from "../assets/delResp.svg";
import addRespIcon from "../assets/addResp.svg";
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

  function updateJobResp(e, jobKey) {
    const key = e.target.getAttribute("data-key");
    const value = e.target.value;

    const newArr = [];
    for (let i = 0; i < experienceList.length; i++) {
      if (experienceList[i].key === +jobKey) {
        //found the job, now find the specific responsibility within it
        const newRespArr = [];
        for (let j = 0; j < experienceList[i].responsibilities.length; j++) {
          const respKey = Object.keys(experienceList[i].responsibilities[j])[0];
          if (respKey === key) {
            newRespArr.push({ [respKey]: value });
          } else {
            newRespArr.push(experienceList[i].responsibilities[j]);
          }
        }

        const newExp = { ...experienceList[i], responsibilities: newRespArr };
        newArr.push(newExp);
      } else {
        newArr.push(experienceList[i]);
      }
    }

    console.log("new array should be : ", newArr);
    updateExperienceList(newArr);
  }
  function updateExperience(e, checked = undefined) {
    const key = e.target.getAttribute("data-key");
    const value = checked ?? e.target.value;
    const id = e.target.id;

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

  function delJobResp(e, jobKey) {
    const respKey = e.target.getAttribute("data-key");
    const newArr = [];
    for (let i = 0; i < experienceList.length; i++) {
      if (experienceList[i].key === +jobKey) {
        const newRespArr = experienceList[i].responsibilities.filter((obj) => {
          let keys = Object.keys(obj);
          return keys[0] !== respKey;
        });
        newArr.push({ ...experienceList[i], responsibilities: newRespArr });
      } else {
        newArr.push(experienceList[i]);
      }
    }
    updateExperienceList(newArr);
  }
  function addJobResp(e, jobKey) {
    let uuid = self.crypto.randomUUID();
    const newArr = [];
    for (let i = 0; i < experienceList.length; i++) {
      if (experienceList[i].key === +jobKey) {
        const newRespArr = [
          { [uuid]: "" },
          ...experienceList[i].responsibilities,
        ];
        newArr.push({ ...experienceList[i], responsibilities: newRespArr });
      } else {
        newArr.push(experienceList[i]);
      }
    }
    updateExperienceList(newArr);
  }
  function addExperience() {
    console.log("count: ", experienceCount.current);
    const newArr = [
      {
        key: experienceCount.current,
        default: false,
        title: "",
        location: "",
        startDate: "",
        endDateCurrent: false,
        endDate: "",
        employer: "",
        desc: "",
        responsibilities: [],
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

  const jobList = experienceList.map((experience, index) => {
    console.log("re-render with experience.key: ", experience.key);
    const respList = experience.responsibilities.map((resp) => {
      const keys = Object.keys(resp);
      const key = keys[0];
      return (
        <div className="responsibility" key={key}>
          <button
            type="button"
            data-key={key}
            onClick={(e) => {
              delJobResp(e, experience.key);
            }}
          >
            <img src={delRespIcon} alt="delete a job responsibility" />
          </button>
          <textarea
            data-key={key}
            name="responsibilities"
            id="responsibilities"
            value={resp[key]}
            onChange={(e) => updateJobResp(e, experience.key)}
          ></textarea>
        </div>
      );
    });
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
          <div className="resp-list">
            <div>
              Responsibilites
              <button
                id="add-resp"
                type="button"
                onClick={(e) => {
                  addJobResp(e, experience.key);
                }}
              >
                <img src={addRespIcon} alt="add new responsibility" />
              </button>
            </div>

            <div>{respList}</div>
          </div>
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
        {jobList}
      </form>
    </section>
  );
}

export default Experience;
