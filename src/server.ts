import { PORT } from './helpers/constants';
import app from './app';

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
