// this constants could be decoupled on their corresponding context / entity
// just added a global one for this exercise

export enum STATUSES {
  INITIATED = 'INITIATED',
  CONFIRMED = 'CONFIRMED',
  QR_CODE_GENERATED = 'QR_CODE_GENERATED',
  REFUNDED = 'REFUNDED',
  CANCELLED = 'CANCELLED',
}

export const STATUSES_DISPLAY: any = {
  [STATUSES.INITIATED]: 'initiated',
  [STATUSES.CONFIRMED]: 'confirmed',
  [STATUSES.QR_CODE_GENERATED]: 'qr_code_generated',
  [STATUSES.REFUNDED]: 'refunded',
  [STATUSES.CANCELLED]: 'cancelled',
}

export const STATUS_COLORS: any = {
  [STATUSES.INITIATED]: '#ffc107',
  [STATUSES.CONFIRMED]: '#4caf50',
  [STATUSES.QR_CODE_GENERATED]: '#03a9f4',
  [STATUSES.REFUNDED]: '#ff5722',
  [STATUSES.CANCELLED]: '#f44336',
}