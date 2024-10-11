import React, { useState } from "react";
import { selectOptions } from "./sortform";
import Languages from "./language";
import axios from "axios";
import style from "./project.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
const Translator = () => {
  const [textInput, setTextInput] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("hi");
  const [resultText, setResultText] = useState("");

  const handleTranslate = async () => {
    const url = "https://text-translator2.p.rapidapi.com/translate";
    const apiKey = "6f5ab9002amshae9743c3bceb51fp114a97jsnd55ed65fee24";
    const headers = {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      "content-type": "multipart/form-data; boundary=---011000010111000001101001",
    };
    const data = {
      source_language: sourceLang,
      target_language: targetLang,
      text: textInput,
    };

    try {
      let response = await axios.post(url, data, { headers });
      const result = response.data;
      if (result.status === "success") {
        let translatedText = result.data.translatedText;
        setResultText(translatedText);
      } else {
        alert("Error in translation!");
      }
    } catch (error) {
      console.log(error);
      alert("Error occurred while translating", error);
    }
  };

  return (
    <div className={style.translator}>
      <h1>Translator App</h1>
      <div className={style.tools}>
        {/* User Input */}

        <div className={style.inputtext}>
          <div>
            <Languages
              id="source"
              languages={selectOptions}
              onChange={(e) => setSourceLang(e.target.value)}
              value={sourceLang}
            />
          </div>

          <textarea
            id="text"
            value={textInput}
            placeholder="Enter Text Here..."
            onChange={(e) => setTextInput(e.target.value)}
          ></textarea>
        </div>

        {/* Result */}
        <div className={style.resulttext}>
          {/* DropDown for Target languages */}
          <Languages
            id="target"
            languages={selectOptions}
            onChange={(e) => setTargetLang(e.target.value)}
            value={targetLang}
          />
          <textarea
            id="text"
            placeholder="Translated Text"
            value={resultText}
            readOnly
          ></textarea>
        </div>
      </div>
      {/* Translate button */}
      <button className={style.tranlatebtn} onClick={handleTranslate}>
        Translate
      </button>
    </div>
  );
};

export default Translator;
