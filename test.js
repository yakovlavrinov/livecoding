import React, { useMemo } from 'react';
// Есть массив работников (имя, зарплата, должность)
// Создать компонент, который выводит работников со второй по величине зарплатой

// name уникальны. employees можно хранить глобально

// Ожидаемый результат:
// D 50 middle
// G 50	middle

const employees = [
	{ name: 'A', salary: 30, position: 'junior' },
	{ name: 'B', salary: 10, position: 'student' },
	{ name: 'C', salary: 40, position: 'junior' },
	{ name: 'D', salary: 50, position: 'middle' },
	{ name: 'E', salary: 100, position: 'senior' },
	{ name: 'F', salary: 100, position: 'senior' },
	{ name: 'G', salary: 50, position: 'middle' },
	{ name: 'H', salary: 100, position: 'senior' },
]

const Employee = ({ name, salary, position }) => {
	return <p>{`${name} ${salary} ${position}`}</p>
}

const EmployeesWithSecondHighestSalary = () => {
	const uniqueSalaries = [...new Set(employees.map((emp) => emp.salary))].sort(
		(a, b) => b - a
	)

	const secondHighestSalary = uniqueSalaries[1]

	const filtered = employees.filter((emp) => emp.salary === secondHighestSalary)

	return (
		<div>
			{filtered.map((emp) => (
				<Employee key={emp.name} {...emp} />
			))}
		</div>
	)
}

export default EmployeesWithSecondHighestSalary






export const SecondHighestSalaryEmployees = () => {
  const secondHighestEmployees = useMemo(() => {
    const uniqueSalaries = [...new Set(employees.map(e => e.salary))].sort((a, b) => b - a);
    const secondSalary = uniqueSalaries[1];

    return employees.filter(e => e.salary === secondSalary);
  }, []);

  return (
    <div>
      {secondHighestEmployees.map(({ name, salary, position }) => (
        <div key={name}>
          {name} {salary} {position}
        </div>
      ))}
    </div>
  );
};
