import PropTypes from 'prop-types';

const GeoLocalisationType = PropTypes.shape({
    lat: PropTypes.string,
    lng: PropTypes.string,
});

const AddressType = PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
    geo: GeoLocalisationType,
});

const CompanyType = PropTypes.shape({
    name: PropTypes.string,
    catchPhrase: PropTypes.string,
    bs: PropTypes.string,
});

export const UserType = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    address: AddressType,
    phone: PropTypes.string,
    website: PropTypes.string,
    company: CompanyType,
});
