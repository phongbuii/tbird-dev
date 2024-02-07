import { EllipsisOutlined } from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Col, Dropdown, Typography } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import type { RadioChangeEvent } from 'antd/es/radio';
import type dayjs from 'dayjs';
import type { FC } from 'react';
import { Suspense, useState } from 'react';
import IntroduceRow from './components/IntroduceRow';
import ListFile from './components/ListFile';
import PageLoading from './components/PageLoading';
import type { TimeType } from './components/SalesCard';
import SalesCard from './components/SalesCard';
import type { AnalysisData } from './data.d';
import { fakeChartData } from './service';
import useStyles from './style.style';
import { getTimeDistance } from './utils/utils';
type RangePickerValue = RangePickerProps<dayjs.Dayjs>['value'];
type AnalysisProps = {
  dashboardAndanalysis: AnalysisData;
  loading: boolean;
};
type SalesType = 'all' | 'online' | 'stores';
const Analysis: FC<AnalysisProps> = () => {
  const { styles } = useStyles();
  const [salesType, setSalesType] = useState<SalesType>('all');
  const [currentTabKey, setCurrentTabKey] = useState<string>('');
  const [rangePickerValue, setRangePickerValue] = useState<RangePickerValue>(
    getTimeDistance('year'),
  );
  const { loading, data } = useRequest(fakeChartData);
  const selectDate = (type: TimeType) => {
    setRangePickerValue(getTimeDistance(type));
  };
  const handleRangePickerChange = (value: RangePickerValue) => {
    setRangePickerValue(value);
  };
  const isActive = (type: TimeType) => {
    if (!rangePickerValue) {
      return '';
    }
    const value = getTimeDistance(type);
    if (!value) {
      return '';
    }
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    if (
      rangePickerValue[0].isSame(value[0] as dayjs.Dayjs, 'day') &&
      rangePickerValue[1].isSame(value[1] as dayjs.Dayjs, 'day')
    ) {
      return styles.currentDate;
    }
    return '';
  };

  let salesPieData;

  if (salesType === 'all') {
    salesPieData = data?.salesTypeData;
  } else {
    salesPieData = salesType === 'online' ? data?.salesTypeDataOnline : data?.salesTypeDataOffline;
  }

  const dropdownGroup = (
    <span className={styles.iconGroup}>
      <Dropdown
        menu={{
          items: [
            {
              key: '1',
              label: '操作一',
            },
            {
              key: '2',
              label: '操作二',
            },
          ],
        }}
        placement="bottomRight"
      >
        <EllipsisOutlined />
      </Dropdown>
    </span>
  );
  const handleChangeSalesType = (e: RadioChangeEvent) => {
    setSalesType(e.target.value);
  };
  const handleTabChange = (key: string) => {
    setCurrentTabKey(key);
  };
  const { Title, Paragraph, Text, Link } = Typography;

  const activeKey = currentTabKey || (data?.offlineData[0] && data?.offlineData[0].name) || '';
  return (
    <GridContent>
      <>
        <Col
          style={{
            marginBottom: 24,
          }}
        >
          <Title level={2}>Chào mừng Admin1!</Title>
          <Text type="secondary">Dưới đây là các tệp đã xử lý trên hệ thống</Text>
        </Col>
        <Suspense fallback={<PageLoading />}>
          <IntroduceRow loading={loading} visitData={data?.visitData || []} />
        </Suspense>

        <Suspense fallback={null}>
          <SalesCard
            rangePickerValue={rangePickerValue}
            salesData={data?.salesData || []}
            isActive={isActive}
            handleRangePickerChange={handleRangePickerChange}
            loading={loading}
            selectDate={selectDate}
          />
        </Suspense>
        <ListFile />
      </>
    </GridContent>
  );
};
export default Analysis;
