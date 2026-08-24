import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        this.props.fallback ?? (
          <div className="fx-fallback" role="alert">
            <p>Фоновый эффект недоступен — визитка работает без него.</p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
