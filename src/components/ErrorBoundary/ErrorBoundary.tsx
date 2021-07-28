import React, { Component, ErrorInfo, ReactNode } from 'react';
import ErrorMessage from '@src/common/ErrorMessage';
import { DEFAULT_ERROR_MESSAGE } from '@src/constants';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        message: '',
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error(errorInfo);
        this.setState({ hasError: true, message: error.message });
    }

    render(): ReactNode {
        const { children } = this.props;
        const { hasError, message } = this.state;

        const msg = message || DEFAULT_ERROR_MESSAGE;

        if (hasError) {
            return <ErrorMessage message={msg} isSaveMarkup />;
        }

        return children;
    }
}

export default ErrorBoundary;
