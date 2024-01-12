import { FunctionComponent } from "react";
import { UserComponentProps } from "./list-user.interface";
import { TableComponent } from "../../shared";

const configuration = [{ name: 'Job Id', field: 'jobId' },
{ name: 'Customer Name', field: 'customerName' },
{ name: 'Amount Due', field: 'amountDue' },
{
    name: 'Payment Status',
    actions: [
        { name: 'delete', type: 'DELETE' },
        { name: 'edit', type: 'EDIT' }]
}]

const Testdata = [{
    _id: '123',
    jobId: '42235',
    customerName: 'John Doe',
    amountDue: '2345678',
}]

const UserComponent: FunctionComponent<UserComponentProps> = () => {
    const actionHandler = (data: any) => {
        console.log(data, 'data12345432');
    }
    return (<>
        <TableComponent config={configuration} data={Testdata} actionHandler={actionHandler}></TableComponent>
    </>);
}

export { UserComponent };