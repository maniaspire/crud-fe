export interface ActionConfig {
    name: string;
    type: string;
}

export interface TableConfig {
    name: string;
    field?: string;
    actions?: ActionConfig[];
}

export interface TableComponentProps {
    config?: TableConfig[],
    data?: any[];
    actionHandler?: any;
}

