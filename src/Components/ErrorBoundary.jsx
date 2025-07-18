import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="mb-4">
          <svg
            className="mx-auto h-12 w-12 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </h1>

        <p className="text-gray-600 mb-6">
          We're sorry, but something unexpected happened. Please try refreshing the page.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <details className="mb-6 text-left">
            <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
              Error Details (Development Only)
            </summary>
            <pre className="text-xs text-red-600 bg-red-50 p-3 rounded border overflow-auto">
              {error.message}
            </pre>
          </details>
        )}

        <div className="space-y-3">
          <button
            onClick={resetErrorBoundary}
            className="w-full btn bg-cyan-600 text-white hover:bg-cyan-700 border-none"
          >
            Try Again
          </button>

          <button
            onClick={() => window.location.href = '/'}
            className="w-full btn btn-outline text-gray-600 hover:bg-gray-50"
          >
            Go to Homepage
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            If this problem persists, please contact our support team.
          </p>
          <a
            href="mailto:contact@nexa-digital-marketing.com"
            className="text-cyan-600 hover:text-cyan-700 text-sm font-medium"
          >
            contact@nexa-digital-marketing.com
          </a>
        </div>
      </div>
    </div>
  );
};

const onError = (error, errorInfo) => {
  // Log error to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  // In production, you might want to send this to an error reporting service
  // Example: Sentry, LogRocket, etc.
};

const ErrorBoundary = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={onError}
      onReset={() => {
        // Clear any state that might have caused the error
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;