import { PlusOutlined } from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-components';
import { Card, Col, Row, Select, Typography } from 'antd';
import React from 'react';
import BottomButton from './Item/BottomButton';
import DataInfor from './Item/DataInfor';
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

const AnalyzeFiles: React.FC = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  const { Option } = Select;
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
    <GridContent>
      <>
        <Col
          style={{
            marginBottom: 24,
          }}
        >
          <Title level={2}>Chào mừng Admin1!</Title>
          <Text type="secondary">Chọn bộ tài liệu và mẫu phân tích để đánh giá!</Text>
        </Col>
        <Row gutter={24}>
          <Col {...topColResponsiveProps}>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <h3>Chọn bộ tài liệu</h3>
                <PlusOutlined style={{ fontSize: '18px' }} onClick={handleFilePicker} />
              </div>
              <div>
                <Select style={{ width: '100%' }} placeholder="Chọn bộ tài liệu">
                  <Option value="item1">Chọn bộ tài liệu 1</Option>
                  <Option value="item2">Chọn bộ tài liệu 2</Option>
                  <Option value="item3">Chọn bộ tài liệu 3</Option>
                </Select>
              </div>
            </Card>
          </Col>
          <Col {...topColResponsiveProps}>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <h3>Chọn mẫu phân tích</h3>
                <PlusOutlined style={{ fontSize: '18px' }} onClick={handleFilePicker} />
              </div>
              <div>
                <Select style={{ width: '100%' }} placeholder="Chọn bộ tài liệu">
                  <Option value="item1">Chọn mẫu phân tích 1</Option>
                  <Option value="item2">Chọn mẫu phân tích 2</Option>
                  <Option value="item3">Chọn mẫu phân tích 3</Option>
                </Select>
              </div>
            </Card>
          </Col>
        </Row>
        <DataInfor />
        <BottomButton />
      </>
    </GridContent>
  );
};

export default AnalyzeFiles;
