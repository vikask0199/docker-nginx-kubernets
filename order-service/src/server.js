const app = require('./app');

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Order Service: Running on port ${PORT}`);
});
