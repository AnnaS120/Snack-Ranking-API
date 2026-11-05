const db = require('../database/connect');
class Snack {

  constructor({ id, name, description, healthy, vegetarian, votes }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.healthy = healthy;
    this.vegetarian = vegetarian;
    this.votes = votes;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM snacks ORDER BY name;");

    if (response.rows.length === 0) {
      throw new Error("No snacks available.")
    }

    return response.rows.map(g => new Snack(g));
  }

  
  static async getOneById(id) {
    const response = await db.query("SELECT * FROM snacks WHERE id = $1;", [id]);

    if (response.rows.length != 1) {
      throw new Error("Unable to locate snack.")
    }

    return new Snack(response.rows[0]);
  }

  static async getTopSnack() {
    const response = await db.query("SELECT * FROM snacks ORDER BY votes DESC LIMIT 1;");

    if (response.rows.length != 1) {
      throw new Error("Unable to locate snack.")
    }

    return new Snack(response.rows[0]);
  }

  static async create(data) {
    const { name, description, healthy = false, vegetarian = false } = data;
    const response = await db.query('INSERT INTO snacks (name, description, healthy, vegetarian) VALUES ($1, $2, $3, $4) RETURNING *;', [name, description, healthy, vegetarian]);
    const snackId = response.rows[0].id;
    const newSnack = await Snack.getOneById(snackId);
    return newSnack;
  }

  async update(data) {
    const response = await db.query("UPDATE snacks SET votes = $1 WHERE id = $2 RETURNING *;",
      [this.votes + parseInt(data.votes), this.id]);

    if (response.rows.length != 1) {
      throw new Error("Unable to update votes.")
    }

    return new Snack(response.rows[0]);
  }

  async destroy() {
    const response = await db.query('DELETE FROM snacks WHERE id = $1 RETURNING *;', [this.id]);

    if (response.rows.length != 1) {
      throw new Error("Unable to delete snack.")
    }

    return new Snack(response.rows[0]);
  }
}

module.exports = Snack;
