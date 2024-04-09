import { FormEvent, useState } from "react";
import useInputField from "../../hooks/useInput";
import GradeForm from "../forms/GradeForm";
import { weightPercentage, weightedGrades, calculateLetterGrade } from "../../utils/gradeCalculations/gradeCalculations";

const arrLength = 4;

const GradeCalculator = () => {
    const [overAllGrade, setOverallGrade] = useState<string>('');
    const [letterGrade, setLetterGrade] = useState<string>('');

    const [error, setError] = useState<string>('');
    const grades = Array.from({ length: arrLength}, () => useInputField(0));
    const weights = Array.from({ length: arrLength}, () => useInputField(0));

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('')

        // Seperating the values from the grades/weights array (useInputField returns value and onchange)
        const gradeValues = grades.map(grade => grade.value);
        const weightValues = weights.map(weight => weight.value);

        const weightedGradeSum = weightedGrades(gradeValues, weightValues)
        const totalWeightPercentage = weightPercentage(weightValues);

        if (totalWeightPercentage > 100) return setError('Weights must not exceed 100%');

        // Rounding up or down
        const roundGrade = Math.round(weightedGradeSum);
        
        setOverallGrade(roundGrade.toString());
        setLetterGrade(calculateLetterGrade(roundGrade));
    }

    return (
        <>
        <GradeForm
        handleSubmit={handleSubmit}
        grades={grades}
        weights={weights}
        buttonText={"Submit"}
        />
        {error ? <p>{error}</p> : <p>{overAllGrade}% : {letterGrade}</p>}
        </>
    )
}

export default GradeCalculator;