import React from 'react';
import EmployeeRow from './components/EmployeeRow';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Form from './components/Form';
import employees from './employees.json';

class App extends React.Component {

    state = {
        employees: employees,
        search: "",
        sortByName: true
    };

    handleSort = event => {
        event.preventDefault();
        let sortByName = employees.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1
            } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1
            }
            return 0;
        })

        if (this.state.sortByName) {
            this.setState({
                employees: sortByName,
                sortByName: false
            })
        } else if (!this.state.sortByName) {
            sortByName = sortByName.reverse();
            this.setState({
                employees: sortByName,
                sortByName: true
            })
        }
    }

    handleInput = event => {
        let value = event.target.value;
        const search = event.target.name;
        console.log(value)

        this.setState({
            [search]: value
        })
    }



    render() {
        return (
            <Wrapper>
                <Title>Employees</Title>
                <Form
                    value={this.state.search}
                    handleInput={this.handleInput}
                />
                <table>
                    <tr>
                        <th >Image</th>
                        <th onClick={this.handleSort}>Name</th>
                        <th>Ph. No.</th>
                        <th>Location</th>
                        <th>Occupation</th>
                    </tr>

                    {this.state.employees.map(employee => (
                        <EmployeeRow

                            id={employee.id}
                            name={employee.name}
                            image={employee.image}
                            occupation={employee.occupation}
                            location={employee.location}
                            phoneNumber={employee.phoneNumber}
                        />
                    ))}
                </table>
            </Wrapper >
        );
    }
}

export default App;
