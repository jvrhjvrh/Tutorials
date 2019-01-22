import {
    Form, 
    Input,
    Button,
    Icon
  } from 'antd';
import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import './NewUser.css'
import { AddUser } from '../Redux/actions';

let id = 0;
class RegistrationForm extends React.Component {
  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }
  handleSubmit = (e) => {
    const {onAddUser, history} = this.props;
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        onAddUser({
          name:values.Name,
          text:values.Text,
          img:values.images, 
        })
        id =0;
        history.push('');
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <Form.Item
        label={index === 0 ? 'Images' : ''}
        required={false}
        key={k}
      >
        {getFieldDecorator(`images[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [{
            required: true,
            whitespace: true,
            message: "Please add a link to a image or delete this field.",
          }],
        })(
          <Input placeholder="Image" style={{ width: '60%', marginRight: 8 }} />
        )}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            disabled={keys.length === 1}
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));
    if(id === 0)
          this.add();
    return (
      <Form onSubmit={this.handleSubmit} className = 'newUserForm'>
          <Form.Item label='Name'>
              {getFieldDecorator('Name', {
                  rules: [{
                  required: true,
                  }],
              })(
                  <Input />
              )}
          </Form.Item>
          <Form.Item label= 'Text' className = 'text'>
                  {getFieldDecorator('Text', {
                      rules: [{
                          required:true
                      }]})(
                          <Input />
                  )}
          </Form.Item>
          {formItems}
          <Button type = 'primary' onClick={()=> this.add()}>Add new Image</Button>
          <Button type='primary' htmlType = 'submit'>Create</Button>
          <Button type='danger' onClick = {()=>this.props.history.push('')}>Cancel</Button>
      </Form>
    );
  }
}

const mapDispatchToProps ={
    onAddUser: AddUser
}
const WrappedRegistrationForm = Form.create({ name: 'NewUser' })(RegistrationForm);

export default withRouter(connect(null,mapDispatchToProps)(WrappedRegistrationForm));