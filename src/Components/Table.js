import React, { Component } from 'react'

export class Table extends Component {
    render() {
        return (
            <div>
                <h2>Projects</h2>
  <table style={{
        width: '100%'
      }}>
    <tbody><tr>
        <th>Name</th>
        <th>Details</th>
        <th>Year</th>
      </tr>
      <tr>
        <td><a href="http://www.google.com">Google</a></td>
        <td>Here is a whatever link that I find it online dagsfd dfgk ds dfsgdf ger dfsg er gdsfg er gsdf gser gdsfg er dfg srd gdsf gerg sdfgert sdfg </td>
        <td>2020</td>
      </tr>
      <tr>
        <td><a href="http://www.github.com">Github</a></td>
        <td>A random link that can go anywhere</td>
        <td>2021</td>
      </tr>
    </tbody></table>
            </div>
        )
    }
}

export default Table
