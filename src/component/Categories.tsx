import { Table, Tag, Button, Modal, Form, Select, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { addCategory, getCategories } from '../store/actions/categoryActions';
import { Category, CategoryForm } from '../types/category';
import { GithubPicker } from 'react-color'

type Mode = "new" | "edit";


const emptyForm: CategoryForm = {
    name: "",
    type: "expense",
    color: "green"
}

const Categories = () => {

    const { data, loading, error } = useSelector((state: AppState) => state.categories)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [mode, setMode] = useState<Mode>("new");
    const [form, setForm] = useState<CategoryForm>(emptyForm);
    const showModal = (mode: Mode) => {
        setIsModalVisible(true);
        setMode(mode);
    };

    const handleOk = () => {
        // Mode değerine gore create or update creator fonksiyonu cagir
        dispatch(addCategory(form));
        setIsModalVisible(false);
        setMode("new");
        setForm(emptyForm);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setMode("new");
        setForm(emptyForm);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: (text: string, category: Category) => {
                return <Tag color={category.color} >{category.type.toUpperCase()}</Tag>;
            }
        },
        // {
        //   title: 'Action',
        //   key: 'action',
        //   render: (text, record) => (
        //     <Space size="middle">
        //       <a>Invite {record.name}</a>
        //       <a>Delete</a>
        //     </Space>
        //   ),
        // },
    ];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])


    return (
        <>
            <div style={{ display: "flex" }}>

                <Button type="primary" onClick={() => showModal("new")} style={{ margin: "0 0 20px auto" }}>
                    Create
                </Button>
                <Modal title={mode === "new" ? "Create New Category" : "Update Category"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ disabled: !form.name }}>
                    <Form
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                    >
                        <Form.Item label="Category Name">
                            <Input name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        </Form.Item>
                        <Form.Item label="Category Type">
                            <Select defaultValue="expense" onChange={(type) => setForm({ ...form, type })}>
                                <Select.Option value="income">Income</Select.Option>
                                <Select.Option value="expense">Expense</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Color">
                            <GithubPicker onChange={color => setForm({ ...form, color: color.hex })} color={form.color} />
                        </Form.Item>
                    </Form>


                </Modal>
            </div>

            <Table columns={columns} dataSource={data} loading={loading} />
        </>


    )
}

export default Categories;
