import { BellOutlined, QuestionCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { SelectLang as UmiSelectLang } from '@umijs/max';

export type SiderTheme = 'light' | 'dark';

export const SelectLang = () => {
  return <UmiSelectLang />;
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
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        // Handle notification click event
        console.log('Notification clicked');
      }}
    >
      <BellOutlined />
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
