const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.MONGODB_URI = 'mongodb://localhost:27017/Task';
} else {
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TaskForTest'
}