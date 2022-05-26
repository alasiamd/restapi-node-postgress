// const { Pool } = require('pg');

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     password: 'Marrosot',
//     database: 'firstapi',
//     port: '5432'
// });

const getUsers =  (req, res) => {
    // const response = await pool.query('SELECT * FROM users');
    //console.log(response.rows);
    res.send('users');
}

module.exports = {
    getUsers
}