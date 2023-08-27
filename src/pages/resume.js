import React from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jspdf from "jspdf";

const Resume = ({ formItems }) => {
  const navigate = useNavigate();
  const createAgain = () => {
    navigate("/");
  };
  const downloadPdf = () => {
    const capture = document.querySelector(".resume");
    console.log(capture);
    html2canvas(capture).then((item) => {
      const imgData = item.toDataURL("img/jpg");
      const pdf = new jspdf("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPG", 0, 0, width, height);
      pdf.save("resume.pdf");
    });
  };
  return (
    <div className="mainblock">
      <div className="resume">
        <div className="name">
          <h1>{formItems.Name}</h1>
        </div>
        <div className="details">
          <div className="details1">
            <div className="email per">
              <p className="heading">E-mail</p>
              <p>{formItems.Email}</p>
            </div>
            <div className="phone per">
              <p className="heading">Phone</p>
              <p>{formItems.Phone}</p>
            </div>
            <div className="address per">
              <p className="heading">Address</p>
              <p>{formItems.Address}</p>
            </div>
          </div>
          <div className="details2">
            <div className="career per">
              <p className="heading">Career Objective</p>
              <p>{formItems.Career}</p>
            </div>
            <div className="skills per">
              <p className="heading">Skills</p>
              <p>{formItems.Skills}</p>
            </div>
            <div className="experience per">
              <p className="heading">Experience</p>
              <p>{formItems.Experience}</p>
            </div>
            <div className="Education per">
              <p className="heading">Education</p>
              <p>{formItems.Education}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button onClick={createAgain}>Create again</button>
        <button onClick={downloadPdf}>Download</button>
      </div>
    </div>
  );
};

export default Resume;
