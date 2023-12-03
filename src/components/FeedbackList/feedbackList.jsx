import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function StatsTable() {

    const dispatch = useDispatch();
    const StatsList = useSelector(store => store.statsList);

    const [sortOrder, setSortOrder] = useState('asc');
    const [sortedColumn, setSortedColumn] = useState('id');

    const columns = [
        { id: 'name', label: 'Character' },
        { id: 'feeling', label: 'WisdomCheck' },
        { id: 'understanding', label: 'CharismaCheck' },
        { id: 'support', label: 'StrengthCheck' },
        { id: 'comments', label: 'IntelligenceCheck' },
    ];

    useEffect(() => {
        dispatch({ type: 'FETCH_STATS' })
    }, []);

    const handleSort = columnId => {
        const isAsc = sortedColumn === columnId && sortOrder === 'asc';
        setSortOrder(isAsc ? 'desc' : 'asc');
        setSortedColumn(columnId);
    };

    // Sort function
    const sortedResponses = [...statsList].sort((a, b) => {

        const columnAValue = a[sortedColumn]; 
        const columnBValue = b[sortedColumn]; 

        const isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(value);

        const isNumericA = isNumeric(columnAValue);
        const isNumericB = isNumeric(columnBValue);

        if (isNumericA && isNumericB) {

            if (sortOrder === "asc") {
                return parseFloat(columnAValue) - parseFloat(columnBValue);
            } else {

                return parseFloat(columnBValue) - parseFloat(columnAValue);
            }

        } else {

            if (typeof columnAValue === "string" && typeof columnBValue === "string") {

                if (sortOrder === "asc") {

                    return columnAValue.localeCompare(columnBValue);
                } else {

                    return columnBValue.localeCompare(columnAValue);
                }
            } else {

                return 0;
            }
        }
    });


    return (
        <>
            <h1>Archon Page</h1>
            <TableContainer component={Paper} style={{ margin: '20px', maxHeight: '400px', overflowY: 'auto' }}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id}>
                                    <TableSortLabel
                                        active={sortedColumn === column.id}
                                        direction={sortOrder}
                                        onClick={() => handleSort(column.id)}
                                    >
                                        {column.label}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedResponses.map(response => (
                            <TableRow key={response.id}>
                                <TableCell>{response.name}</TableCell>
                                <TableCell>{response.feeling}</TableCell>
                                <TableCell>{response.understanding}</TableCell>
                                <TableCell>{response.support}</TableCell>
                                <TableCell>{response.comments}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )

}

export default StatsTable;