const mongoose = require('mongoose');
const DB = process.env.DATABASE;

//correct way to connect with moongodb
mongoose.connect(DB).then(() => {//then is a promise function means after than the work will happen or it will not
    console.log(`connect successfully`);
}).catch((err) => console.log(`no connection`));