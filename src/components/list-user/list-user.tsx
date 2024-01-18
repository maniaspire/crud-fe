import { FunctionComponent, useEffect, useState } from "react";
import { UserComponentProps } from "./list-user.interface";
import { TableActionHandler, TableComponent } from "../../shared";
import { useHttp } from "../../core/hooks";
import { Gender, WorkRoles } from "../user-form";
import { TableActions } from "../../shared/components/table/table.constant";
import { useNavigate } from "react-router-dom";

const configuration = [
    { name: 'User Name', field: 'username' },
    { name: 'Gender', field: 'genderName' },
    { name: 'Email', field: 'email' },
    { name: 'Work Role', field: 'workRoleName' },
    {
        name: 'Actions',
        actions: [
            { name: 'delete', type: TableActions.delete },
            { name: 'edit', type: TableActions.edit }]
    }]

const UserComponent: FunctionComponent<UserComponentProps> = () => {
    const [data, setData] = useState([]);
    const { get, deleteApi } = useHttp('user');
    const navigate = useNavigate()

    const loadData = async () => {
        const data = await get('');
        const users = data.data.map((item: any) => ({
            ...item,
            genderUuid: item.gender,
            genderName: Gender.find(gender => gender._id === item.gender)?.name,
            workRoleName: WorkRoles.find(workRole => workRole._id === item.workRole)?.name,
            workRoleUuid: item.workRole
        }))
        setData(users);
    }


    useEffect(() => {
        loadData();
    }, [])

    const actionHandler = async ({ data, type, id }: TableActionHandler) => {
        if (type === TableActions.delete) {
            await deleteApi('', id);
            await loadData()
        }
        if (type === TableActions.edit) {
            navigate('/edit-user', { state: { data } })
        }
    }
    return (<>
        <TableComponent config={configuration} data={data} actionHandler={actionHandler}></TableComponent>
    </>);
}

export { UserComponent };