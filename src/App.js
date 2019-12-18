import React from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List,Row,Col,Card } from 'antd'
import Store from './store'
import {getAddItemAction,getDeleteAction } from './store/actionCreators';

class TodoList extends React.Component{
   
  constructor(props){
    super(props);
    this.state = Store.getState();

    Store.subscribe(this.handleStoreChange)
  }

  //store change
  handleStoreChange=()=>{
    this.setState(Store.getState())
  }

  handleAddItem=()=>{
      Store.dispatch(getAddItemAction(this.state.inputValue));
      this.setState({
        inputValue:''
      })
  }
  inputValueChange=(e)=>{
    this.setState({
      inputValue:e.target.value
    }) 
  }
  handleDelteItem=(index)=>{
    
    Store.dispatch(getDeleteAction(index));
  }

  render(){
    return (
      <div>
        <Row gutter={16,16}>
          <Col span={12}>
            <Card title="todo list app demo">
              <Row>
                <Col span={18}>
                <Input placeholder="todo info" value={this.state.inputValue} onChange={(e)=>this.inputValueChange(e)}></Input>
                </Col>
                <Col span={6}>
                  <Button type="primary" onClick={this.handleAddItem}>增加</Button>
                </Col>
              </Row>
              <Row>
                  <Col>
                  <List
                          bordered
                          dataSource={this.state.list}
                          renderItem={(item,index)=><List.Item onClick={()=>this.handleDelteItem(index)}>{item }</List.Item>}
                        />
                  </Col>
              </Row>
              
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TodoList;
