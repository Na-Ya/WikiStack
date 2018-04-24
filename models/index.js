const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});


//page and user models 
const Page = db.define('page', {
	title: {
        type: Sequelize.STRING,
        allowNull: false
	},
	urlTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
            const route = this.getDataValue('urlTitle')
            return `/wiki/${route}`;
        }

	},
	content: {
        type: Sequelize.TEXT,
        allowNull: false

	},
	status: {
        type: Sequelize.ENUM('open', 'closed'),
        allowNull: false
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const User = db.define('user', {
	name: {
        type: Sequelize.STRING,
        allowNull: false
	},
    email: { 
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});

module.exports = {
    db:db,
    Page: Page,
    User: User
}
