import React from 'react';
import DataTable from 'react-data-table-component';
 

const columns = [
  {
    name: 'Publishing_date',
    selector: 'Publishing_date',
    sortable: true,
    width:'200px'
  },
  {
    name: 'Headline',
    selector: 'Headline',
    sortable: true,
    width: '400px'
    
  },
  {
    name: 'Summary',
    selector: 'Summary',
    sortable: true,
    width: '400px'
    
  },
  {
    name: 'URL',
    selector: 'URL',
    sortable: true,
    width: '320px'
    
  },
  {
    name: 'Source',
    selector: 'Source',
    sortable: true,
    width: '150px'
    
  },
];
 
class MyComponent extends React.Component {
  render() {
    return (
      <DataTable
        title="Articles"
        columns={columns}
        data={this.props.data}
        responsive={false}
      />
    )
  }
};

export default MyComponent