import React from 'react';
import HornedBeast from './hornedBeast';
import rawData from './data.json';


class Main extends React.Component {

  render() {

    return (

      <div className='main' >
        {rawData.map((item) => {

          return (
            <div className='card' >
              <HornedBeast alt={item.keyword}
                description={item.description}
                title={item.title}
                url={item.image_url} />

            </div>

          );

        })}



      </div>
    );

  }
}

export default Main;
