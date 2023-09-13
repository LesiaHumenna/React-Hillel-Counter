import './ShowMaxEm.css';
// eslint-disable-next-line react/prop-types
function ShowMaxEm({emoji}) {
    return (
        <>
            <div className="show-card" >
                <h3 className='title-card'>Переможець: {emoji}</h3>
            </div>
        </>
      );
}

export default ShowMaxEm;