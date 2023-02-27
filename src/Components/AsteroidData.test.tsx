import React from 'react';
import { render,screen } from '@testing-library/react';
import AsteroidData from './AsteroidData';
import { BrowserRouter } from 'react-router-dom';


jest.mock("./AsteroidData",()=>{
    return {
        AsteroidData :() => <div data-test-id='asteroid-testId' >Test Data</div>
    }
})
 
 
test('renders with props', () => {
   window.history.pushState({},"","/AsteroidData")
      render( <BrowserRouter>
                <AsteroidData   />
            </BrowserRouter>
          );
     screen.debug()
     expect(screen.getByTestId('asteroid-testId')).toBeInTheDocument()
  });