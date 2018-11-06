/**
 *
 * @title ref-multiple-selection 参照-左树右表 
 * @description 具有多选功能的矩阵布局弹出参照，可多选
 *
 */
import React, { Component } from 'react';
import { RefMultipleSelectionWithInput } from 'ref-multiple-selection';
import 'ref-multiple-selection/dist/index.css';
import Form from "bee-form";
import {Button} from 'tinper-bee'
const option = {
    title: '多选',
    param: {
        refCode: 'test_common',//test_common||test_grid||test_tree||test_treeTable
        tenantId: 'xxx',
        sysId: 'xxx'
    },
    refModelUrl: {
        gridUrl: 'https://mock.yonyoucloud.com/mock/358/commonRefsearch'
    },
    backdrop: false,
    displayField: '{refname}-{refcode}',//显示内容的键
    valueField: 'refpk',
    checkedArray: [
        { "refremark": "用友骨干", "refpk": "857c41b7-e1a3-11e5-aa70-0242ac11001d", "refcode": "wujd", "refname": "吴惊道" }, 
        { "refremark": "用友骨干", "refpk": "65c2c424-e1a3-11e5-aa70-0242ac11003d", "refcode": "ms", "refname": "马帅" }
    ],
    rules: [{
        required: true, message: '请输入密码',
    }]
}
class Demo1 extends Component {
    constructor() {
        super();
        this.state = {
            value: 0
        };
    }
    render() {
        const { getFieldError } = this.props.form;
        return (
            <div className="demoPadding">
                <RefMultipleSelectionWithInput
                    {...option}
                form={this.props.form}
                />
                <span className='error'>
                    {getFieldError('refpk')}
                </span>
                <Button colors="primary" onClick={() => {
                    this.props.form.validateFields((err, values) => {
                        console.log(err, values)
                    });
                }}>submit</Button>
            </div>
        )
    }
}

export default Form.createForm()(Demo1);
