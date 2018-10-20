import React, {Component} from 'react'
//import TableSample from './tablesample.jsx'
//import TableAnt from './anttable.jsx '
import { Table, DatePicker, Button, } from 'antd';
import '../admin.css'
const { RangePicker } = DatePicker




function formatData(data){
    let newData = []
    for(let i = 0; i< data.length; i++)
        {
            let newRow = {  key: data[i].id,
                            id : data[i].id,
                            user : firstCharToUpper(data[i].user.name) + ' ' + firstCharToUpper(data[i].user.lastname),
                            dept : data[i].user.department.dept_name,
                            stoptype : data[i].stoptype.type,
                            minutes : data[i].minutes,
                            comment: data[i].comment,
                            start : toMySQLFormat(new Date(data[i].start)),
                            stop : toMySQLFormat(new Date(data[i].stop))
            }
            newData.push(newRow)
        }
    return newData

}

const firstCharToUpper = (string)=>{
    return string.replace(/\b(\w)/g, c=>c.toUpperCase());
  }
  
  function toMySQLFormat(date){
    let pad = function(num) {
        var norm = Math.floor(Math.abs(num));
        return (norm < 10 ? '0' : '') + norm;
    }
    return   pad(date.getDate()) +
    '/' + pad(date.getMonth() + 1) +
    '/' + date.getFullYear() +
    ' ' + pad(date.getHours()) +
    ':' + pad(date.getMinutes()) +
    ':' + pad(date.getSeconds()) 
  }

  function toISOFormat(str){
    str = str.slice(0,10)
    let day = str.slice(0,2)
    let month = str.slice(3,5)
    let year = str.slice(6,10)
    return year +'-'+ month + '-' + day 
  }

class TableTimes extends Component{
   state = {
       selectedDates : []
   }

    handleDateSearch = (selectedKeys, confirm)=> () => {
        confirm()
        console.log('selectedKeys')
        console.log(selectedKeys)
        this.setState({
            selectedDates:selectedKeys
        })
    }
    
    handleDateReset = (clearFilters)=>() => {
        clearFilters()
    }
    

    
    onChange = (pagination, filters, sorter) => {
      //console.log('params', pagination, filters, sorter);
    }
    
    render (){
        const columns = [{
            title: '#',
            dataIndex: 'id',
            width:40,
            sorter: (a, b) => a.id - b.id,
          }, {
            title: 'Usuario',
            dataIndex: 'user',
            width:100,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.user.length - b.user.length,
          }, {
            title: 'Departamento',
            dataIndex: 'dept',
            width:150,
            align: 'center',
            filters: [{
              text: 'Diseño',
              value: 'Diseño',
            }, {
              text: 'Calidad',
              value: 'Calidad',
            }],
            onFilter: (value, record) => record.dept.indexOf(value) === 0,
            sorter: (a, b) => a.dept.length - b.dept.length,
          },{
              title: 'Tipo de Parada',
              dataIndex: 'stoptype',
              width:180,
              sorter: (a, b) => a.stoptype.length - b.stoptype.length,
            },
            {
              title: 'Duración [min]',
              width:80,
              align:'center',
              dataIndex: 'minutes',
              sorter: (a, b) => a.minutes - b.minutes,
            },{
              title: 'Comentarios',
              dataIndex: 'comment',
              width:120,
              sorter: (a, b) => a.minutes - b.minutes,
            },
            {
              title: 'Inicio',
              width:120,
              align:'center',
              dataIndex: 'start',
              sorter: (a, b) => a.start - b.start,
            },
            {
              title: 'Final',
              width:120,
              align:'center',
              dataIndex: 'stop',
              sorter: (a, b) => a.stop - b.stop,
              filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                  <div className="custom-filter-dropdown">
                    <RangePicker onChange={(date,dateString) => setSelectedKeys([dateString])}/>
                    <Button type="primary" onClick={this.handleDateSearch(selectedKeys, confirm)}>Filtrar</Button>
                    <Button onClick={this.handleDateReset(clearFilters)}>Reset</Button>
                  </div>
                ),
                onFilter: (value, record) =>  
                new Date(toISOFormat(record.stop)).getTime() >= new Date(value[0]).getTime() && 
                new Date(toISOFormat(record.stop)).getTime() <= new Date(value[1]).getTime()

            },
          ];
    return(
        <Table  columns={columns}
                dataSource={formatData(this.props.stops)} 
                onChange={this.onChange}
                style={{backgroundColor:'white'}}
                footer = {() => <b>Total Minutos en los parámetros seleccionados: </b>}
                pagination = {{size:'small'}}
                />
        )
}
}

export default TableTimes





  