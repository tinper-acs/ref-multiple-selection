
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';
const pkg = require('../package.json')




const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";
var DemoArray = [{"example":<Demo1 />,"title":" ref-multiple-select","code":"/**\n *\n * @title ref-multiple-selection 参照-左树右表 \n * @description 具有多选功能的矩阵布局弹出参照，可多选\n *\n */\nimport React, { Component } from 'react';\nimport { RefMultipleSelectionWithInput } from 'ref-multiple-selection';\nimport 'ref-multiple-selection/dist/index.css';\nimport Form from \"bee-form\";\nimport {Button} from 'tinper-bee'\nconst option = {\n    title: '多选',\n    param: {\n        refCode: 'test_common',//test_common||test_grid||test_tree||test_treeTable\n        tenantId: 'xxx',\n        sysId: 'xxx'\n    },\n    refModelUrl: {\n        gridUrl: 'https://mock.yonyoucloud.com/mock/358/commonRefsearch'\n    },\n    backdrop: false,\n    displayField: '{refname}-{recode}',//显示内容的键\n    valueField: 'refpk',\n    checkedArray: [\n        { \"refremark\": \"用友骨干\", \"refpk\": \"857c41b7-e1a3-11e5-aa70-0242ac11001d\", \"refcode\": \"wujd\", \"refname\": \"吴惊道\" }, \n        { \"refremark\": \"用友骨干\", \"refpk\": \"65c2c424-e1a3-11e5-aa70-0242ac11003d\", \"refcode\": \"ms\", \"refname\": \"马帅\" }\n    ],\n    rules: [{\n        required: true, message: '请输入密码',\n    }]\n}\nclass Demo1 extends Component {\n    constructor() {\n        super();\n        this.state = {\n            value: 0\n        };\n    }\n    render() {\n        const { getFieldError } = this.props.form;\n        return (\n            <div className=\"demoPadding\">\n                <RefMultipleSelectionWithInput\n                    {...option}\n                form={this.props.form}\n                />\n                <span className='error'>\n                    {getFieldError('refpk')}\n                </span>\n                <Button colors=\"primary\" onClick={() => {\n                    this.props.form.validateFields((err, values) => {\n                        console.log(err, values)\n                    });\n                }}>submit</Button>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 具有多选功能的矩阵布局弹出参照，可多选"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ process.env.NODE_ENV==='development'?code:code.replace('../../src/index.js',pkg.name).replace('../../src/index',pkg.name) }</code></pre>
                </Panel>
            </Col>
        )
    }
}

export default class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

