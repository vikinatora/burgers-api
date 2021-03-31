import { Response } from 'express';

export const sendBadResponse = (res: Response, statusCode: number, error: string, message: string, data?: any[]): void => {
  res.status(statusCode).send({
    statusCode,
    error,
    message,
    data,
  });
};

export const getRandomInteger = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

export const msToHours = (ms: number) => (ms / (1000 * 60 * 60)).toFixed(1);
