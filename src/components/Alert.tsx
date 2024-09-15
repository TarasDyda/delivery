'use client';

import InfoIcon from '@/src/components/icons/Info';
import ExitIcon from '@/src/components/icons/Exit';
import styles from '@/src/components/styles/alert.module.scss';
import classnames from 'classnames';
import { useEffect } from 'react';

interface AlertProps {
  title: string;
  onClose: () => void;
}

const Alert = ({ onClose, title }: AlertProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      id="alert-border-3"
      className={classnames(
        styles.alert,
        'fixed right-1/2 top-[50px] translate-x-1/2 z-10 w-max flex items-center p-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800'
      )}
      role="alert"
    >
      <InfoIcon className="flex-shrink-0 w-4 h-4" aria-hidden="true" />
      <div className="ms-3 text-sm font-medium">{title}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
        data-dismiss-target="#alert-border-3"
        aria-label="Закрити"
        onClick={onClose}
      >
        <span className="sr-only">Dismiss</span>
        <ExitIcon className="w-3 h-3" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Alert;
