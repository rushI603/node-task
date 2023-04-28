import './App.css';
import axios from "axios"
import React from "react";
import {useState, useEffect} from "react";

function App() {
  
  const [data, setData] = useState([]); 
  const URL = "http://localhost:5000/"
  useEffect(()=>{
    axios.get(URL).then((response)=>{
      setData(response.data)
    })
  },[]);

  return (
    <div className="App">
        <div class="container">
          <form action='http://localhost:5000/1' method='GET'>
              <div class="item">
                  <p>
                      Users which have income lower than $5 USD and have a car
                      of brand “BMW” or “Mercedes”.
                    </p>
                    <button class="glow-on-hover" type="submit">Submit</button>
              </div>
          </form>
          <form action='/2' method='POST'>
            <div class="item">
                <p>
                    Male Users which have phone price greater than 10,000
                 
                </p>
                <button class="glow-on-hover" type="submit">Submit</button>
            </div>
          </form>
          <form action='/3' method='POST'>
            <div class="item">
                <p>
                    Users whose last name starts with “M” and has a quote character length
                    greater than 15 and email includes his/her last name
                 
                </p>
                <button class="glow-on-hover" type="submit">Submit</button>
            </div>
          </form>
          <form action='/4' method='POST'>
            <div class="item">
                <p>
                    Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email
                    does not include any digit.
                    </p>
                    <button class="glow-on-hover" type="submit">Submit</button>
            </div>
          </form>
          <form action='/5' method='POST'>
            <div class="item">
                <p>
                    Show the data of top 10 cities which have the highest number of users
                    and their average income
                 
                </p>
                <button class="glow-on-hover" type="submit">Submit</button>
            </div>
          </form>
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
                    <td>{element.id}</td>
                    <td>{element.first_name}</td>
                    <td>{element.last_name}</td>
                    <td>{element.email}</td>
                    <td>{element.income}</td>
                    <td>{element.city}</td>
                    <td>{element.car}</td>
                    <td>{element.quote}</td>
                    <td>{element.phone_price}</td>
                  </tr>
                )}
            </table>
        </div>
    </div>
  );
}

export default App;
