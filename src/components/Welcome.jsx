import { Typography } from "antd";
const { Text } = Typography;
const Welcome = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <Text className="text-3xl font-mon">Wellcome to basic project! 📢</Text>
                <Text>Ant Design</Text>
            </div>
        </>
    );
}
export default Welcome;