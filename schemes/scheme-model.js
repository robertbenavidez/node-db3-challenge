const db = require('../data/db-config.js')

module.exports = {
    find, 
    findById,
    findSteps,
    add,
    addStep,
}


function find(){
    return db('schemes')
}

function findById(id){
    return db('schemes').where({id})
}

function findSteps(id){
    return db('schemes AS sc')
        .join('steps AS st', {'sc.id': 'st.scheme_id'})
        .select('scheme_name','step_number', 'instructions')
        .where({scheme_id: id})
        .orderBy('step_number')
}

function add(scheme) {
    return db('schemes').insert(scheme)
}

function addStep(step, id) {
    return db('steps')
        .insert(step)
        .where({scheme_id: id})
}


function update(changes, id) {
    return db('schemes')
        .update(changes)
        .where({id})
}


function remove(id) {
    return db('schemes')
        .del()
        .where({id})
}