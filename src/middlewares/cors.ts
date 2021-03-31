import cors = require('cors');

const corsOpts = {
  origin: '*',
  credentials: true,
  exposedHeaders: 'x-ratelimit-limit,x-ratelimit-remaining,content-length,origin,content-type,accept'
}

const useCors = () => {
  return cors(corsOpts)
}

export default useCors;