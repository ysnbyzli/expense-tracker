import { Table, Tag, Button, Modal, Form, Select, Input, Space, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { addCategory, deleteCategory, getCategories, updateCategory } from '../store/actions/categoryActions';
import { Category, CategoryForm } from '../types/category';
import { GithubPicker } from 'react-color'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

type Mode = "new" | "edit" | "delete";


const emptyForm: CategoryForm = {
    name: "",
    type: "expense",
    color: "green"
}

const Categories = () => {

    const { data, loading, error } = useSelector((state: AppState) => state.categories)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [mode, setMode] = useState<Mode>("new");
    const [form, setForm] = useState<CategoryForm | Category>(emptyForm);
    const [updateId, setUpdateID] = useState<number | null>(null);
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const showModal = (mode: Mode) => {
        setIsModalVisible(true);
        setMode(mode);
    };

    const handleOk = () => {
        // Mode değerine gore create or update creator fonksiyonu cagir
        if (mode === "new") dispatch(addCategory(form));
        if (mode === "edit" && typeof updateId === "number") dispatch(updateCategory(form, updateId));
        if (mode === "delete" && typeof deleteId === "number") dispatch(deleteCategory(deleteId));
        setIsModalVisible(false);
        setMode("new");
        setForm(emptyForm);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setMode("new");
        setForm(emptyForm);
        setUpdateID(null);
        setDeleteId(null)
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
        {
            title: 'Action',
            key: 'action',
            render: (text: string, category: Category) => (
                <Space size="middle">
                    <Tooltip placement="top" title={category.name}>
                        <EditOutlined
                            style={{ color: "#3498db", cursor: "pointer" }}
                            onClick={() => {
                                showModal("edit")
                                setForm(category);
                                setUpdateID(category.id)
                            }} />
                    </Tooltip>
                    <Tooltip placement="top" title={category.name}>
                        <DeleteOutlined style={{ color: "#e74c3c", cursor: "pointer" }} onClick={() => {
                            showModal("delete")
                            setDeleteId(category.id)
                        }} />
                    </Tooltip>
                </Space>
            ),
        },
    ];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <>
            <div style={{ display: "flex" }}>

                <Button type="primary" onClick={() => showModal("new")} style={{ margin: "0 0 20px auto" }}>
                    New Category
                </Button>
                <Modal title={mode === "new" ? "Create New Category" : mode === "edit" ? "Update Category" : "Delete Category"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ disabled: !(mode === "delete") && !form.name }}>
                    {mode === "edit" || mode === "new" ?
                        <Form
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 18 }}
                        >
                            <Form.Item label="Category Name">
                                <Input name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                            </Form.Item>
                            <Form.Item label="Category Type">
                                <Select defaultValue="expense" value={form.type} onChange={(type) => setForm({ ...form, type })}>
                                    <Select.Option value="income">Income</Select.Option>
                                    <Select.Option value="expense">Expense</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Color">
                                <GithubPicker onChange={color => setForm({ ...form, color: color.hex })} color={form.color} />
                            </Form.Item>
                        </Form>
                        : mode === "delete" ? <>Are you sure?</> : null
                    }

                </Modal>
            </div>

            <Table columns={columns} dataSource={data} loading={loading} />
        </>


    )
}

export default Categories;
