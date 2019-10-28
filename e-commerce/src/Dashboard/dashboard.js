import React,{Component} from 'react';
import Catgories from '../Categories/categories';
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
                    <span>Product Section</span>
                </div>
            </div>
        )
    }
}

export default Dashboard;