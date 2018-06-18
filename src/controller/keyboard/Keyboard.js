import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar.js';
import Content from '../../components/content/Content.js';

import { title, links, content, attributeList, example} from '../../static/keyboardData';

class Keyboard extends Component {
    render() {
        return (
            <div>
                <div>
                    <Sidebar title={title} links={links} />
                </div>
                <div>
                    <Content title={title} main={content} attrList={attributeList} example={example} />
                </div>
            </div>
        );
    }
}

export default Keyboard;
