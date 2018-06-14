import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';

class Tab extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          title: 'My Resources',
          url: '/resources/myresources'
        },
        {
          id: 2,
          title: 'Purchased',
          url: '/resources/purchased'
        },
        {
          id: 2,
          title: 'Add Resource',
          url: '/resources/add'
        }
      ],
    };
  }

  render() {
    let items = this.state.items;

    return (
        <div className="tabs">
          <ul>
            {
              items.map(item => {
                  return <li key={item.id}><Link to={item.url}>{item.title}</Link></li>
              })
            }
          </ul>
        </div>
    );
  }
}

export default Tab;
