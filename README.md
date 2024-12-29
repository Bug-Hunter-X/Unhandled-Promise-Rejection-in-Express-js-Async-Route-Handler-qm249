# Unhandled Promise Rejection in Express.js Async Route Handler

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous route handlers.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The `bug.js` file contains an Express.js route handler that performs an asynchronous operation. However, it fails to properly handle potential errors thrown by the asynchronous operation.  If the operation fails, the promise rejection is not caught, leading to an unhandled rejection and potentially crashing the application.

## Solution

The `bugSolution.js` file demonstrates the correct approach. It uses a `.catch()` block within the asynchronous route handler to gracefully handle errors and prevent unhandled rejections.  This ensures the application remains stable even if the asynchronous operation encounters unexpected issues.  Appropriate error responses to the client are also considered. 