
import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';
import SortableTable from 'react-sortable-table';
import { entities } from './data';
window.React = require('react');


function getName(name) {
  return name.split(' ').slice(-1)[0]
}

const NameSorter = {
desc: (data, key) => {
    var result = data.sort(function (_a, _b) {
      const a = getName(_a[key]);
      const b = getName(_b[key]);
      if ( a <= b ) {
        return 1;
      } else if ( a > b) {
        return -1;
      }
    });
    return result;
  },

  asc: (data, key) => {
    return data.sort(function (_a, _b) {
      const a = getName(_a[key]);
      const b = getName(_b[key]);
      if ( a >= b ) {
        return 1;
      } else if ( a < b) {
        return -1;
      }
    })
  }
};


class Table extends Component {
  constructor() {
    super()
    const url = 'https://prod-36.westeurope.logic.azure.com:443/workflows/e12602c8682a4364b99b70c4fdf7e9ea/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=XnE7GrujOeSE9fpNyhx6Qb_-RE4el6UhiMDFb1sikAI'; 
    fetch(url)
    .then(function(responseObj.resp.json()) {
      this.state = {responseObj.re};
    });
    
/*    let data = resp.json());
    this.state = {data}; */
  }

  render() {
    const columns = [
      {
        header: 'Companies House Registered Number',
        key: 'companieshouseno',
        defaultSorting: 'ASC',
        headerStyle: { fontSize: '15px', backgroundColor: '#FFDAB9', width: '100px' },
        dataStyle: { fontSize: '15px', backgroundColor: '#FFDAB9'},
        dataProps: { className: 'align-right' }
        /* , render: (id) => { return <a href={'user/'+id}>{id}</a>; } */
      },
      
      {
        header: 'Company with issued debt',
        key: 'companywithissueddebt',
        headerStyle: { fontSize: '15px' },
        headerProps: { className: 'align-left' }
     /*    descSortFunction: NameSorter.desc,
        ascSortFunction: NameSorter.asc */
      },
      {
        header: 'Exchange the debt is listed on ',
        key: 'exchangethedebtislistedon',
        headerStyle: { fontSize: '15px' },
        sortable: false
      }
    ];

    const style = {
      backgroundColor: '#eee'
    };

    const iconStyle = {
      color: '#aaa',
      paddingLeft: '5px',
      paddingRight: '5px'
    };

    return (
      <div>
      <SortableTable
        data={this.state.data}
        columns={columns}
        style={style}
        iconStyle={iconStyle} /></div>
    );
  }
}

class ShowHide extends React.Component {
  constructor() {
    super();
    this.state = {
      childVisible: false
    }
  }
  render() {
    return(
      <div>
        <div onClick={() => this.onClick()}>
          Click to show/hide entities...
        </div>
        {
          this.state.childVisible
            ? <Table />
            : null
        }
      </div>
    )
  }
  
  onClick() {
    this.setState({childVisible: !this.state.childVisible});
  }
};

export default ShowHide;