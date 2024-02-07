import { Column } from '@ant-design/plots';
import { Card, Col, DatePicker, Progress, Row, Tabs } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import type dayjs from 'dayjs';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';

export type TimeType = 'today' | 'week' | 'month' | 'year';
const { RangePicker } = DatePicker;

const rankingListData: {
  title: string;
  total: number;
}[] = [];

for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  });
}

const SalesCard = ({
  rangePickerValue,
  salesData,
  isActive,
  handleRangePickerChange,
  loading,
  selectDate,
}: {
  rangePickerValue: RangePickerProps<dayjs.Dayjs>['value'];
  isActive: (key: TimeType) => string;
  salesData: DataItem[];
  loading: boolean;
  handleRangePickerChange: RangePickerProps<dayjs.Dayjs>['onChange'];
  selectDate: (key: TimeType) => void;
}) => {
  const { styles } = useStyles();
  return (
    <Row>
      <Col xl={16} lg={24} md={12} sm={24} xs={24}>
        <Card
          loading={loading}
          bordered={false}
          bodyStyle={{
            padding: 0,
          }}
        >
          <div className={styles.salesCard}>
            <Tabs
              tabBarExtraContent={
                <div className={styles.salesExtraWrap}>
                  <div className={styles.salesExtra}>
                    <a className={isActive('week')} onClick={() => selectDate('week')}>
                      Tuần
                    </a>
                    <a className={isActive('month')} onClick={() => selectDate('month')}>
                      Tháng
                    </a>
                    <a className={isActive('year')} onClick={() => selectDate('year')}>
                      Năm
                    </a>
                  </div>
                  <RangePicker
                    value={rangePickerValue}
                    onChange={handleRangePickerChange}
                    style={{
                      width: 256,
                    }}
                  />
                </div>
              }
              size="large"
              tabBarStyle={{
                marginBottom: 24,
              }}
              items={[
                {
                  key: 'sales',
                  label: 'RAM',
                  children: (
                    <Row>
                      <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                        <div className={styles.salesBar}>
                          <Column
                            height={300}
                            data={salesData}
                            xField="x"
                            yField="y"
                            paddingBottom={12}
                            axis={{
                              x: {
                                title: false,
                              },
                              y: {
                                title: false,
                                gridLineDash: null,
                                gridStroke: '#ccc',
                              },
                            }}
                            scale={{
                              x: { paddingInner: 0.4 },
                            }}
                            tooltip={{
                              name: 'RAM',
                              channel: 'y',
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                  ),
                },
                {
                  key: 'views',
                  label: 'CPU',
                  children: (
                    <Row>
                      <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                        <div className={styles.salesBar}>
                          <Column
                            height={300}
                            data={salesData}
                            xField="x"
                            yField="y"
                            paddingBottom={12}
                            axis={{
                              x: {
                                title: false,
                              },
                              y: {
                                title: false,
                              },
                            }}
                            scale={{
                              x: { paddingInner: 0.4 },
                            }}
                            tooltip={{
                              name: 'CPU',
                              channel: 'y',
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                  ),
                },
              ]}
            />
          </div>
        </Card>
      </Col>
      <Col xl={8} lg={24} md={12} sm={24} xs={24}>
        <Card className={styles.specialFile}>
          <div>
            <h2 className={styles.rankingTitle}>File quan trọng</h2>
            <ul className={styles.rankingList}>
              {[1, 2, 3, 4, 5].map((item, i) => (
                <li key={item}>
                  <div style={{ width: '100%' }}>
                    <div
                      style={{ width: '100%', justifyContent: 'space-between', display: 'flex' }}
                    >
                      <span>File1.docx</span>
                      <span>6/10</span>
                    </div>
                    <Progress
                      percent={75}
                      showInfo={false}
                      status="active"
                      style={{ width: '100%' }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
export default SalesCard;
