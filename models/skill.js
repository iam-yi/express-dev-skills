const skills = [
    {no: 1, type: 'Normal', attack: 'Explosion', value: 250 },
    {no: 2, type: 'Fire', attack: 'V-Create', value: 180},
    {no: 3, type: 'Rock', attack: 'Head Smash', value: 150},
    {no: 4, type: 'Grass', attack: 'Frenzy Plant', value: 150},
    {no: 5, type: 'Water', attack: 'Water Spout and Hydro Cannon', value: 150}
];

module.exports = {
    getAll,
    getOne,
    create,
    // update,
    deleteOne
}

function getOne(no) {
    no = parseInt(no);
    return skills.find((skill) => skill.no === no);
}

function getAll() {
    return skills;
}

function deleteOne(no) {
    no = parseInt(no);
    const idx = skills.findIndex((skill) => skill.no === no);
    skills.splice(idx, 1);
}

// function update(no, skill) {
//     no = parse(no);
//     const updatedSkill = skills.find((skill) => skill.no === no);
//     Object.assign(updatedSkill, skill);
// }

function create(skill) {
    skill.no = Date.now() % 1000000;
    skills.push(skill);
}

