const AbstractRepository = require("./AbstractRepository")

class ProgramRepository extends AbstractRepository{
  constructor() {
    super({table:"program"});
  }

  async readAll() {
    const [row] = await this.database.query(`select * from ${this.table}`)
    return row
  }
}

module.exports = ProgramRepository;