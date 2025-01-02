import { ConfigProvider } from "antd";
import Router from "./Router";
import viVN from 'antd/lib/locale/vi_VN';
const App = () => {
    return (
        <ConfigProvider locale={viVN}
            theme={{
                token: {
                    fontFamily: 'San Francisco, sans-serif',
                },
                components: {
                    Input:{
                       
                    }
                }
            }} >
            <Router />
        </ConfigProvider >
    );
}

export default App;
