import { useState } from "react";
import "../css/FillForm.css"
import { useDispatch } from "react-redux";
import { addFeedBack } from "../redux/reducers/formData";

export const FillForm = () => {

  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const ChangeData = (e) => {
    const { name, value } = e.target
    setFormData((data) => ({
      ...data, [name]: value
    }))
  }

  const SubmitForm = (e) => {  
    e.preventDefault()
    // console.log("form",formData);
      
    Object.keys(formData).forEach((key) => {
      dispatch(addFeedBack({ [key]: formData[key] }));
    });
    
  }

  return (
    <>
      <form onSubmit={SubmitForm}>
        <label>Name</label>
        <input type="text" name='name' onChange={ChangeData} />
        <label>email</label>
        <input type="email" name='email' onChange={ChangeData}/>
        <label>password</label>
        <input type="password" name='password' onChange={ChangeData}/>
        <label>Feedback</label>
        <input type="text" name='feedback' onChange={ChangeData}/>
        <input type="submit" value="submit" />
      </form>
    </>
  )
}
