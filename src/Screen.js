import React, { useState, useEffect } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { data } from './Data';

function Screen({value}) {


    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.code': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        company: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        balance: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        date: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    });
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    useEffect(() => {
        setCustomers(data);
        setLoading(false);
    }, []);

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const refresh =()=>{
        window.location.reload();
    }

    const header = renderHeader();

    const footer = (
        <div className="flex justify-content-start">
            <Button icon="pi pi-refresh" label="Reload" severity="warning" onClick={refresh}/>
        </div>
    );

    return (
        <div className="card">
            {
                value == "Screen1" ? <DataTable value={customers} paginator rows={5} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                    globalFilterFields={['id', 'name', 'country.name', 'country.code', 'company', 'representative', 'date', 'balance']} header={header} emptyMessage="No Data found.">
                    <Column field="id" header="Id" filter filterPlaceholder="Search id" style={{ minWidth: '11rem' }} />
                    <Column field="name" header="Name" filter filterPlaceholder="Search name" style={{ minWidth: '13rem' }} />
                    <Column field="country.name" header="Country" filter filterPlaceholder="Search country" style={{ minWidth: '12rem' }}  />
                    <Column field="company" header="Company" filter filterPlaceholder="Search company" style={{ minWidth: '12rem' }}  />
                    <Column field="representative" header="Representative" filter filterPlaceholder="Search representative" style={{ minWidth: '13rem' }} />
                    <Column field="balance" header="Balance" filter filterPlaceholder="Search balance" style={{ minWidth: '12rem' }} />
                </DataTable>
                    :
                    <DataTable value={customers} footer={footer} paginator rows={5} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                        emptyMessage="No Data found.">
                        <Column field="id" header="Id" filter filterPlaceholder="Search by id" style={{ minWidth: '12rem' }} sortable />
                        <Column field="country.name" header="Country" filter filterPlaceholder="Search by country" style={{ minWidth: '12rem' }} sortable />
                        <Column field="country.code" header="Country Code" filter filterPlaceholder="Search by country code" style={{ minWidth: '12rem' }} sortable />
                        <Column field="date" header="Date" filter filterPlaceholder="Search Date (YYYY-MM-DD)" style={{ minWidth: '12rem' }} sortable />
                    </DataTable>
            }
        </div>
    );
}

export default Screen