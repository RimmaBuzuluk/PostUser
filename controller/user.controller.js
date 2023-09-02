const db=require('../db')
const bcrypt = require("bcrypt");

class UserController{
    
    async createUser(req, res){
        const { name, surname, login, password, profile_type }= req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // 10 - это "соль" для хеширования
        const newPerson=await db.query(`INSERT INTO person (name, surname, login, password, profile_type)  VALUES ($1, $2, $3, $4, $5) RETURNING *`, [name, surname, login,  hashedPassword, profile_type])
        res.json(newPerson.rows[0])
    }
    async getUser(req, res){
        const users=await db.query(`SELECT * FROM person`)
        res.json(users.rows)

    }
    async getOneUser(req, res){
        const id=req.params.id;
        const user=await db.query(`SELECT * FROM person where id=$1`, [id])
        res.json(user.rows[0])

    }
    async updateUser(req, res){
        const { id, name, surname, login, password, profile_type }=req.body;
        const user = await db.query(`UPDATE person SET name=$1, surname=$2, login=$3, password=$4, profile_type=$5 WHERE id=$6 RETURNING *`,    [name, surname, login, password, profile_type, id]);

        res.json(user.rows[0])
    }
    async deleteUser(req, res){
        const id=req.params.id;
        const user = await db.query(`DELETE FROM person where id=$1`, [id]);
        res.json(user.rows[0])
    }
}

module.exports=new UserController()