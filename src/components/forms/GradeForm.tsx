import { ChangeEvent, FormEvent } from "react";
import Input from "../input/Input";
import Button from "../button/Button";

interface InputField {
    value: number,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface FormProps {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    grades: InputField[];
    weights: InputField[];
    buttonText: string;
}

const GradeForm = ({ handleSubmit, grades, weights, buttonText}: FormProps) => {
    return (
        <>
        <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '4rem'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Grades</h1>
        {grades.map((grade, index) => (
            <Input
            type={'number'}
            key={index}
            value={grade.value}
            onChange={grade.onChange}
            step={0.01}
            max={100}
            />
        ))}
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1>Weights</h1>
        {weights.map((weight, index) => (
            <Input
            type={'number'}
            key={index}
            value={weight.value}
            onChange={weight.onChange}
            max={100}
            />
            ))}
        </div>
        </div>
        <Button
        type='submit'
        children={buttonText}
        />
        </form>
        </>
    )
}

export default GradeForm;