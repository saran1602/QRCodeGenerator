import { useState } from "react"

export const QRCode = () => {
    const [img,setImg] = useState("img2.png");
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState();
    const [size,setSize] = useState();
     async function qr_code(){
        // alert("QR Generated");
        try{
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${data}`;
            setImg(url); 
        }
        catch(error){
            console.error("Error in generating QR code",error);
        }
        finally{
            setLoading(false);
        }
        
    }
    function download(){
        // alert("Welcome" +" " +  name);
        fetch(img).then((response) => response.blob()).then((blob) =>{
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download="qr.png";
            document.body.appendChild(link);    
            link.click();
            document.body.removeChild(link);
        }).catch((error)=>
        {
            console.error("Error in downloading QR",error);
        })
    }
  return (
    <div className="app-container">
        <h1>QR Code Generator</h1>
        {loading && <p>Loading please wait....</p>}
        {img && <img src={img} alt="" className="qrimage" />}
        <div>
        <label htmlFor="dataInput" className="inputlabel">
            Data for QR Code:
        </label>
        <input type="text" id="dataInput" placeholder="Enter the data" value={data} onChange={(e)=>setData(e.target.value)}/>
        <label htmlFor="sizeInput" className="inputlabel">
            Image size(ex : 150):
        </label>
        <input type="text" id="sizeInput" placeholder="Enter the size of the image" value={size} onChange={(e)=>setSize(e.target.value)}/>
        <button className="generate" disabled = {loading} onClick={qr_code}>Generate QR Code</button>
        <button className="download" onClick={download}>Download QR Code</button>
        <p className="credits">Designed by SARAN E M</p>
        </div>
    </div>
  )
}
