import React, {CSSProperties} from 'react';

interface Props {

}

interface State {
   hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: Error) {
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: any) {
      this.setState({hasError: true});
    }
  
    render() {
      if (this.state.hasError) {
        return <div style={ErrorStyle}>
          <img src="./../assets/exclamation-triangle-solid.svg" />
          <h1 >Something went wrong</h1>
          </div>
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary

const ErrorStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '50%',
  width: '60%',
  textAlign: 'center',
}