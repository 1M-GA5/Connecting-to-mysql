const Sequelize =  require('sequelize');


const sequelize = new Sequelize('sys','root','Mohit@123',{dialect : 'mysql',host:'localhost'});



module.exports = sequelize;