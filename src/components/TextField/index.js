import { useState } from "react";


const TextField = ({LabelName}) => {
    const[value, setValue] = useState("");

    const handleOnClick = (e) => {
        const val = e.target.value;

        setValue(val);
    };

    return(
        <div class="form-group">
            <label for="">{LabelName} </label>
            <input
            value={value}
            onChange= {handleOnClick}
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder=""
            />
            <div>Result</div>
            <div>{value}</div>
        </div>
    )
}

export default TextField;