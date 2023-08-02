const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

export default {
  port: 3000,
  dbUri: `mongodb://${dbUser}:${dbPass}@ac-1ifqqmq-shard-00-00.lsqtw7h.mongodb.net:27017,ac-1ifqqmq-shard-00-01.lsqtw7h.mongodb.net:27017,ac-1ifqqmq-shard-00-02.lsqtw7h.mongodb.net:27017/?ssl=true&replicaSet=atlas-vwbk3s-shard-0&authSource=admin&retryWrites=true&w=majority`,
  env: "development",
};
