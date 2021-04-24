import React, { Component } from "react";

class AComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    let url = "https://rickandmortyapi.com/api/character";
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        this.setState({ data: resp });
      });
    });
  }

  render() {
    const data = this.state.data;
    console.warn(data);

    return (
      <div>
        <header className="headerTitle">
          <nav className="navBar">
            <img className="logoType" src="img.png" alt="" />
            <ul className="ulList">
              <li>Docs</li>
              <li>about</li>
              <li>Help Us</li>
            </ul>
          </nav>
        </header>
        <div className="heroTitle">
          <h1>
            <b>The Rick And Morty API</b>
          </h1>
        </div>

        {data.results &&
          data.results.map((item) => {
            let icon = 'statusIcon';
            if(item.status === 'Alive')
            icon = 'statusIcon';
            else
            icon = 'redIcon';
            
            console.log(item.status  + ':' +icon);
            return (
              <div className="wrapper">
                <div className="imgWrapper">
                  <img src={item.image} alt="" />
                </div>
                <div className="contentWrapper">
                  <div className="section">
                    <a href={item.url}>
                      <h2>{item.name}</h2>
                    </a>
                  </div>

                  <span className="status">
                    <h2>
                      {item.status} - {item.species}
                    </h2>
                    <span className={icon}>
                    </span>
                    {/* <span className='redIcon'>
                    </span> */}
                    

                  </span>
                  <div className="section">
                    <span className="textGrey">Last Known Location:</span>
                    <a href={item.url}>
                      <h4> {item.location.name}</h4>
                    </a>
                  </div>
                  <div className="section">
                    <span className="textGrey">First See in:</span>
                    <a href="https://rickandmortyapi.com/api/episode"></a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default AComponent;
