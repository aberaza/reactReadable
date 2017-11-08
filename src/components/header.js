import React from 'react'

export function AppHeader(props){
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="" className="brand-logo">Readable</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="">Link1</a></li>
                    <li><a href="">Link2</a></li>
                    <li><a href="">Link3</a></li>
                </ul>
            </div>
        </nav>
    )
}

/*
        <header className="mui-appbar mui--z1">
            <div className="mui-container-fluid">
              <table width="100%">
                <tr className="mui--appbar-height">
                  <td className="mui--text-title">Readable</td>
                </tr>
              </table> 
            </div>
        </header>
        */