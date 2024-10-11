import React from "react";
import style from "./project.module.css"

const Languages = ({id, languages, onChange, value}) => {
  return (
    <div className={style.options}>
      {/* <i className="fa-solid fa-caret-down"></i> */}
      <select
        id={id}
        name={id}
        onChange={onChange}
        value={value}
      >
        {Object.entries(languages).map(([languageName, languageCode]) => (
          <option key={languageCode} value={languageCode}>
            {languageName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Languages;
