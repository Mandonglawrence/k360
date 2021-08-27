import { Application } from 'express';
import teamRoutes from './teamRoutes';
import playerRoutes from './playerRoutes';
import matchScheduleRoutes from './matchScheduleRoutes';


export default function initializeRoutes(app: Application) {
    app.use('/api/v1/auth', teamRoutes);
    app.use('/api/v1/auth', playerRoutes);
    app.use('/api/v1/auth', matchScheduleRoutes);
};
  
  