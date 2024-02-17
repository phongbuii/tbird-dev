import { DownOutlined, MoreOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Badge, Button, Card, Dropdown, Menu, Space } from 'antd';

const data = [
  {
    stt: 1,
    id: '001',
    date: '22/1/2023',
    fileName: 'File1.docx',
    path: '/documents/file1.docx',
    size: '10 MB',
    status: 'success',
  },
  {
    stt: 2,
    id: '002',
    date: '22/1/2023',
    fileName: 'File2.pdf',
    path: '/documents/file2.pdf',
    size: '5 MB',
    status: 'processing',
  },
];
const columns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Tên file',
    dataIndex: 'fileName',
    key: 'fileName',
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
  const handleRowClick = (record) => {
    console.log('Clicked row:', record);
    history.push('/report-detail');

    // Add your logic for handling row click event
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
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
    </Card>
  );
};
export default ListReport;
