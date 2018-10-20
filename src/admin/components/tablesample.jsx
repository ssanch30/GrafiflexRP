import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip';



function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
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

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'id', numeric: true, disablePadding: false, label: '#' },
  { id: 'user', numeric: false, disablePadding: false, label: 'Usuario' },
  { id: 'dept', numeric: false, disablePadding: false, label: 'Departamento' },
  { id: 'stoptype', numeric: false, disablePadding: false, label: 'Tipo de Parada' },
  { id: 'mins', numeric: true, disablePadding: false, label: 'Minutos' },
  { id: 'comments', numeric: false, disablePadding: false, label: 'Comentarios' },
  { id: 'start', numeric: false, disablePadding: false, label: 'Inicio' },
  { id: 'stop', numeric: false, disablePadding: false, label: 'Final' },

];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {order, orderBy} = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => {
            return (
              <TableCell
                key={row.id}
                numeric={row.numeric}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Filtrar"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};






const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit,
    
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'id',
    selected: [],
    data: this.props.stops,
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };



  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(stop  => {
                  const isSelected = this.isSelected(stop.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, parseInt(stop.id,10))}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={stop.id}
                      selected={isSelected}
                    >

                      <TableCell numeric> {stop.id} </TableCell>
                      <TableCell>{firstCharToUpper(stop.user.name) + ' ' + firstCharToUpper(stop.user.lastname)}</TableCell>
                      <TableCell>{stop.user.department.dept_name}</TableCell>
                      <TableCell>{stop.stoptype.type}</TableCell>
                      <TableCell numeric>{stop.minutes}</TableCell>
                      <TableCell>{stop.comment}</TableCell>
                      <TableCell>{toMySQLFormat(new Date(stop.start))}</TableCell>
                      <TableCell>{toMySQLFormat(new Date(stop.stop))}</TableCell>
                      

                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Pagina Anterior',
          }}
          nextIconButtonProps={{
            'aria-label': 'Página Siguiente',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);