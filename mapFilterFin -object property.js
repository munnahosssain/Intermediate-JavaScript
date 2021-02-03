const student = [
    { id: 1901, name: 'Hossain' },
    { id: 1902, name: 'abdullah' },
    { id: 1903, name: 'Mohannad' },
    { id: 1904, name: 'Jakir' },
    { id: 1905, name: 'Habib' }
];
const names = student.map(s => s.name);
const ids = student.filter(i => i.id>1903);
const idFind=student.find(i=>i.id>1902);
console.log(names);
console.log(ids);
console.log(idFind);