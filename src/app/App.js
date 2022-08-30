import React from "react";
import Header from "../components/header";
import { newsCategory } from "../news";
import NewsList from "../components/newsList";
import Pagination from "../components/pagination";
import Loading from "../components/loading";
import axios from "axios";


class App extends React.Component {
    state = {
        news: []
    };

    componentDidMount() {
        const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_API_KEY}&category=technology&pageSize=5`
        axios
            .get(url)
            .then((Response) => {
                this.setState({
                    news: Response.data.articles
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-md-3">
                        <Header category={newsCategory.technology} />
                        <div className="d-flex justify-content-between">
                            <p className="text-black-50">
                                About {0} results found
                            </p>
                            <p className="text-black-50 ml-auto">
                                {1} page of {100}
                            </p>
                        </div>
                        <NewsList news={this.state.news} />
                        <Pagination />
                        <Loading />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
