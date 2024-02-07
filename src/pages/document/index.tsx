import { GridContent } from '@ant-design/pro-components';
import { Col, Select, Typography } from 'antd';
import React from 'react';
import ListReport from './Item/ListReport';

const Report: React.FC = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  const { Option } = Select;

  return (
    <GridContent>
      <>
        <Col
          style={{
            marginBottom: 24,
          }}
        >
          <Title level={2}>Chào mừng Admin1!</Title>
          <Text type="secondary">Dưới đây là các tài liệu đã được tải lên máy chủ</Text>
        </Col>
      </>
      <ListReport />
    </GridContent>
  );
};

export default Report;
