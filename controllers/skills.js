const Skill = require('../models/skill');

module.exports = {
    index,
    show, 
    new: newSkills,
    create,
    // update,
    delete: deleteSkill
}; 

function show(req, res) {
    //console.log(req.params.no);
    const skill = Skill.getOne(req.params.no);
    res.render('skills/show', { skill });
}

function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index', { skills });
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.no);
    res.redirect('/skills');
}

function newSkills(req, res) {
    res.render('skills/new');
}

// function update(req, res) {
//     req.body.done = !!req.body.done;
//     Skill.update(req.params.no, req.body);
//     res.redirect(`/skills/${req.params.no}`);
// }






