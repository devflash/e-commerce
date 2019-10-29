import React,{Component} from 'react';
import Catgories from '../Categories/categories';
import Products from '../Products/products';
import Pagination from '../UI/pagination';
import styles from './dashboard.module.scss';
import {connect} from 'react-redux';
import * as productActions from '../store/actions/productActions';
class Dashboard extends Component
{
    componentDidMount(){
      if(this.props.categories===null || this.props.products===null)  
        this.props.fetchCategories();
    }
   
    render(){
        return(
            <div className={styles.dashboard}>
                <div>
                    {
                        this.props.categories ?
                         <Catgories categories={this.props.categories}/>
                         :
                         null
                    }
                  
                </div>
                <div>
                    {
                        this.props.products ?
                            <Products products={this.props.products}/>
                       :
                            null
                    }

                   
                </div>
                <div>
                    <Pagination/>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        categories:state.categories,
        products:state.products
    }
}
const mapActionToProps=(dispatch)=>{
    return{
        fetchCategories: ()=> dispatch(productActions.fetchCategories())
    }
}
export default connect(mapStateToProps,mapActionToProps)(Dashboard);