const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const noteRoutes = require('./src/routes/noteRoutes');

const app = express();

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', noteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('¡El servidor está funcionando!');
});
