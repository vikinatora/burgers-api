import { Request, Response } from 'express';
import { sendBadResponse } from '../helpers/helpers';
import { HttpStatues } from '../helpers/httpStatuses';
import { ErrorMessages, RATE_LIMIT_TIME_PERIOD, REQUESTS_RATE_LIMIT } from '../helpers/constants';

const rateLimit = require('express-rate-limit');

const exceedHandler = (req: Request, res: Response, next) => {
  return sendBadResponse(res, HttpStatues.TooManyRequests.Code, HttpStatues.TooManyRequests.Name, ErrorMessages.EXCEEDED_RATE_LIMIT)
}

const limitRate = rateLimit({
  windowMs: RATE_LIMIT_TIME_PERIOD,
  max: REQUESTS_RATE_LIMIT,
  handler: exceedHandler
});

export default limitRate;
