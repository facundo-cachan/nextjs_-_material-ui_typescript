import { ReactNode } from 'react';
import Link from 'next/link';

type BtnLinkedProps = {
    href?: string;
    text?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    newTab?: boolean;
    className?: string;
    disabled?: boolean;
};

/**
 * `Link` can assign href, text (back or/and front) to it, and className.
 * @param {string} href path of destination, default path is root site.
 * @param {string} text label.
 * @param {JSX.Element} startIcon icon show in before text.
 * @param {boolean} newTab open un a new tab.
 * @param {boolean} disabled available default is true.
 * @param {ClassNameMap} className optional, custom styles from parent component.
 * @returns {JSX.Element} Button with optionals styles and icons.
 */

const Linked = ({
    href,
    text,
    startIcon,
    endIcon,
    newTab,
    className,
    disabled = false,
}: BtnLinkedProps): JSX.Element =>
    !disabled ? (
        <Link href={href || '/'}>
            {newTab ? (
                <a className={className} target="_blank" rel="noopener noreferrer">
                    {startIcon && startIcon}
                    {text}
                    {endIcon && endIcon}
                </a>
            ) : (
                <a className={className}>
                    {startIcon && startIcon}
                    {text}
                    {endIcon && endIcon}
                </a>
            )}
        </Link>
    ) : (
        <div className={className}>{text}</div>
    );

export default Linked;
