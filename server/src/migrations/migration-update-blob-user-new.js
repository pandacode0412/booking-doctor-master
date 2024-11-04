'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
          return Promise.all([
            queryInterface.changeColumn('Users','image',{
                type:Sequelize.BLOD('long'),
                allowNull:true,
            })
          ])
    },
    down: async (queryInterface, Sequelize) => {
            return Promise.all([
              queryInterface.changeColumn('Users','image',{
                  type:Sequelize.STRING,
                  allowNull:true,
              })
            ])
        }
    }