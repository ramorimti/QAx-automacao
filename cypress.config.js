const { defineConfig } = require("cypress");

const { Pool } = require('pg')

const dbconfig = {
  host: 'isilo.db.elephantsql.com',
  user: 'qoslrjcf',
  password: 'ezHAMOx-EpO95Jvjq5u6L1CiG5spj_KG',
  database: 'qoslrjcf',
  port: 5432


}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        removeUser(email) {
          return new Promise(function (resolve) {
            const pool = new Pool(dbconfig)

            pool.query('DELETE FROM users WHERE email = $1', [email], function (error, result) {
              if (error) {
                throw error
              }
              resolve({ success: result })
            })
          })
        }
      })
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: 'http://localhost:3000'
  },
});
