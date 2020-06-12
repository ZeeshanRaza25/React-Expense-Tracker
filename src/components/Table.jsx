import React, { useContext, useState } from "react";
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

import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles(theme => ({
    root: {
        width: "75%",
        marginTop: theme.spacing(1),
        overflowX: "auto",
        // marginLeft: `3%`,
        textAlign: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        margin: `10%`,
        // padding: 'auto'
    },
    table: {
        // minWidth: `90%`
    },
    selectTableCell: {
        // width: `25%`
    },
    tableCell: {
        // width: `25%`,
        height: 40
    },
    input: {
        // width: `25%`,
        height: 40
    }
}));

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

export default function TableComponent() {
    const { transactions, deleteTransaction } = useContext(GlobalContext);
    // console.log(transactions);
    const [transaction, setTransaction] = useState(transactions);
    // console.log(transaction);

    const [previous, setPrevious] = useState({});
    const classes = useStyles();

    const onToggleEditMode = id => {
        setTransaction(state => {
            return transactions.map(row => {
                if (row.id === id) {
                    return { ...row, isEditMode: !row.isEditMode };
                }
                return row;
            });
        });
    };
    const onChange = (e, row) => {
        if (!previous[row.id]) {
            setPrevious(state => ({ ...state, [row.id]: row }));
        }
        const value = e.target.value;
        const name = e.target.name;
        const { id } = row;
        const newtransaction = transaction.map(row => {
            if (row.id === id) {
                return { ...row, [name]: value };
            }
            return row;
        });
        setTransaction(newtransaction);
    };

    const onRevert = id => {
        const newtransaction = transaction.map(row => {
            if (row.id === id) {
                return previous[id] ? previous[id] : row;
            }
            return row;
        });
        setTransaction(newtransaction);
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
            <br />
            <Table className={classes.table} aria-label="caption table">
                {/* <caption>A barbone structure table example with a caption</caption> */}
                <TableHead>
                    <TableRow>
                        {/* <TableCell align="left">ID </TableCell> */}
                        <TableCell align="left">Title </TableCell>
                        <TableCell align="left">Income&nbsp;($)</TableCell>
                        <TableCell align="left">Expenses&nbsp;($)</TableCell>
                        {/* <TableCell align="left" /> */}
                        <TableCell align="left" />
                    </TableRow>
                </TableHead>
                <TableBody>
                    { transactions ? transactions.map(row => (
                        <TableRow key={row.id}>
                            {/* {console.log(row)} */}
                            {/* <CustomTableCell {...{ row, name: "id", onChange }} /> */}
                            <CustomTableCell {...{ row, name: "title", onChange }} />
                            <CustomTableCell {...{ row, name: "income", onChange }} />
                            <CustomTableCell {...{ row, name: "expenses", onChange }} />
                            {/* <TableCell className={classes.selectTableCell}>
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
                            </TableCell> */}
                            <TableCell className={classes.selectTableCell}>
                                <DeleteIcon
                                    aria-label="delete"
                                    // onClick={() => deleteItem(row.id)}
                                    onClick={() => deleteTransaction(row.id)}
                                >
                                </DeleteIcon>
                            </TableCell>
                        </TableRow>
                    )) : 'No record Found!'}
                </TableBody>
            </Table>
        </Paper>
    );
}

