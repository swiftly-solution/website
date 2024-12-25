import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';
import { ThemeProvider } from '@/elements/theme-provider';

export default () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routers />
            </BrowserRouter>
        </ThemeProvider>
    )
}