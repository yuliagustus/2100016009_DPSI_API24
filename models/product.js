const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Product', {
        productID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        supplierID: {
            type: DataTypes.INTEGER,    
            allowNull: true
        },
        categoryID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        }
    });
};
