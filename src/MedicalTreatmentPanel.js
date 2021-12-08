import React from "react";

function MedicalTreatmentPanel(){

  const [treatID, setTreatID] = React.useState('');

  const [treatCourseID, setCourseID] = React.useState('');
  
  const [type, setType] = React.useState('');

  const [category, setCategory] = React.useState('');
  
  const [name, setName] = React.useState('');

  const [startDate, setStartdate] = React.useState('');

  function showClickHandler (){
    window.alert("[" + "id = " + treatID + ", name = " + name +", startDate =" + startDate + "courseID = " + treatCourseID + "type = " + type + "category =" +category +"]");


  }

    function clearClickHandler(){
      setTreatID('');
      setTreatCourseID('');
      setType('');
      setCategory('');
      setName('');
      setStartdate('');

      
      
    
  }
  return (
    <div>

    <input placeholder="treatID " value={treatID} onChange = { e => setTreatID(e.target.value)} ></input>

     <br/>

      <input placeholder="treatCourseID " value={treatCourseID} onChange = { e => setTreatCourseID(e.target.value)} ></input>

    <br/>
    
    <input placeholder="type" value={type} onChange = { e => setCategory(e.target.value)} ></input>

    <br/>

    <input placeholder="category " value={category} onChange = { e => setTreatCourseID(e.target.value)} ></input>

    <br/>

    <input placeholder="Name" value={name} onChange = { e => setCategory(e.target.value)} ></input>

    <br/>

    <input placeholder="startDate" value={startDate} onChange = { e => setStartDate(e.target.value)} ></input>

    <br/>

    <br/>

    <button style={{color:"black"}} onClick={showClickHandler}>show</button>

    <button style={{color:"red"}} onClick={clearClickHandler}>clear</button>

    <br/><br/><br/><br/>

    <input placeholder="some value"></input>

    </div>
  );
  }

  export default MedicalTreatmentPanel;
  

