import React from 'react';
import { render,screen } from '@testing-library/react';
import RandomAsteroid from './RandomAsteroid';
import { BrowserRouter } from 'react-router-dom';


jest.mock("/RandomAsteroid",()=>{
    return {
        RandomAsteroid :() => <div data-test-id='asteroid-testId' >Test Data</div>
    }
})
 
 
test('renders with props', () => {
   window.history.pushState({},"","/RandomAsteroid")
      render( <BrowserRouter>
                <RandomAsteroid   />
            </BrowserRouter>
          );
     screen.debug()
     expect(screen.getByTestId('asteroid-testId')).toBeInTheDocument()
  });
 