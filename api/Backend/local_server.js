import app from './index.js';
import dotenv from 'dotenv';
import path from 'path';

const configPath = path.join(path.resolve(), "api/Backend/config/config.env");

dotenv.config({
    path: configPath
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
