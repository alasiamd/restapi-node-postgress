const { response } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Marrosot',
    database: 'firstapi',
    port: '5432'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows);
    // console.log(response.rows);
    // await res.send('users');
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
}

const postUsers = async (req, res) => {
    const { name, email} = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response.rows);
    res.json({
        message: 'User Added Succesfully',
        body:{
            user: {name,email}
        }
    })
}

const deleteUser = async (req,res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`User ${id} deleted successfully`);
}

const putUser = async (req,res) => {
    const { name, email} = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3',[
        name,
        email,
        id
    ])
    res.json(`User ${id} Updated successfully`)
}

module.exports = {
    getUsers,
    postUsers,
    getUserById,
    deleteUser,
    putUser
}