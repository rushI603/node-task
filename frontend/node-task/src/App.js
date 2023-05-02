import axios from 'axios';
import './App.css';
import React from "react";
import {useState} from "react";

function callAPI(a){
  console.log(a)
  axios.get(`/${a}`)
  .then((res)=>{console.log(typeof Array.from(res.data));return Array.from(res?.data);})
  .catch(error=>console.log(error))
}
function App() {
  
  const [data, setData] = useState([]); 


  return (
    <div className="App">
        <div class="container">
            <div class="item">
                <p>
                    Users which have income lower than $5 USD and have a car
                    of brand “BMW” or “Mercedes”.
                  </p>
                  <button  onClick={async ()=> await setData(callAPI(1))} type="submit">Submit</button>
            </div>
            <div class="item">
                <p>
                    Male Users which have phone price greater than 10,000
                 
                </p>
                <button  onClick={ ()=>{
                    axios.get(`/2`)
                    .then((res)=>{setData(res.data)})}}
                 type="submit">Submit</button>
            </div>
            <div class="item">
                <p>
                    Users whose last name starts with “M” and has a quote character length
                    greater than 15 and email includes his/her last name
                 
                </p>
                <button  onClick={()=>setData(callAPI(3))} type="submit">Submit</button>
            </div>
            <div class="item">
                <p>
                    Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email
                    does not include any digit.
                    </p>
                    <button  onClick={()=>setData(callAPI(4))} type="submit">Submit</button>
            </div>
            <div class="item">
                <p>
                    Show the data of top 10 cities which have the highest number of users
                    and their average income
                 
                </p>
                <button  onClick={()=>setData(callAPI(5))} type="submit">Submit</button>
            </div>
        </div>
        <div class="wrapper">

            <table>
                <caption>Query results</caption>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Income</th>
                    <th>City</th>
                    <th>Car</th>
                    <th>Quote</th>
                    <th>Phone Price</th>
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
                    <td>{element?.id}</td>
                    <td>{element?.first_name}</td>
                    <td>{element?.last_name}</td>
                    <td>{element?.email}</td>
                    <td>{element?.income}</td>
                    <td>{element?.city}</td>
                    <td>{element?.car}</td>
                    <td>{element?.quote}</td>
                    <td>{element?.phone_price}</td>
                  </tr>
                )}
            </table>
        </div>
    </div>
  );
}

export default App;
