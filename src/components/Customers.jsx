import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        sorter: true,
        width: '20%',
    },
    {
        title: 'Company Name',
        dataIndex: 'companyName',
        sorter: true,
        width: '20%',
    },
    {
        title: 'Contact Name',
        dataIndex: 'contactName',
        width: '20%',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        render: (address) => `${address.street}`,
        width: '20%',
    },
    {
        title: 'Detail',
        render: (value) => {
            return <Link to={`/customers/${value.id}`}><button className='detail-btn'>Detail</button></Link>
        },
        
    },
    {
        title: 'Add to favourite',
        render: () => {
            return <>
            <button className='favourite-btn'><b>Favourite</b> </button>
            </>
        },

    },
];
const Customers = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });
    const axiosData = () => {
        setLoading(true);
        axios.get('https://northwind.vercel.app/api/customers').then((res)=>{
            setData(res.data)
            setLoading(false)
           
        })
    };

    useEffect(() => {
        axiosData();
    }, [tableParams]);
    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });

        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setData([]);
        }
    };
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={tableParams.pagination}
            loading={loading}
            onChange={handleTableChange}
        />
    );
};
export default Customers;
