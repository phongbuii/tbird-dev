import { Collapse } from 'antd';
import { useState } from 'react';

const FAQPage = () => {
  const { Panel } = Collapse;
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
        <h1>Trợ giúp</h1>
      </header>
      <h3 style={{ marginTop: 12, marginBottom: 12 }}>Câu hỏi thường gặp</h3>
      <Collapse accordion>
        {faqData.map((faqItem) => (
          <Panel header={faqItem.question} key={faqItem.id}>
            <p>{faqItem.answer}</p>
          </Panel>
        ))}
      </Collapse>

      <h3 style={{ marginTop: 12, marginBottom: 12 }}>Câu hỏi thường gặp</h3>
      <Collapse accordion>
        {faqData.map((faqItem) => (
          <Panel header={faqItem.question} key={faqItem.id}>
            <p>{faqItem.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQPage;
