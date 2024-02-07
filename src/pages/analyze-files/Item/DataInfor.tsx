import { CalendarOutlined, DesktopOutlined } from '@ant-design/icons';
import { Card, Col, Row, Typography } from 'antd';

const { Title, Text } = Typography;
const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
  style: {
    marginBottom: 24,
  },
};
const DataInfor = () => {
  return (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        <Card>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Title level={4}>Dữ liệu outlook công ty A </Title>
            <Text type="secondary">Loại dữ liệu: mail</Text>
            <Text>
              Bộ dữ liệu backup của công ty A, tải xuống ngày 30/9/2022, cần tìm thông tin về mã độc
              được đính kèm trong một email nào đó
            </Text>
          </div>
          <div style={{ marginTop: '20px' }}>
            <DesktopOutlined style={{ marginRight: '8px' }} />
            <Text style={{ marginRight: '8px' }}>709Gb</Text>
            <CalendarOutlined style={{ marginLeft: '8px' }} />
            <Text style={{ marginLeft: '8px' }}>19/12/2023</Text>
          </div>
        </Card>
      </Col>
      <Col {...topColResponsiveProps}>
        <Card>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Title level={4}>Mẫu phân tích 1</Title>
            <Text type="secondary">Loại dữ liệu: mail</Text>
            <Text>
              Số từ khóa: 3007
              <br />
              Điểm cao nhất: 7
              <br />
              Điểm thấp nhất: 2
              <br />
              Ngôn ngữ: Tiếng Anh, Tiếng Trung, Tiếng Việt
            </Text>
          </div>
          <div style={{ marginTop: '20px' }}>
            <CalendarOutlined style={{ marginRight: '8px' }} />
            <Text>19/12/2023</Text>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default DataInfor;
