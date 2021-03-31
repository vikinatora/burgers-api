import { msToHours } from "./helpers";

export const REQUESTS_RATE_LIMIT = 2;
export const RESULTS_PER_PAGE = 25;
export const RETRIES_COUNT = 10;
export const MAX_RESULTS_COUNT = 80;
export const RATE_LIMIT_TIME_PERIOD = 60 * 60 * 1000;
export const MONGO_DB_SERVER = 'mongodb://localhost/vikBurgers';

export const ErrorMessages = {
  UNEXPECTED_ERROR: 'An unexpected error occurred. Please try again in a few minutes',
  INVALID_QUERY_PARAMS: 'Invalid query params',
  EXCEEDED_RATE_LIMIT: `You have exceeded the ${REQUESTS_RATE_LIMIT} requests in ${msToHours(RATE_LIMIT_TIME_PERIOD)} hour limit`
};

