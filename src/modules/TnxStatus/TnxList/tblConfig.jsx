import React from 'react';

import Typography from '../../../components/Typography';
import TransactionStatusIndicator from './TnxStatusIndicator';

export default [
  {
    header: 'tnxtbl_initiator',
    id: 'initiatorDetails',
    render: ({
      contactEmail, contactName,
    }) => (
      <>
        <Typography variant="body1">
          <b>{contactName}</b>
        </Typography>
        <Typography variant="caption">
          {contactEmail}
        </Typography>
      </>
    ),
    styles: { width: 250 },
  },
  {
    id: 'provider',
    header: 'tnxtbl_provider',
    render: (provider) => String(provider).toUpperCase(),
    styles: { width: 150 },
  },
  {
    id: 'currency',
    header: 'tnxtbl_currency',
    styles: { width: 100 },
  },
  {
    id: 'amount',
    header: 'tnxtbl_amount',
    styles: { width: 120 },
  },
  {
    id: 'statusDisplay',
    header: 'tnxtbl_status',
    styles: { width: 200 },
    render: (statusDisplay, { status }) => (
      <TransactionStatusIndicator
        status={status}
        statusDisplay={statusDisplay}

      />
    )
  },
  {
    id: 'action',
    styles: { width: 60 },
    header: 'tnxtbl_action'
  }
]