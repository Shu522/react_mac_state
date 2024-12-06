const Score = () => {
  const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "David", score: 88 },
    { name: "Eve", score: 91 },
  ];

  const processStudents = (students) => {
    return students
      .filter((student) => student.score >= 80)
      .map((student) => {
        const updateName =
          student.score >= 90
            ? `⭐ ${student.name.toUpperCase()}`
            : `${student.name.toUpperCase()}`;
        return { ...student, name: updateName };
      });
  };
  const finalStudent = processStudents(students);

  return (
    <div>
      <h3>학생 점수</h3>
      {finalStudent.map((student, index) => (
        <p key={index}>
          {student.name}: {student.score}
        </p>
      ))}
    </div>
  );
};

export default Score;
