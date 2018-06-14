import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class Menu extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          title: 'Home',
          url: ''
        },
        {
          id: 2,
          title: 'Resources',
          url: 'resources/myresources'
        },
        {
          id: 3,
          title: 'Settings',
          url: 'settings'
        }
      ],
    };
  }

  render() {
    let items = this.state.items;
    return (
        <ul>
          {
            items.map(item => {
                return <li key={item.id}><Link to={item.url}>{item.title}</Link></li>
            })
          }
        </ul>
    );
  }
}

export default Menu;
