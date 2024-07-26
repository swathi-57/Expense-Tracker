import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon("postgresql://Expense%20Tracker_owner:5lILTwG6itCu@ep-solitary-glitter-a5lpst6a.us-east-2.aws.neon.tech/budget-planner?sslmode=require");
export const db = drizzle(sql,{schema});
