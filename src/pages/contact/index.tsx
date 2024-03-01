import { PageContainer } from '@ant-design/pro-components';
import { Button, Form, Input } from 'antd';

const SupportPage = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Make API call to send the support request data to the backend
  };

  return (
    <PageContainer>
      <Form name="support_form" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input placeholder="email" />
        </Form.Item>

        <Form.Item
          name="message"
          rules={[{ required: true, message: 'Please input your message!' }]}
        >
          <Input.TextArea placeholder="Message" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Gửi thông tin
          </Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default SupportPage;
