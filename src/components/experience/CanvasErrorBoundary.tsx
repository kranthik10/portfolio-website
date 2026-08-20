"use client";

import { Component, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  onError: () => void;
};

type State = { hasError: boolean };

export class CanvasErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(): void {
    this.props.onError();
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
