export interface ActionConfig {
    name: string;
    type: string;
}

export interface TableConfig {
    name: string;
    field?: string;
    actions?: ActionConfig[];
}

export interface TableActionHandler {
    type: string;
    id: string;
    data: any;
}

export interface TableComponentProps {
    config?: TableConfig[],
    data?: any[];
    actionHandler?: (data: TableActionHandler) => any;
}

