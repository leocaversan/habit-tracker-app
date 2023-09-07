import { set } from "zod";

interface InputHabbitProps {
    setValue : () => void;
    habbit : string;
    habbitDescription : string;
}
const InputHabbit = ({habbit, setValue, habbitDescription} : InputHabbitProps) => {
    return (
        <div>
            <div>
                <img
                    src="https://w7.pngwing.com/pngs/123/562/png-transparent-drawing-computer-icons-pencil-pencil-angle-pencil-public-relations.png"
                    alt="lapis"
                />
                <p>{habbitDescription}</p>
            </div>
            <div>
                <input
                    type="text"
                    value={habbit}
                    onChange={(e) => setValue}
                />
            </div>
        </div>
    )
}
export default InputHabbit;