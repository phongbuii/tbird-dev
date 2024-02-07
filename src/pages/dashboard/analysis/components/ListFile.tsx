import { MoreOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-components';
import { Badge, Button, Card, Dropdown, Menu, Space } from 'antd';
import useStyles from '../style.style';

const data = [
  {
    stt: 1,
    id: '001',
    importance: 'High',
    fileName: 'File1.docx',
    path: '/documents/file1.docx',
    size: '10 MB',
    status: 'success',
  },
  {
    stt: 2,
    id: '002',
    importance: 'Medium',
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
    title: 'Điểm quan trọng',
    dataIndex: 'importance',
    key: 'importance',
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
              <Menu.Item key="1">Action 1</Menu.Item>
              <Menu.Item key="2">Action 2</Menu.Item>
              <Menu.Item key="3">Action 3</Menu.Item>
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
const ListFile = () => {
  const { styles } = useStyles();
  return (
    <Card
      className={styles.offlineCard}
      bordered={false}
      style={{
        marginTop: 32,
      }}
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
export default ListFile;
