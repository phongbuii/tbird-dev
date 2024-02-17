import { PlusOutlined } from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-components';
import { Card, Col, Row, Select, Typography } from 'antd';
import React, { useState } from 'react';
import BottomButton from './Item/BottomButton';
import DataInfor from './Item/DataInfor';
import ModalPickDocs from './Item/ModalPickDocs';
import ModalPickSample from './Item/ModalPickSample';
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
const DATA_DOCS = [
  {
    title: 'Dữ liệu outlook công ty A',
    desc: 'Bộ dữ liệu backup của công ty A, tải xuống ngày 30/9/2022, cần tìm thông tin về mã độc được đính kèm trong một email nào đó',
    type: 'email',
    id: 1,
  },
  {
    title: 'Dữ liệu outlook công ty B',
    desc: 'Bộ dữ liệu backup của công ty B, tải xuống ngày 30/9/2022, cần tìm thông tin về mã độc được đính kèm trong một email nào đó',
    type: 'pdf',
    id: 2,
  },
];
const DATA_SAMPLE = [
  {
    title: 'Mẫu phân tích 1',
    desc: 'Số từ khóa: 3007',
    type: 'email',
    id: 1,
  },
  {
    title: 'Mẫu phân tích 2',
    desc: 'Số từ khóa: 3007',
    type: 'pdf',
    id: 2,
  },
];
export interface ItemSelect {
  title: string;
  desc: string;
  type: string;
  id: number;
}
const AnalyzeFiles: React.FC = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  const [isModalOpenDoc, setIsModalOpenDoc] = useState(false);
  const [isModalOpenSample, setIsModalOpenSample] = useState(false);
  const [listDocs, setListDocs] = useState(DATA_DOCS);
  const [listSample, setListSample] = useState(DATA_SAMPLE);

  const [docSelected, setDocSelected] = useState({
    title: '',
    desc: '',
    type: '',
    id: null,
  });
  const [sampleSelected, setSampleSelected] = useState({
    title: '',
    desc: '',
    type: '',
    id: null,
  });

  const { Option } = Select;
  const handleFilePicker = () => {
    setIsModalOpenDoc(true);

    // const fileInput = document.createElement('input');
    // fileInput.type = 'file';
    // fileInput.webkitdirectory = true;
    // fileInput.click();

    // fileInput.addEventListener('change', (event) => {
    //   const selectedFolder = event.target.files[0];
    //   console.log('Selected folder:', selectedFolder);
    //   // Perform any desired operations with the selected folder
    // });
  };
  const onFinishDocs = (data: ItemSelect) => {
    setListDocs([...listDocs, data]);
    setDocSelected(data);
  };
  const onFinishSample = (data: ItemSelect) => {
    setListSample([...listSample, data]);
    setSampleSelected(data);
  };
  console.log('listDocs::', listDocs);
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
                <Select
                  style={{ width: '100%' }}
                  placeholder="Chọn bộ tài liệu"
                  value={docSelected?.id}
                  onChange={(val) => {
                    setDocSelected(listDocs.find((it) => it.id === val) || null);
                  }}
                >
                  {listDocs.map((it, indx) => {
                    return (
                      <Option value={it.id} key={indx}>
                        {it.title}
                      </Option>
                    );
                  })}
                </Select>
              </div>
            </Card>
          </Col>
          <Col {...topColResponsiveProps}>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <h3>Chọn mẫu phân tích</h3>
                <PlusOutlined
                  style={{ fontSize: '18px' }}
                  onClick={() => setIsModalOpenSample(true)}
                />
              </div>
              <div>
                <Select
                  style={{ width: '100%' }}
                  placeholder="Chọn bộ tài liệu"
                  value={sampleSelected?.id}
                  onChange={(val) => {
                    setSampleSelected(listSample.find((it) => it.id === val) || null);
                  }}
                >
                  {listSample.map((it, indx) => {
                    return (
                      <Option value={it.id} key={indx}>
                        {it.title}
                      </Option>
                    );
                  })}
                </Select>
              </div>
            </Card>
          </Col>
        </Row>
        <DataInfor docSelected={docSelected} sampleSelected={sampleSelected} />
        <BottomButton />
        <ModalPickDocs
          isModalOpen={isModalOpenDoc}
          setIsModalOpen={setIsModalOpenDoc}
          onFinish={onFinishDocs}
        />
        <ModalPickSample
          isModalOpen={isModalOpenSample}
          setIsModalOpen={setIsModalOpenSample}
          onFinish={onFinishSample}
        />
      </>
    </GridContent>
  );
};

export default AnalyzeFiles;
