export type Link = string;
export type Source = string;
export type ID = number | string;
export type Email = string;
export type ToggleState = 'on' | 'off';
export type ExpandableState = 'expanded' | 'compacted';
export type DateTime = number;
export type MetricValue = number | AvgValue;
export type DimensionValue = number | DateTime | ID | string;
export type ReportValue = MetricValue | DimensionValue;
export type ReportConfigFilter = number | [DateTime, DateTime] | 'agents' | 'departments';

export interface CompanyInfo {
    name: string;
    logo: Source | null;
}

export interface CurrentAccount {
    logo: Source;
    name: string;
}

interface AvgValue {
    sum: number;
    count: number;
}
