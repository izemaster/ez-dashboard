import React, { Component } from 'react';
import reactFeature from '../../assets/images/react-feature.svg';
import sassFeature from '../../assets/images/sass-feature.svg';
import bootstrapFeature from '../../assets/images/bootstrap-feature.svg';
import responsiveFeature from '../../assets/images/responsive-feature.svg';
import Dropzone from '../../components/Dropzone/Dropzone'
import { Card, CardBody, Row, Col, Table, Button } from 'reactstrap';
import { Doughnut, Line } from 'react-chartjs-2';


class Assets extends Component {
  componentDidMount(){
  
  }
  render() {
    const chartColors = {
      red: 'rgb(233, 30, 99)',
      danger: 'rgb(233, 30, 99)',
      dangerTransparent: 'rgba(233, 30, 99, .8)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 180, 0)',
      green: 'rgb(34, 182, 110)',
      blue: 'rgb(68, 159, 238)',
      primary: 'rgb(68, 159, 238)',
      primaryTransparent: 'rgba(68, 159, 238, .8)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)',

      primaryShade1: '#55D8FE',
      primaryShade2: '#FF8373',
      primaryShade3: '#FFDA83',
      primaryShade4: '#A3A0FB',
      primaryShadeHover: '#127CD8'
    };
    const donutData = {
      labels: ['Videos', 'Imagenes', 'Web', 'Libre'],
      datasets: [
        {
          data: [300, 50, 100,150],

          backgroundColor: [
            chartColors.primaryShade1,
            chartColors.primaryShade2,
            chartColors.primaryShade3,
            chartColors.primaryShade4
          ],

          /*hoverBackgroundColor: [
            chartColors.primaryShadeHover,
            chartColors.primaryShadeHover,
            chartColors.primaryShadeHover,
            chartColors.primaryShadeHover
          ]*/
        }
      ]
    };
    const line = {
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: '# of Votes',
            fill : false,
            lineTension: 0,
            pointRadius: 2,
            cubicInterpolationMode: 'monotone',
            data: [3, 6, 4, 10, 8, 12],
            borderColor: '#A3A1FB',
            backgroundColor: chartColors.primary,
            pointBackgroundColor: '#A3A1FB',
            pointBorderColor: '#A3A1FB',
            borderWidth: 2
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        },
        legend: {
          display: true
        },
        tooltips: {
          enabled: false
        }
      }
    };
    const heroStyles = {
      padding: '50px 0 70px'
    };

    return (
      <div>
      <Row>
        <Col xs={6}>
          <Card>
            <CardBody>
            <Dropzone/>
            
            </CardBody>
          </Card>
        </Col>
        <Col xs={6}>
          <Card>
            <CardBody>
             <Doughnut
                data={donutData}
                options={{mantainAspectRatio : true, resposive :true}}
                legend={{ display: true, position: 'right', labels: {padding: 25} }}
              />
              </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            </CardBody>
          </Card>
        </Col>

      </Row>
      </div>
    );
  }
}

export default Assets;
