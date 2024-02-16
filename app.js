
const express = require('express');
const app = express();
const config = require('./config');
const commonMiddleware = require('./middleware/commonMiddleware');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

app.use(express.json());

app.use(commonMiddleware);


app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
