import { PERMISSIONS } from './Permissions.enum';

export const NAV_USER_LIST = {
  url: '/admin/users',
  title: 'Пользователи',
  permissions: [PERMISSIONS.GET_USER_LIST]
};

export const NAV_DICTIONARY = {
  title: 'Справочники',
  permissions: [PERMISSIONS.EDIT_DICTIONARIES],
  url: '',
  childs: [
    {
      title: 'Марки/Модели',
      url: '/admin/brands'
    },
    {
      title: 'Регионы/Округа',
      url: '/admin/districts'
    },
    {
      title: 'Параметры осмотра',
      url: '/admin/inspection'
    },
    {
      title: 'Оценщики',
      url: '/admin/assessment'
    },
    {
      title: 'Стоянки/ТО',
      url: '/admin/parking'
    }
  ]
};

export const NAV_LOGS = {
  url: '/pages/withdraw',
  title: 'Логи',
  permissions: [PERMISSIONS.VIEW_LOGS]
};

export const NAV_WITHDRAW = {
  url: '/pages/withdraw',
  title: 'Портфель',
  permissions: [
    PERMISSIONS.GET_CONTRACTS_OWN,
    PERMISSIONS.GET_CONTRACTS_REGION,
    PERMISSIONS.GET_CONTRACTS_ALL,
  ]
};

export const NAV_ESTIMATION = {
  url: '/pages/estimation',
  title: 'Оценка',
  permissions: [PERMISSIONS.EVALUATION_HANDLE]
};

export const NAV_ESTIMATION_CONTROL = {
  url: '/pages/estimation-control',
  title: 'Проверка',
  permissions: [PERMISSIONS.INSPECTION_CHECK]
};

export const NAV_EVALUATION_DIRECTED_NOTES = {
  url: '/pages/directed-complaints',
  title: 'Направленные рекламации',
  permissions: [
    PERMISSIONS.EVALUATION_HANDLE,
    PERMISSIONS.INSPECTION_CHECK
  ]
};

export const NAV_COMPLAINTS = {
  url: '/pages/complaints',
  title: 'Рекламации',
  permissions: [PERMISSIONS.RECEIPT_OF_NOTE]
};

export const NAV_CONTROL = {
  url: '/pages/control',
  title: 'Контроль',
  permissions: [PERMISSIONS.CAR_CONTROL_OWN, PERMISSIONS.CAR_CONTROL_ALL]
};

export const NAV_REPORTS = {
  url: '/pages/reports',
  title: 'Отчеты',
  permissions: [
    PERMISSIONS.STATISTICS_INSPECTION,
    PERMISSIONS.STATISTICS_CONTROL,
    PERMISSIONS.STATISTICS_EVALUATION,
  ]
};

export const NAV_LINKS: Array<{ url; permissions; childs?; title; }> = [
  NAV_ESTIMATION_CONTROL,
  NAV_ESTIMATION,
  NAV_EVALUATION_DIRECTED_NOTES,
  NAV_WITHDRAW,
  NAV_COMPLAINTS,
  NAV_CONTROL,
  NAV_REPORTS,
  NAV_USER_LIST,
    // NAV_LOGS,
  NAV_DICTIONARY
];
