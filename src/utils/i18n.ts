import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    // usally came from external source -> api, lib resources, etc,
    resources: {
      en: {
        translations: {
          initiated: 'Initiated',
          confirmed: 'Confimed',
          qr_code_generated: 'QR Code Generated',
          refunded: 'Refunded',
          cancelled: 'Cancelled',
          tnx_status: 'Transaction Status',

          tnxtbl_initiator: 'Initiator',
          tnxtbl_provider: 'Provider',
          tnxtbl_currency: 'Currency',
          tnxtbl_amount: 'Amount',
          tnxtbl_status: 'Status',
          tnxtbl_action: 'Action',

          refund: 'Refund',
        }
      },
      de: {
        translations: {
          initiated: 'Iniciado',
          confirmed: 'Confirmado',
          qr_code_generated: 'Código QR generado',
          refunded: 'Reintegrado',
          cancelled: 'Cancelado',
          tnx_status: 'Estado De La Transacción',

          tnxtbl_initiator: 'Iniciador',
          tnxtbl_provider: 'Proveedor',
          tnxtbl_currency: 'Moneda',
          tnxtbl_amount: 'Cantidad',
          tnxtbl_status: 'Estado',
          tnxtbl_action: 'Acción',

          refund: 'Reembolso'
        }
      }
    },
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
