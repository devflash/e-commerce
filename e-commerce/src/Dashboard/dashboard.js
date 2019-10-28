import React,{Component} from 'react';
import Catgories from '../Categories/categories';
import Products from '../Products/products';
import Pagination from '../UI/pagination';
import styles from './dashboard.module.scss';

class Dashboard extends Component
{
    render(){
        return(
            <div className={styles.dashboard}>
                <div>
                   <Catgories/>
                </div>
                <div>
                   <Products/>
                </div>
                <div>
                    <Pagination/>
                </div>
            </div>
        )
    }
}

export default Dashboard;