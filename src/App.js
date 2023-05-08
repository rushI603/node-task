import axios from 'axios';
import './App.css';
import React from "react";
import {useState} from "react";

// function callAPI(a){
//   console.log(a)
//   axios.get(`/${a}`)
//   .then((res)=>{console.log(typeof Array.from(res.data));return Array.from(res?.data);})
//   .catch(error=>console.log(error))
// }
function App() {
  
const [data, setData] = useState([]); 
const [loader, setLoader] = useState(false);
const [header,setHeader] = useState([]);
const [access, setAccess] = useState([]);
  return (
    <div className="App">
        <p>Note: If the is a time dealy in loading that's due to free account for deployment and not because of Queries. My queries are truely efficent.</p>
        <div className= "final">
        
            <div className="query">
                <div className="item">
                    <p>
                        Users which have income lower than $5 USD and have a car
                        of brand “BMW” or “Mercedes”.
                    </p><br/>
                    <button className='button' onClick={ ()=>{
                        setData([]);
                        setLoader(true);
                        axios.get(`https://nodebackend-kxzt.onrender.com/1`)
                        .then((res)=>{
                            setLoader(false)
                            setData(res.data);
                            setHeader(["Id","First name","Last Name","Email","Income","City","Car","Quote","Phone Price"]);
                            setAccess(["id","first_name","last_name","email","income","city","car","quote","phone_price"]);
                            
                            
                        })}}
                        type="submit">Submit</button>
                </div>
                <div className="item">
                    <p>
                        Male Users which have phone price greater than 10,000
                    
                    </p><br/>
                    <button className='button' onClick={ ()=>{
                        setData([]);
                        setLoader(true);
                        axios.get(`https://nodebackend-kxzt.onrender.com/2`)
                        .then((res)=>{
                            setLoader(false)
                            setData(res.data);
                            setHeader(["Id","First name","Last Name","Email","Income","City","Car","Quote","Phone Price"]);
                            setAccess(["id","first_name","last_name","email","income","city","car","quote","phone_price"]);
                        })}}
                    type="submit">Submit</button>
                </div>
                <div className="item">
                    <p>
                        Users whose last name starts with “M” and has a quote character length
                        greater than 15 and email includes his/her last name
                    
                    </p><br/>
                    <button className='button' onClick={ ()=>{
                        setData([]);
                        setLoader(true);
                        axios.get(`https://nodebackend-kxzt.onrender.com/3`)
                        .then((res)=>{
                            setLoader(false);
                            setData(res.data);
                            setHeader(["Id","First name","Last Name","Email","Income","City","Car","Quote","Phone Price"]);
                            setAccess(["id","first_name","last_name","email","income","city","car","quote","phone_price"]);
                        })}} type="submit">Submit</button>
                </div>
                <div className="item">
                    <p>
                        Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email
                        does not include any digit.
                        </p><br/>
                        <button className='button' onClick={ ()=>{
                        setData([]);
                        setLoader(true);
                        axios.get(`https://nodebackend-kxzt.onrender.com/4`)
                        .then((res)=>{
                            setLoader(false)
                            setData(res.data)
                            setHeader(["Id","First name","Last Name","Email","Income","City","Car","Quote","Phone Price"]);
                            setAccess(["id","first_name","last_name","email","income","city","car","quote","phone_price"]);
                        })}}
                        type="submit">Submit</button>
                </div>
                <div className="item">
                    <p>
                        Show the data of top 10 cities which have the highest number of users
                        and their average income
                    </p><br/>
                    <button className='button' onClick={ ()=>{
                        setData([]);
                        setLoader(true);
                        axios.get(`https://nodebackend-kxzt.onrender.com/5`)
                        .then((res)=>{
                            setLoader(false)
                            setData(res.data);
                            setHeader(["City","Count","Average"]);
                            setAccess(["city","count","avg"])
                        })}}
                        type="submit">Submit</button>
                </div>
            </div>

            {/* <div id="cover-spin" className= "cover-spin">Hello</div> */}
            <div className={loader?"":"displaynone"}>
            <div id="circle"></div>
            </div>
            
            <div className={data.length ? "result":"displaynone"}>
                <table>
                    <caption>Query results</caption>
                    <tr>
                        {/* <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Income</th>
                        <th>City</th>
                        <th>Car</th>
                        <th>Quote</th>
                        <th>Phone Price</th> */}
                        {
                            header.map((element)=>
                                <th>{element}</th>
                            )
                        }
                    </tr>
                    {}
                    {/* <tr>
                        <td>1</td>
                        <td>Lolla</td>
                        <td>Venkata Rushyendra</td>
                        <td>lollarushyendra@gmail.com</td>
                        <td>$200000</td>
                        <td>Tenali</td>
                        <td>BMW</td>
                        <td>Something that come free goes with hurt</td>
                        <td>1234596870</td>
                    </tr> 
                    <tr>
                        <td>1</td>
                        <td>Lolla</td>
                        <td>Venkata Rushyendra</td>
                        <td>lollarushyendra@gmail.com</td>
                        <td>$200000</td>
                        <td>Tenali</td>
                        <td>BMW</td>
                        <td>Something that come free goes with hurt</td>
                        <td>1234596870</td>
                    </tr>*/}
                    {data.map(element => 
                    <tr>
                        {access.map((item)=>

                            <td className={item} data-cell={item}>{element[item]}</td>
                        )}
                        {/* <td>{element?.id}</td>
                        <td>{element?.first_name}</td>
                        <td>{element?.last_name}</td>
                        <td>{element?.email}</td>
                        <td>{element?.income}</td>
                        <td>{element?.city}</td>
                        <td>{element?.car}</td>
                        <td>{element?.quote}</td>
                        <td>{element?.phone_price}</td> */}
                    </tr>
                    )}
                </table>
            </div>
        </div>
    </div>
  );
}

export default App;
