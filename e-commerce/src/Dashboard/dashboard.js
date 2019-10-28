import React,{Component} from 'react';
import styles from './dashboard.module.scss';
class Dashboard extends Component
{
    render(){
        return(
            <div>
                <div>
                    <span>Category section</span>
                </div>
                <div>
                    <span>Product Section</span>
                </div>
            </div>
        )
    }
}

export default Dashboard;