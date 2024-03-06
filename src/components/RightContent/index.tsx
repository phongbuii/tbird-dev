import { BellOutlined, QuestionCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { SelectLang as UmiSelectLang } from '@umijs/max';
import { List, Modal } from 'antd';
import { useState } from 'react';

export type SiderTheme = 'light' | 'dark';

export const SelectLang = () => {
  return <UmiSelectLang />;
};
export const ItemNotifi = () => {
  const [faqData, setFaqData] = useState([
    {
      id: 1,
      question: 'Keyword analytics là gì?',
      answer:
        'Keyword analytics là quá trình phân tích và đánh giá hiệu suất của các từ khóa được sử dụng trong chiến dịch tiếp thị trực tuyến.',
    },
    {
      id: 2,
      question: 'Tại sao keyword analytics quan trọng?',
      answer:
        'Keyword analytics giúp doanh nghiệp hiểu rõ hơn về cách mà khách hàng tìm kiếm thông tin và giúp tối ưu hóa chiến dịch tiếp thị trên mạng.',
    },
    {
      id: 3,
      question: 'Làm thế nào để thực hiện keyword analytics?',
      answer:
        'Để thực hiện keyword analytics, bạn cần sử dụng các công cụ như Google Analytics, SEMrush, Ahrefs để theo dõi và phân tích từ khóa.',
    },
  ]);

  return (
    <div>
      <header>
        <h1>Thông báo</h1>
      </header>
      <List
        itemLayout="horizontal"
        dataSource={faqData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<BellOutlined style={{ marginTop: 10 }} />}
              title={<p style={{ fontWeight: 'normal', marginBottom: -4 }}>{item.answer}</p>}
              description={'4 giờ trước'}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        window.open('https://pro.ant.design/docs/getting-started');
      }}
    >
      <QuestionCircleOutlined />
    </div>
  );
};

export const Notification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const ModalNotifi = () => {
    return (
      <Modal
        title=""
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        wrapClassName="custom-modal"
        style={{ top: 40, right: 80, position: 'absolute', maxWidth: '80%' }}
      >
        <ItemNotifi />
      </Modal>
    );
  };
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
    >
      <BellOutlined
        onClick={() => {
          // Handle notification click event
          showModal();
          console.log('Notification clicked');
        }}
      />
      <ModalNotifi />
    </div>
  );
};
export const Search = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        // Handle search click event
        console.log('Search clicked');
      }}
    >
      <SearchOutlined />
    </div>
  );
};