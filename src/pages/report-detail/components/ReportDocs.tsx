import { DownOutlined, MoreOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-components';
import { Button, Card, Dropdown, Menu, Space, Tag } from 'antd';

const data = [
  {
    stt: 1,
    id: 'file1',
    password: 'password1',
    rate: '4/10',
    path: '/path/to/file1',
    size: '10MB',
    keyword: ['keyword1', 'keyword2', 'keyword3'],
  },
  {
    stt: 2,
    id: 'file2',
    password: 'password2',
    rate: '3/10',
    path: '/path/to/file2',
    size: '5MB',
    keyword: ['keyword4', 'keyword5'],
  },
  // Add more data objects with keywords as needed
];
const columns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
  },
  {
    title: 'Tên file',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Mật khẩu',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: 'Đánh giá',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'Đường dẫn',
    dataIndex: 'path',
    key: 'path',
  },
  {
    title: 'Kích cỡ',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: 'Keyword',
    dataIndex: 'keyword',
    key: 'keyword',
    render: (keywords) => (
      <div>
        {keywords.map((keyword, index) => (
          <Tag key={index} color="blue">
            {keyword}
          </Tag>
        ))}
      </div>
    ),
  },
  {
    title: 'Actions',
    key: 'actions',
    render: () => (
      <Space>
        <Dropdown
          overlay={
            <Menu mode="horizontal">
              <Menu.Item key="1">Xóa</Menu.Item>
              <Menu.Item key="2">Dừng</Menu.Item>
              <Menu.Item key="3">Đánh giá lại</Menu.Item>
            </Menu>
          }
          trigger={['click']}
        >
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      </Space>
    ),
  },
];
const ReportDocs = () => {
  return (
    <Card
      bordered={false}
      style={{
        marginTop: 32,
      }}
      title="Danh sách báo cáo (Bộ tài liệu: “Dữ liệu outlook công ty A”)"
      extra={
        <Space>
          <Dropdown
            overlay={
              <Menu mode="horizontal">
                <Menu.Item key="1">Dung lượng file</Menu.Item>
              </Menu>
            }
            trigger={['click']}
          >
            <Button icon={<DownOutlined />}>Gần đây nhất</Button>
          </Dropdown>
        </Space>
      }
    >
      <ProTable
        style={{
          marginBottom: 16,
        }}
        pagination={false}
        search={false}
        options={false}
        toolBarRender={false}
        dataSource={data}
        columns={columns}
      />
    </Card>
  );
};
export default ReportDocs;
