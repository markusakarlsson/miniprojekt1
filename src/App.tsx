import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from './components/main';
import ErrorBoundary from './errorboundary';

interface Props {

}

interface State {
  size: 'mobile' | 'tablet' | 'desktop'

}

class App extends React.Component<Props, State> {


  constructor(props: Props) {
    super(props)
    this.state = {
      size: 'desktop'
    
    }

  }
  
  handleWindowsResize = () => {
    if (window.innerWidth < 768) {
      this.setState({ size: 'mobile' })
    } else if (window.innerWidth < 1024) {
      this.setState({ size: 'tablet' })
    } else {
      this.setState({ size: 'desktop' })
    }
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowsResize)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowsResize)
  }
  
  render() {

    console.log(this.state.size)
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <div className="App">
      
            <MainComponent size={this.state.size} />

          </div>
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
}

export default App;
