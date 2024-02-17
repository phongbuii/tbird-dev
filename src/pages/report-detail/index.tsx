import type { ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Badge, Card, Descriptions, Divider } from 'antd';
import type { FC } from 'react';
import React from 'react';
import type { BasicGood, BasicProgress } from './data.d';
import { queryBasicProfile } from './service';
import useStyles from './style.style';
const progressColumns: ProColumns<BasicProgress>[] = [
  {
    title: 'Thời gian',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Tỷ lệ cao',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: (text: React.ReactNode) => {
      if (text === 'success') {
        return <Badge status="success" text="Thành công" />;
      }
      return <Badge status="processing" text="Thất bại" />;
    },
  },
  {
    title: 'Quản lý',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: 'Giá',
    dataIndex: 'cost',
    key: 'cost',
  },
];
const Basic: FC = () => {
  const { styles } = useStyles();
  const { loading } = useRequest(() => {
    return queryBasicProfile();
  });

  const fakeGoodsData = [
    {
      id: '001',
      name: 'React',
      barcode: 10,
      price: 'High',
      num: '2022-01-10',
    },
    {
      id: '002',
      name: 'JavaScript',
      barcode: 8,
      price: 'Medium',
      num: '2022-01-15',
    },
    {
      id: '003',
      name: 'Ant Design',
      barcode: 5,
      price: 'Low',
      num: '2022-01-20',
    },
  ];
  const fakeProgressData = [
    {
      time: '2022-01-10',
      rate: '90%',
      status: 'success',
      operator: 'Admin',
      cost: '$100',
    },
    {
      time: '2022-01-15',
      rate: '75%',
      status: 'success',
      operator: 'User',
      cost: '$50',
    },
    {
      time: '2022-01-20',
      rate: '50%',
      status: 'fail',
      operator: 'Manager',
      cost: '$80',
    },
  ];
  const renderContent = (value: any, _: any, index: any) => {
    const obj: {
      children: any;
      props: {
        colSpan?: number;
      };
    } = {
      children: value,
      props: {},
    };
    if (index === fakeGoodsData.length) {
      obj.props.colSpan = 0;
    }
    return obj;
  };
  const goodsColumns: ProColumns<BasicGood>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text: React.ReactNode, _: any, index: number) => {
        if (index < fakeGoodsData.length) {
          return <span>{text}</span>;
        }
        return {
          children: (
            <span
              style={{
                fontWeight: 600,
              }}
            >
              总计
            </span>
          ),
          props: {
            colSpan: 4,
          },
        };
      },
    },
    {
      title: 'Từ khóa',
      dataIndex: 'name',
      key: 'name',
      render: renderContent,
    },
    {
      title: 'Số lần xuất hiện',
      dataIndex: 'barcode',
      key: 'barcode',
      render: renderContent,
    },
    {
      title: 'Độ quan trọng',
      dataIndex: 'price',
      key: 'price',
      align: 'right' as 'left' | 'right' | 'center',
      render: renderContent,
    },
    {
      title: 'Thời gian phân tích',
      dataIndex: 'num',
      key: 'num',
      align: 'right' as 'left' | 'right' | 'center',
      render: (text: React.ReactNode, _: any, index: number) => {
        if (index < fakeGoodsData.length) {
          return text;
        }
        return (
          <span
            style={{
              fontWeight: 600,
            }}
          >
            {text}
          </span>
        );
      },
    },
  ];
  return (
    <PageContainer>
      <Card bordered={false}>
        <Descriptions
          title="Tổng quan"
          style={{
            marginBottom: 32,
          }}
        >
          <Descriptions.Item label="Từ khóa">1000000000</Descriptions.Item>
          <Descriptions.Item label="Loại">email</Descriptions.Item>
          <Descriptions.Item label="Thời gian">1234123421</Descriptions.Item>
          <Descriptions.Item label="Tỷ lệ hoàn thành">50%</Descriptions.Item>
        </Descriptions>
        <Divider
          style={{
            marginBottom: 32,
          }}
        />
        <Descriptions
          title="Mẫu phân tích"
          style={{
            marginBottom: 32,
          }}
        >
          <Descriptions.Item label="Dung lượng">12GB</Descriptions.Item>
          <Descriptions.Item label="Thời gian">18100000000</Descriptions.Item>
          <Descriptions.Item label="Loại">email</Descriptions.Item>
          <Descriptions.Item label="Loại bỏ">10%</Descriptions.Item>
          <Descriptions.Item label="Từ khóa chính">a,b,c</Descriptions.Item>
        </Descriptions>
        <Divider
          style={{
            marginBottom: 32,
          }}
        />
        <div className={styles.title}>Tỷ lệ từ khóa</div>
        <ProTable
          style={{
            marginBottom: 24,
          }}
          pagination={false}
          search={false}
          loading={loading}
          options={false}
          toolBarRender={false}
          dataSource={fakeGoodsData}
          columns={goodsColumns}
          rowKey="id"
        />
        <div className={styles.title}>Mốc thời gian</div>
        <ProTable
          style={{
            marginBottom: 16,
          }}
          pagination={false}
          loading={loading}
          search={false}
          options={false}
          toolBarRender={false}
          dataSource={fakeProgressData}
          columns={progressColumns}
        />
      </Card>
    </PageContainer>
  );
};
export default Basic;
