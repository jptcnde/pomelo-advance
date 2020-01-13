import React from 'react';
import { useDispatch } from 'react-redux';
import { Trans } from 'react-i18next';

import Table, { TableCell, TableHead } from '../../../components/Table';
import Button from '../../../components/Button';
import columns from './tblConfig';
import { ITnxStatus } from '../model/model';

import {
  STATUSES,
} from '../../../constants';

const headers = columns.map(col => col.header);

type Props = {
  items: Array<ITnxStatus>
}

type Column = {
  id: string,
  render?: (cell: any, dataItem: ITnxStatus) => {},
  styles?: object,
}

function TnxList(props: Props) {
  const {
    items,
  } = props;

  const {
    tnxStatus: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      refundTnx
    }
  } = useDispatch();

  function handleRefund(tnx: ITnxStatus) {
    refundTnx(tnx.id);
  }

  const renderCell = (dataItem: ITnxStatus) => columns.map((column: Column) => {
    const { id, render, styles } = column;
    const { status } = dataItem;
    if (id === 'action') {
      return (
        <TableCell key={id}>
          <Button
            disabled={
              [STATUSES.CONFIRMED, STATUSES.REFUNDED, STATUSES.CANCELLED]
              .includes((status as STATUSES))
            }
            onClick={() => handleRefund(dataItem)}>
            <Trans i18nKey="refund" />
          </Button>
        </TableCell>
      )
    }

    const cell: any = typeof render === 'function'
      ? render(dataItem[id], dataItem)
      : dataItem[id];

    return (
      <TableCell key={id} styles={styles}>
        {cell}
      </TableCell>
    )
  });


  return (
    <Table data-testid="pmlo-tbl">
      <TableHead>
        <tr>
          {headers.map(header => (
            <TableCell key={header} as="th">
              <Trans i18nKey={header} />
            </TableCell>
          ))}
        </tr>
      </TableHead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            {renderCell(item)}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TnxList;