import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar.js';
import Content from '../components/content/Content.js';

import { title, links, content } from '../static/graphicsData.js';

class Graphics extends Component {
    render() {
        return (
            <div>
                {console.log(content)}
                <div>
                    <Sidebar title={title} links={links} />
                </div>
                <div>
                    <Content title={title} main={content} />
                </div>
            </div>
        );
    }
}

export default Graphics;
