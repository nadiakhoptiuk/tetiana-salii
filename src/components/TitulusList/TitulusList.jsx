'use client';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { HeroModal } from '@/components/ui-kit/HeroModal';

export const TitulusList = ({ titulus, className = '' }) => {
  const [isClient, setIsClient] = useState(null);
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const amountOfList = isDesktop ? 9 : isTablet ? 12 : 4;

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <ul
          className={classNames(
            'font-ui_montserrat text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 grid grid-col-1 gap-[6px]',
            className,
          )}
        >
          {titulus.slice(0, amountOfList).map((title, idx, arr) =>
            arr.length - 1 === idx ? (
              <li
                key={title}
                className="relative pl-[31px] before:absolute before:left-0 before:content-sparkle text-left hitespace-normal"
              >
                <span className="mr-[10px] md:mr-3">{title}</span>
                <HeroModal>
                  <ul className="grid gap-2 font-ui_montserrat text-ui_m_body1 md:text-ui_t_body1 xl:text-ui_d_body1 grid-col-1">
                    {titulus.slice(amountOfList).map(title => (
                      <li
                        key={title}
                        className="relative pl-[31px] before:absolute before:left-0 before:content-sparkle text-left !whitespace-normal"
                      >
                        {title}
                      </li>
                    ))}
                  </ul>
                </HeroModal>
              </li>
            ) : (
              <li
                key={title}
                className="relative pl-[31px] before:absolute before:left-0 before:content-sparkle text-left !whitespace-normal"
              >
                {title}
              </li>
            ),
          )}
        </ul>
      )}
    </>
  );
};

TitulusList.propTypes = {
  titulus: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};
