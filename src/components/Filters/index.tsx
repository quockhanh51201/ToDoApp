import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { priorityfilterChange, searchfilterChange, statusfilterChange } from '../../redux/action'

const { Search } = Input;

export default function Filters() {

    const [searchText, setSearchText] = useState('')
    const [filterStatus, setFilterStatus] = useState('All')
    const [priority, setPriority] = useState([])


    const dispatch = useDispatch()
    const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchText(value);
        dispatch(searchfilterChange(value));
    };
    const handleStatusChange = (e: any) => {
        const value = e.target.value;
        setFilterStatus(value)
        dispatch(statusfilterChange(value));
    }
    const handlePriorityChange = (e: any) => {
        setPriority(e)
        dispatch(priorityfilterChange(e))
    }
    return (
        < Row justify='center' >
            <Col span={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Search
                </Typography.Paragraph>
                <Search placeholder='input search text' value={searchText} onChange={handleSearchTextChange} />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group
                    value={filterStatus}
                    onChange={handleStatusChange}
                >
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    style={{ width: '100%' }}
                    value={priority}
                    onChange={handlePriorityChange}
                >
                    <Select.Option value='High' label='High'>
                        <Tag color='red'>High</Tag>
                    </Select.Option>
                    <Select.Option value='Medium' label='Medium'>
                        <Tag color='blue'>Medium</Tag>
                    </Select.Option>
                    <Select.Option value='Low' label='Low'>
                        <Tag color='gray'>Low</Tag>
                    </Select.Option>
                </Select>
            </Col>
        </ Row>
    );
}
