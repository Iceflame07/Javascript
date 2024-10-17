const grade = { Math: 90, English: 85, Science: 88 };

for (const prop in grade) {
  console.log(`grade.${prop} = ${grade[prop]}`);
}

