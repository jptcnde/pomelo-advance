import numbro from 'numbro';
import { RematchRootState } from '@rematch/core';
import { ITnxStatus } from './model';
import { STATUSES_DISPLAY } from '../../../constants';

export function getTnxItem(tnxItem: ITnxStatus): ITnxStatus {
  const {
    amount,
    currency,
    status,
    providerDisplayName,
    provider,
    initiatorDetails,
    created,
    updated,
    id,
  }: ITnxStatus = tnxItem;

  return {
    amount: numbro(amount).format({
      thousandSeparated: true,
      mantissa: 2
    }),
    currency,
    provider,
    providerDisplayName,
    status,
    statusDisplay: STATUSES_DISPLAY[status],
    initiatorDetails,
    created,
    updated,
    id,
  };
}

export const getTnxList = (state: RematchRootState<any>) => state.tnxStatus.tnxStatusList.map(getTnxItem);

