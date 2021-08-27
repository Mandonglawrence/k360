import app from "./app";
import initializeRoutes from "./routes";

const PORT = process.env.PORT || 5001;
initializeRoutes(app);
app.listen(PORT, () => console.log(`app running on port ${PORT}`));

        