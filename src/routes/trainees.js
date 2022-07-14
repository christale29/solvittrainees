const traineesRoutes = require('../controller/trainees');

const appRouter = (app, fs) => {

   
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    traineesRoutes(app, fs);

};

module.exports = appRouter;