const weightedGrades = (gradeValues: number[], weightValues: number[]) => {
    return gradeValues.reduce((acc, grade, index) => {
        return (acc + (grade * (weightValues[index]) / 100));
    }, 0)
}

const weightPercentage = (weightValues: number[]) => {
    return weightValues.reduce((acc, weight) => {
        return acc + weight
    }, 0)
}

interface GradeMapping {
    percentage: number;
    grade: string;
}

const calculateLetterGrade = (percentageGrade: number): string => {
    const gradeMap: GradeMapping[] = [
        { percentage: 90, grade: 'A+' },
        { percentage: 85, grade: 'A' },
        { percentage: 75, grade: 'B+' },
        { percentage: 70, grade: 'B' },
    ];
    for (const grades of gradeMap) {
        if (percentageGrade >= grades.percentage) {
            return grades.grade;
        }
    }
    return 'F';
}

export { weightedGrades, weightPercentage, calculateLetterGrade};