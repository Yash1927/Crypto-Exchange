const Bids = () => {
    const asks = [
    {
      price: "0.07003",
      size: "54.85K",
      total: "54.85K",
      depth: 0.11,
      cumulativeDepth: 0.11,
    },
    {
      price: "0.07004",
      size: "37.01K",
      total: "91.86K",
      depth: 0.19,
      cumulativeDepth: 0.30,
      
    },
    {
      price: "0.07003",
      size: "54.85K",
      total: "54.85K",
      depth: 0.11,
      cumulativeDepth: 0.11,
    },
    {
      price: "0.07004",
      size: "37.01K",
      total: "91.86K",
      depth: 0.19,
      cumulativeDepth: 0.30,
      
    },
    {
      price: "0.07003",
      size: "54.85K",
      total: "54.85K",
      depth: 0.11,
      cumulativeDepth: 0.11,
    },
    {
      price: "0.07004",
      size: "37.01K",
      total: "91.86K",
      depth: 0.19,
      cumulativeDepth: 0.30,
      
    },
    {
      price: "0.07003",
      size: "54.85K",
      total: "54.85K",
      depth: 0.11,
      cumulativeDepth: 0.11,
    },
    {
      price: "0.07004",
      size: "37.01K",
      total: "91.86K",
      depth: 0.19,
      cumulativeDepth: 0.30,
      
    },
  ];
  return (
    <div style={{width: "300px"}}>
        {asks.map((ask, index)=> (
            <div 
                key={index} 
                style={{
                position: "relative", 
                width:"100%", 
                overflow:"hidden"
                }}
            >
                <div style={{
                    position:"absolute", 
                    height:"100%", 
                    background: "rgba(228,75,68,0.15)", 
                    width: `${ask.cumulativeDepth * 100}%`,
                    top:"0",
                    right:"0"
                    }}
                />
                    <div style={{
                        position: "absolute", 
                        height: "100%", 
                        background: "rgba(228,75,68,0.325)", 
                        top:"0", 
                        right:"0", 
                        width:`${ask.depth * 100}%` 
                        }}
                    />
                        <div style={{
                            display:"flex", 
                            justifyContent:"space-between"
                            }}
                        >
                            <div>
                                {ask.price}
                            </div>
                            <div>
                                {ask.size}
                            </div>
                            <div>
                                {ask.total}
                            </div>
                        </div>
                </div>
        ))}
    </div>
  )
}

export default Bids