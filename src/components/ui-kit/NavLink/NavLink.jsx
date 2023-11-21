import PropTypes from 'prop-types';

export const NavLink = ({ dataLink: { href, type, title } }) => (
  <>
    {type === 'anchor' ? (
      <a href={`#${href}`}>{title}</a>
    ) : (
      <a href={href} rel="nofollow noreferrer noopener" target="_blank">
        {title}
      </a>
    )}
  </>
);

NavLink.propTypes = {
  dataLink: PropTypes.shape({
    href: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['anchor', 'link']),
    title: PropTypes.string.isRequired,
  }).isRequired,
};