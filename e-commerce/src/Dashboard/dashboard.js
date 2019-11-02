import React,{Component} from 'react';
import Catgories from '../Categories/categories';
import Products from '../Products/products';
import Pagination from '../UI/pagination';
import styles from './dashboard.module.scss';
import {connect} from 'react-redux';
import * as productActions from '../store/actions/productActions';
class Dashboard extends Component
{
    state={
        currentPage:1
    }
    constructor(){
        super();
        this.numberOfPostPerPage=5;
        this.numberOfPages=null;
        this.backwardEnable=false;
        this.forwardEnable=true; 
    }
    
    componentDidMount(){
       if(this.props.categories && this.props.products)
       {
        this.numberOfPages= Math.ceil(this.props.products.length / this.numberOfPostPerPage);
       }
       else
       {
        this.props.fetchCategories().then(()=>{
            this.numberOfPages= Math.ceil(this.props.products.length / this.numberOfPostPerPage);
        });
       }
        
    }
   backwardClickHandler=()=>{
        this.setState((prevState)=>{
           if(prevState.currentPage>1)
           {

           
                return{
                    currentPage:prevState.currentPage -1     
                }
        
            }     

           
        });        
   }
   forwardClickHandler=()=>{
    this.setState((prevState)=>{
        if(prevState.currentPage<this.numberOfPages)
        {

        
            return{
                currentPage:prevState.currentPage + 1     
            }
        }
            

       
    });
   }
   enableDisablePaginationButtons=(currentPage)=>{
        switch(true)
        {
            case currentPage===1:
                this.backwardEnable=false;
                this.forwardEnable=true
                break;
            case currentPage>1 && currentPage<this.numberOfPages:
                this.forwardEnable=true;
                this.backwardEnable=true;
                break;
            case currentPage===this.numberOfPages:
                this.forwardEnable=false;
                this.backwardEnable=true;
                break;
        }
   }
   favouriteChangeHandler=(productId)=>{
        let favouriteType=null;
        this.props.products.forEach(cur=>{
            if(cur.id===productId)
                 favouriteType=cur.favourite;
        })
       this.props.updateFavourite(productId,favouriteType);
        
   }
   addToCartClickHandler=(productId)=>{
    let cartType=null;
    this.props.products.forEach(cur=>{
        if(cur.id===productId)
             cartType=cur.carted;
    })
   this.props.updateCart(productId,cartType);
   }

    render(){
       
        let lastIndex=this.state.currentPage * this.numberOfPostPerPage;
        let startIndex=lastIndex-this.numberOfPostPerPage;
        let productsToDisplay;
       

        if(this.props.products)
        {
            productsToDisplay=this.props.products.slice(startIndex,lastIndex);
            this.enableDisablePaginationButtons(this.state.currentPage);
        }
            
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
                            <Products products={productsToDisplay}
                                      favouriteClick={(productId)=>this.favouriteChangeHandler(productId)}
                                      cartClick={(productId)=>this.addToCartClickHandler(productId)}/>
                       :            
                            null
                    }

                   
                </div>
                <div>
                    <Pagination backwardEnable={this.backwardEnable} 
                                currentPage={this.state.currentPage}
                                forwardEnable={this.forwardEnable} 
                                backwardButtonClick={this.backwardClickHandler}
                                forwardButtonClick={this.forwardClickHandler}/>
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
        fetchCategories: ()=> dispatch(productActions.fetchCategories()),
        updateFavourite: (projectId,favouriteType)=>dispatch(productActions.updateFavourite(projectId,favouriteType)),
        updateCart: (productId,cartType)=>dispatch(productActions.addToCart(productId,cartType))
    }
}
export default connect(mapStateToProps,mapActionToProps)(Dashboard);