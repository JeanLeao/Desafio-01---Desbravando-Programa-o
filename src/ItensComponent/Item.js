const Item = (props) => {
    return (
     <div style={{marginLeft: '25%', marginBottom: '130px', backgroundColor: '#FEF6DE', minHeight: '264px', maxHeight: '264px', minWidth: '231px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> 
        <image src={props.url} />
        <h3 style={{color: 'rgba(0, 62, 60, 1)'}}>{props.object}</h3>
        <p style={{color: 'rgba(0, 0, 0, 0.55)'}}>${props.price}</p>
      </div>
    ); 
  }; 

export default Item;