import App from './App'
import GlobalStyle from './styles/global'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector("#root"));

root.render(
<>
    <App />
    <GlobalStyle />
</>
); 