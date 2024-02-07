import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Row, Tooltip } from 'antd';
import numeral from 'numeral';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
import { ChartCard } from './Charts';
import Trend from './Trend';
const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginBottom: 24,
  },
};
const IntroduceRow = ({ loading, visitData }: { loading: boolean; visitData: DataItem[] }) => {
  const { styles } = useStyles();
  return (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          title="File đã đọc"
          action={
            <Tooltip title="File đã đọc">
              <InfoCircleOutlined />
            </Tooltip>
          }
          loading={loading}
          total={numeral(8846).format('0,0')}
          contentHeight={46}
        >
          <Trend
            flag="up"
            style={{
              marginRight: 16,
            }}
          >
            Tuần
            <span className={styles.trendText}>12%</span>
          </Trend>
          <Trend flag="down">
            Tháng
            <span className={styles.trendText}>11%</span>
          </Trend>
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          title="File chưa đọc"
          action={
            <Tooltip title="File chưa đọc">
              <InfoCircleOutlined />
            </Tooltip>
          }
          loading={loading}
          total={numeral(8846).format('0,0')}
          contentHeight={46}
        >
          <Trend
            flag="up"
            style={{
              marginRight: 16,
            }}
          >
            Tuần
            <span className={styles.trendText}>12%</span>
          </Trend>
          <Trend flag="down">
            Tháng
            <span className={styles.trendText}>11%</span>
          </Trend>
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          title="File lỗi"
          action={
            <Tooltip title="File lỗi">
              <InfoCircleOutlined />
            </Tooltip>
          }
          loading={loading}
          total={numeral(8846).format('0,0')}
          contentHeight={46}
        >
          <Trend
            flag="up"
            style={{
              marginRight: 16,
            }}
          >
            Tuần
            <span className={styles.trendText}>12%</span>
          </Trend>
          <Trend flag="down">
            Tháng
            <span className={styles.trendText}>11%</span>
          </Trend>
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          title="File mã hóa"
          action={
            <Tooltip title="File mã hóa">
              <InfoCircleOutlined />
            </Tooltip>
          }
          loading={loading}
          total={numeral(8846).format('0,0')}
          contentHeight={46}
        >
          <Trend
            flag="up"
            style={{
              marginRight: 16,
            }}
          >
            Tuần
            <span className={styles.trendText}>12%</span>
          </Trend>
          <Trend flag="down">
            Tháng
            <span className={styles.trendText}>11%</span>
          </Trend>
        </ChartCard>
      </Col>
    </Row>
  );
};
export default IntroduceRow;
