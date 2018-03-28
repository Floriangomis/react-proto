import React from 'react';
import { sortArrayByRelevancy, sortArrayByTime, createObjectFromArray, formatDate} from '../utility/utility';

 class Home extends React.Component {

        sortByRelevancy = (isDec) => {
            let tmpArray = sortArrayByRelevancy(this.props.mockData, isDec);
            this.props.sortedArrayHandler( createObjectFromArray(tmpArray) );
        };

        sortByTime = (isDec) => {
            let tmpArray = sortArrayByTime(this.props.mockData, isDec);
            this.props.sortedArrayHandler( createObjectFromArray(tmpArray) );
        };

        render() {
            let mockData = this.props.mockData;
            return (
                <React.Fragment>
                    <div> Filter : </div>
                    <div className="filter">
                        <button onClick={ this.sortByRelevancy.bind(this, true) }> Desc Relevancy </button>
                        <button onClick={ this.sortByRelevancy.bind(this, false) }> Asc Relevancy </button>
                    </div>
                    <div className="filter">
                        <button onClick={ this.sortByTime.bind(this, true) }> Desc Timestamp </button>
                        <button onClick={ this.sortByTime.bind(this, false) }> Asc Timestamp </button>
                    </div>
                    <div className="clearFix"></div>
                    { 
                        Object.keys(mockData).map( key => (
                            <div key={key} className="container-data">
                                <div className="avatar">
                                <img alt="author" src={mockData[key].author.avatarUrl} />
                                </div>
                                
                                <div className="info-container">
                                    <div className="title"> {mockData[key].title} </div>
                                    <div className="tags"> 
                                        {
                                            mockData[key].tags.map((value, index) => {
                                                return <span key={ index }>{value}</span>;
                                            })
                                        }
                                    </div>
                                    <div className="clearFix"></div>
                                    <div className="info">
                                        Created on {formatDate(mockData[key].timestamp)} by {mockData[key].author.username}
                                    </div>
                                </div>
                                <div className="clearFix"></div>
                                
                                <div className="separate-line"> </div>

                                <div className="content">
                                    {mockData[key].body}
                                </div>
                                <div className="clearFix"></div>
                            </div>
                        )
                    ) }
                </React.Fragment>
            )
        }
}

export default Home;