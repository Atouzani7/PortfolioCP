const AbstractManager = require("./AbstractManager");

class EntrepriseManager extends AbstractManager {
  constructor() {
    super({ table: "entreprise" });
  }

  insert(entreprise) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [entreprise.title]
    );
  }

  update(entreprise) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [entreprise.title, entreprise.id]
    );
  }
}

module.exports = EntrepriseManager;
