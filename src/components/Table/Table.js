import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Grow from "@material-ui/core/Grow";
import styled, { ThemeProvider } from "styled-components";
import { _SearchBar_ } from "../../components/index";
import theme from "../themes";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell
          padding="checkbox"
          style={{ borderColor: theme[props.theme].textColor }}
        >
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
            style={{ color: theme[props.theme].textColor }}
          />
        </TableCell>
        {props.headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{
              color: theme[props.theme].textColor,
              fontWeight: "bold",
              fontSize: "18px",
              borderColor: theme[props.theme].textColor,
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              style={{
                color: theme[props.theme].textColor,
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell style={{ borderColor: theme[props.theme].textColor }} />
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Nutrition
      </Typography>
      <_SearchBar_
        placeholder={"Search"}
        filters={props.filters}
        filtersRight={props.filtersRight}
        width={"100%"}
      />
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = (props) =>
  makeStyles((theme) => {
    return {
      root: {
        width: "calc(100% - 30px)",
        backgroundColor: props.themes[props.theme].backgroundColor,
        padding: "15px",
        borderRadius: "5px",
        color: props.themes[props.theme].textColor,
        stickyHeader: true,
      },
      paper: {
        width: "100%",
        marginBottom: theme.spacing(2),
        color: props.themes[props.theme].textColor,
        backgroundColor: props.themes[props.theme].backgroundColor,
      },
      table: {
        minWidth: 1000,
        backgroundColor: props.themes[props.theme].primaryColor,
        color: props.themes[props.theme].textColor,
      },
      tableRow: {
        color: props.themes[props.theme].textColor,
      },
      visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 20,
        width: 1,
      },
    };
  });

const CustomRow = (props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow
        hover
        role="checkbox"
        aria-checked={props.info.isItemSelected}
        tabIndex={-1}
        key={props.info.row.name}
        selected={props.info.isItemSelected}
      >
        <TableCell
          padding="checkbox"
          style={{
            borderColor: props.info.row.__collapse__
              ? "transparent"
              : theme[props.info.theme].textColor,
          }}
        >
          <Checkbox
            onClick={(event) =>
              props.info.handleClick(event, props.info.row.name)
            }
            checked={props.info.isItemSelected}
            inputProps={{ "aria-labelledby": props.info.labelId }}
            style={{ color: theme[props.info.theme].textColor }}
          />
        </TableCell>
        <TableCell
          component="th"
          id={props.info.labelId}
          scope="row"
          padding="none"
          style={{
            color: theme[props.info.theme].textColor,
            borderColor: props.info.row.__collapse__
              ? "transparent"
              : theme[props.info.theme].textColor,
          }}
        >
          {props.info.row.name}
        </TableCell>
        {Object.keys(props.info.row)
          .filter((el) => (el !== "name" && el !== "__collapse__" ? el : null))
          .map((value) => (
            <TableCell
              align="right"
              style={{
                color: theme[props.info.theme].textColor,
                borderColor: props.info.row.__collapse__
                  ? "transparent"
                  : theme[props.info.theme].textColor,
              }}
            >
              {props.info.row[value]}
            </TableCell>
          ))}
        <TableCell
          align="right"
          style={{
            borderColor: props.info.row.__collapse__
              ? "transparent"
              : theme[props.info.theme].textColor,
          }}
        >
          {props.info.row.__collapse__ ? (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
              style={{ color: theme[props.info.theme].textColor }}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          ) : null}
        </TableCell>
      </TableRow>
      {props.info.row.__collapse__ ? (
        <TableRow hover>
          <TableCell
            style={{
              paddingBottom: 0,
              paddingTop: 0,
              borderColor: theme[props.info.theme].textColor,
              color: theme[props.info.theme].textColor,
            }}
            colSpan={12}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Grow timeout={500} in={true}>
                {props.info.row.__collapse__}
              </Grow>
            </Collapse>
          </TableCell>
        </TableRow>
      ) : null}
    </React.Fragment>
  );
};

const EnhancedTable = (props) => {
  const classes = useStyles(props)();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = props.rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, props.rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          filters={props.filters}
          filtersRight={props.filtersRight}
          numSelected={selected.length}
        />
        <TableContainer>
          <Table
            className={classes.table}
            rowClassName={classes.tableRow}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              theme={props.theme}
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={props.rows.length}
              headCells={props.headCells}
            />
            <TableBody>
              {stableSort(props.rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <CustomRow
                      info={{
                        row,
                        labelId,
                        isItemSelected,
                        rows: props.rows,
                        theme: props.theme,
                        order,
                        orderBy,
                        page,
                        rowsPerPage,
                        page,
                        rowsPerPage,
                        isSelected,
                        handleClick,
                      }}
                    />
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell
                    colSpan={6}
                    style={{ borderColor: "transparent" }}
                  />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          style={{ color: theme[props.theme].textColor }}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
};

export default React.memo((props) => (
  <ThemeProvider theme={theme}>
    <EnhancedTable
      filters={props.filters}
      filtersRight={props.filtersRight}
      headCells={props.headCells}
      rows={props.rows}
      theme={props.theme}
      themes={theme}
    />
  </ThemeProvider>
));
