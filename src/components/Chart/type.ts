export interface TypeData {
  labels: number;
  active: number;
  deaths: number;
  recovered: number;
}

export interface ChartPropsType {
  data: any;
}

export type TypeChartData = {
  labels: number;
  datasets: any[];
};
