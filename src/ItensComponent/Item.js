const Item = (props) => {
    return (
     <div style={{marginLeft: '15%', marginBottom: '130px', backgroundColor: '#FEF6DE', minHeight: '264px', maxHeight: '264px', minWidth: '231px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
        <div style={{display: "flex",overflow:  'hidden'}}>
        <img src={props.url} style={{height: '200px', width: '200px', marginBottom: '0px'}} />
        </div>
        <h3 style={{color: 'rgba(0, 62, 60, 1)'}}>{props.object}</h3>
        <p style={{color: 'rgba(0, 0, 0, 0.55)'}}>${props.price}</p>
      </div>
    ); 
  }; 

export default Item;