
import Home from './Home';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';


const getHome = () => {
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
};

describe('<Home />', () => {
    test('renders home component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(getHome(), div);
        ReactDOM.unmountComponentAtNode(div);
    });
    test('renders the input field and submit button', () => {
        render(getHome());
        const input = screen.getByPlaceholderText('Enter Asteroid ID');
        const submitBtn = screen.getByRole('button', { name: 'Submit' });
        expect(input).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();
    });
    test('displays a random asteroid', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: () =>
            Promise.resolve({
                name: 'Random Asteroid',
                nasa_jpl_url: 'https://www.nasa.gov',
                is_potentially_hazardous_asteroid: true,
            }),
        });
        const { container } = render(getHome());
        const randomBtn = screen.getByRole('button', { name: 'Random Asteriod' });
        fireEvent.click(randomBtn);
        
        expect(global.fetch).toHaveBeenCalled();
        const randomBtn2=screen.getByRole('button',{name:'Submit'})
        fireEvent.click(randomBtn2) 
    });
    test('displays a asteroid by Name', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: () =>
            Promise.resolve({
                name: 'Submit',
                nasa_jpl_url: 'https://www.nasa.gov',
                is_potentially_hazardous_asteroid: true,
            }),
        });
        const { container } = render(getHome());
        const randomBtn = screen.getByRole('button', { name: 'Submit' });
        fireEvent.click(randomBtn);
    });
});
