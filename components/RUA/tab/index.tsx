import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { ItemProps } from './TabItem';

type Props = {
  defaultValue: string | number;
  children: React.ReactElement<ItemProps>[];
};

const Tab = ({ defaultValue, children }: Props) => {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const handleSwitch = useCallback((value: ItemProps['value']) => {
    setCurrentValue(value);
  }, []);

  // Pass current selected state to child
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        showContent: child.props.value === currentValue,
      });
    }
    return child;
  });

  return (
    <>
      <div>
        <ul
          role="tablist"
          aria-orientation="horizontal"
          className="flex list-none !p-[unset]"
        >
          {children.map((child) => (
            <li
              role="tab"
              aria-selected={currentValue === child.props.value}
              key={child.props.label}
              onClick={() => handleSwitch(child.props.value)}
              className={classNames(
                'px-5 py-3 rounded-t-lg',
                child.props.value === currentValue &&
                  'text-teal-500 border-b-[3px] border-teal-500',
                'select-none cursor-pointer',
                'min-w-[76px] text-center',
                'hover:bg-gray-200 dark:hover:bg-rua-gray-800',
                '!list-none'
              )}
            >
              {child.props.label}
            </li>
          ))}
        </ul>

        <div className="mt-4">{childrenWithProps}</div>
      </div>
    </>
  );
};

export default Tab;
