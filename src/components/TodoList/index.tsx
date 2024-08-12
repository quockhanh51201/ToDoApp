import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/action'
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { ITodo } from '../../Interface';
import { todosRemaining } from '../../redux/selectors';
import { saveStateToLocalStorage } from '../../utils';
import { KeyListToDo } from '../../key/LocalStorage';

export default function TodoList() {
  const [todo, setTodo] = useState<ITodo>({
    id: '',
    name: '',
    completed: false,
    priority: 'High'
  })
  const dispatch = useDispatch()
  const todoList = useSelector(todosRemaining)
  useEffect(() => {
    saveStateToLocalStorage(todoList, KeyListToDo)
  }, [todoList])

  const handleAddButtonClick = () => {
    const newTodo = {
      ...todo,
      id: uuidv4()
    }
    setTodo({
      ...todo,
      name: '',
      priority: 'Medium'
    })
    dispatch(addTodo(newTodo))
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      name: e.target.value,
    })
  }
  const handlePriorityChange = (val: string) => {
    setTodo({
      ...todo,
      priority: val
    })
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map(todo => <Todo key={todo.id} id={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todo.name} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={todo.priority} onChange={handlePriorityChange}>
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
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
