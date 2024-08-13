import { useState } from "react"



function InputExample() {
    const[form,setForm] = useState({name: "", surname: ""})

    const onChangeInput = (event) => {
        console.log(event.target.value)

        setForm({...form, [event.target.name]: event.target.value})
    }
    

  return (
    <div>
        Name
        <br/>
        <input name="name" value={form.name} onChange={onChangeInput}/>
        <br/>

        <br/>
        Surname
        <br/>
        <input name="surname" value={form.surname} onChange={onChangeInput}/>
        <br/>
        <br/>
        {form.name} {form.surname}
    </div>
  )
}


export default InputExample