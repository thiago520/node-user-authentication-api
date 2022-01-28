import config from 'config';
import { Pool } from 'pg';

const connectionString = config.get<string>('database.uri');
const db = new Pool({ connectionString });

export default db;


// connectionString ElephantSQL
// postgres://xttmzaob:MmZJVrEg3j39gTkfVyceNIS7CVz3zzPI@kesavan.db.elephantsql.com/xttmzaob