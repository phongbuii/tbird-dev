import { MoreOutlined, PlusOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-components';
import { Badge, Button, Card, Dropdown, Menu, Space } from 'antd';
const data = [
  {
    id: 1,
    date: '2022-09-30',
    description: 'Mô tả 1',
    language: 'Tiếng Việt',
    keywordCount: 10,
    status: 'success',
  },
  {
    id: 2,
    date: '2022-10-01',
    description: 'Mô tả 2',
    language: 'Tiếng Anh',
    keywordCount: 5,
    status: 'processing',
  },
];
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Mô tả',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Ngôn ngữ',
    dataIndex: 'language',
    key: 'language',
  },
  {
    title: 'Số từ khóa',
    dataIndex: 'keywordCount',
    key: 'keywordCount',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: (text: React.ReactNode) => {
      if (text === 'success') {
        return <Badge status="success" text="Đã xử lý" />;
      }
      return <Badge status="processing" text="Đang xử lý" />;
    },
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
const ListReport = () => {
  const handleFilePicker = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.webkitdirectory = true;
    fileInput.click();

    fileInput.addEventListener('change', (event) => {
      const selectedFolder = event.target.files[0];
      console.log('Selected folder:', selectedFolder);
      // Perform any desired operations with the selected folder
    });
  };
  return (
    <Card
      bordered={false}
      style={{
        marginTop: 32,
      }}
      title="Danh sách báo cáo"
      extra={
        <Space>
          <Button onProgress={handleFilePicker} icon={<PlusOutlined />}>
            Thêm mới
          </Button>
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
export default ListReport;
