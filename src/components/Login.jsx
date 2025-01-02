import { Button, Flex, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { setInforUser, setInitUser } from "../redux/action/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const onFinish = (values) => {
        dispatch(setInforUser(values));
    };
    return (
        <div className="w-full flex justify-center items-center h-screen">
            <Form
                className="flex flex-col max-w-full items-end"
                onFinish={onFinish}
                onReset={() => dispatch(setInitUser())} //reset form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Flex gap={"1rem"}>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>

                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="reset">
                            Reset
                        </Button>
                    </Form.Item>
                </Flex>
            </Form>
        </div>
    );
}
export default Login;