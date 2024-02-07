import { MoreOutlined, PlusOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-components';
import { Button, Card, Dropdown, Menu, Space } from 'antd';

const data = [
  {
    stt: 1,
    id: 'ABC123',
    date: '2022-09-30',
    documentName: 'Tài liệu 1',
    analysisTemplate: 'Mẫu A',
    size: '10 MB',
    dataType: 'PDF',
  },
  {
    stt: 2,
    id: 'XYZ456',
    date: '2022-10-01',
    documentName: 'Tài liệu 2',
    analysisTemplate: 'Mẫu B',
    size: '5 MB',
    dataType: 'Word',
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
    title: 'Tên bộ tài liệu',
    dataIndex: 'documentName',
    key: 'documentName',
  },
  {
    title: 'Mẫu phân tích',
    dataIndex: 'analysisTemplate',
    key: 'analysisTemplate',
  },
  {
    title: 'Kích cỡ',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: 'Loại dữ liệu',
    dataIndex: 'dataType',
    key: 'dataType',
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
