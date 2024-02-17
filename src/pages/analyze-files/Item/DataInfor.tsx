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
interface ItemProps {
  docSelected: { title: string; desc: string; type: string; id: number };
  sampleSelected: { title: string; desc: string; type: string; id: number };
}
const DataInfor = ({ docSelected, sampleSelected }: ItemProps) => {
  return (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        {!!docSelected?.id ? (
          <Card>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Title level={4}>{docSelected?.title}</Title>
              <Text type="secondary">Loại dữ liệu: {docSelected?.type}</Text>
              <Text>{docSelected?.desc}</Text>
            </div>
            <div style={{ marginTop: '20px' }}>
              <DesktopOutlined style={{ marginRight: '8px' }} />
              <Text style={{ marginRight: '8px' }}>709Gb</Text>
              <CalendarOutlined style={{ marginLeft: '8px' }} />
              <Text style={{ marginLeft: '8px' }}>19/12/2023</Text>
            </div>
          </Card>
        ) : (
          <Card>
            <Text>Chưa chọn mẫu</Text>
          </Card>
        )}
      </Col>
      <Col {...topColResponsiveProps}>
        {!!sampleSelected?.id ? (
          <Card>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Title level={4}>{sampleSelected?.title}</Title>
              <Text type="secondary">Loại dữ liệu: {sampleSelected?.type}</Text>
              <Text>{sampleSelected?.desc}</Text>
            </div>
            <div style={{ marginTop: '20px' }}>
              <CalendarOutlined style={{ marginRight: '8px' }} />
              <Text>19/12/2023</Text>
            </div>
          </Card>
        ) : (
          <Card>
            <Text>Chưa chọn mẫu</Text>
          </Card>
        )}
      </Col>
    </Row>
  );
};

export default DataInfor;
