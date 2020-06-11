import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
// Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    root: {
        width: "90%",
        marginTop: theme.spacing(3),
        overflowX: "auto",
        margin: 'auto'
    },
    table: {
        minWidth: 650
    },
    selectTableCell: {
        width: 60
    },
    tableCell: {
        width: 130,
        height: 40
    },
    input: {
        width: 130,
        height: 40
    }
}));

const createData = (title, income, expenses) => ({
    id: title.replace(" ", "_"),
    title,
    income,
    expenses,
    isEditMode: false
});

const CustomTableCell = ({ row, name, onChange }) => {
    const classes = useStyles();
    const { isEditMode } = row;
    return (
        <TableCell align="left" className={classes.tableCell}>
            {isEditMode ? (
                <Input
                    value={row[name]}
                    name={name}
                    onChange={e => onChange(e, row)}
                    className={classes.input}
                />
            ) : (
                    row[name]
                )}
        </TableCell>
    );
};

function TableComponent() {
    const [rows, setRows] = React.useState([
        createData("Title1", 1590, 600),
        createData("Title2", 2370, 900),
        createData("Title3", 2620, 1600)
    ]);
    const [previous, setPrevious] = React.useState({});
    const classes = useStyles();

    const onToggleEditMode = id => {
        setRows(state => {
            return rows.map(row => {
                if (row.id === id) {
                    return { ...row, isEditMode: !row.isEditMode };
                }
                return row;
            });
        });
    };
    const deleteItem = id => {
        setRows(() => rows.filter(row => row.id !== id));
    };

    const onChange = (e, row) => {
        if (!previous[row.id]) {
            setPrevious(state => ({ ...state, [row.id]: row }));
        }
        const value = e.target.value;
        const name = e.target.name;
        const { id } = row;
        const newRows = rows.map(row => {
            if (row.id === id) {
                return { ...row, [name]: value };
            }
            return row;
        });
        setRows(newRows);
    };

    const onRevert = id => {
        const newRows = rows.map(row => {
            if (row.id === id) {
                return previous[id] ? previous[id] : row;
            }
            return row;
        });
        setRows(newRows);
        setPrevious(state => {
            delete state[id];
            return state;
        });
        onToggleEditMode(id);
    };

    return (
        <Paper className={classes.root}>
            <h1>
                Transaction Record Detail
            </h1>
            <br/>
            <Table className={classes.table} aria-label="caption table">
                {/* <caption>A barbone structure table example with a caption</caption> */}
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Title </TableCell>
                        <TableCell align="left">Income&nbsp;($)</TableCell>
                        <TableCell align="left">Expenses&nbsp;($)</TableCell>
                        <TableCell align="left" />
                        <TableCell align="left" />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <CustomTableCell {...{ row, name: "title", onChange }} />
                            <CustomTableCell {...{ row, name: "income", onChange }} />
                            <CustomTableCell {...{ row, name: "expenses", onChange }} />
                            <TableCell className={classes.selectTableCell}>
                                {row.isEditMode ? (
                                    <>
                                        <IconButton
                                            aria-label="done"
                                            onClick={() => onToggleEditMode(row.id)}
                                        >
                                            <DoneIcon />
                                        </IconButton>
                                        <IconButton
                                            aria-label="revert"
                                            onClick={() => onRevert(row.id)}
                                        >
                                            <RevertIcon />
                                        </IconButton>
                                    </>
                                ) : (
                                        <IconButton
                                            aria-label="delete"
                                            onClick={() => onToggleEditMode(row.id)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    )}
                            </TableCell>
                            <TableCell className={classes.selectTableCell}>
                                <DeleteIcon
                                    aria-label="delete"
                                    onClick={() => deleteItem(row.id)}
                                >
                                </DeleteIcon>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default TableComponent;
