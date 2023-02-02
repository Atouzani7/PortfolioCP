const AbstractManager = require("./AbstractManager");

class ProjetManager extends AbstractManager {
  constructor() {
    super({ table: "projet" });
  }

  insert(projet) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [projet.title]
    );
  }

  update(projet) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [projet.title, projet.id]
    );
  }
}

module.exports = ProjetManager;
