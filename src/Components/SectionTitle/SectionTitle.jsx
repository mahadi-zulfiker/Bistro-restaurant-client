

// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <p>{subHeading}</p>
            <h3>{heading}</h3>
        </div>
    );
};

export default SectionTitle;