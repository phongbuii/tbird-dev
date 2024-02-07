import { Button, Card, Checkbox, Typography } from 'antd';

const { Text, Title } = Typography;

const BottomButton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '50%' }} bodyStyle={{ paddingRight: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginTop: '20px' }}>
            <Checkbox>Nhận dạng quang học OCR</Checkbox>
            <br />
            <Checkbox>Checkbox 2</Checkbox>
            <br />
            <Checkbox>Checkbox 3</Checkbox>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button type="primary">Phân tích</Button>
        </div>
      </Card>
    </div>
  );
};

export default BottomButton;
