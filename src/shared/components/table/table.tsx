// ... (import statements)

import { FunctionComponent } from "react";
import { TableComponentProps } from "./table.interface";
import './table.css'

const TableComponent: FunctionComponent<TableComponentProps> = ({ config: configuration, data, actionHandler }) => {
    if (!configuration || !data) {
      throw Error('Invalid Table config');
    }
  
    return (
      <div className="table-container">
        <h2>Responsive Tables Using LI</h2>
        <ul className="responsive-table">
          <li className="table-header">
            {configuration?.map((config, index) => {
              const classes = `col col-${index + 1}`;
              return (
                <div key={`header-${index}`} className={classes}>
                  {config.name}
                </div>
              );
            })}
          </li>
          {data?.map((row: any, dataIndex) => {
            return (
              <li className="table-row" key={`row-${row._id}`}>
                {configuration?.map((config, index) => {
                  const classes = `col col-${index + 1}`;
                  return (
                    <div className={classes} key={`cell-${row._id}-${index}`}>
                      {config.actions ? (
                        config.actions.map((action, actionIndex) => (
                          <button key={`action-${row._id}-${actionIndex}`} onClick={() => actionHandler({ id: row._id, type: action.type })}>
                            {action.name}
                          </button>
                        ))
                      ) : (
                        config.field && row[config.field]
                      )}
                    </div>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
  export { TableComponent };
  