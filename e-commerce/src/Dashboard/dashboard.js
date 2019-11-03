import React,{Component} from 'react';
import Catgories from '../Categories/categories';
import Products from '../Products/products';
import Pagination from '../UI/pagination';
import styles from './dashboard.module.scss';
import {connect} from 'react-redux';
import Error from '../Hoc/Error'
import HashLoader from 'react-spinners/HashLoader';
import * as productActions from '../store/actions/productActions';
class Dashboard extends Component
{
    state={
        currentPage:1,
        currentCategory:"Electronics",
        currentCategoryId:"electronics-102"
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
    categoryChangeClickHandler=(categoryId)=>{
        let categoryName=null;
        if(this.state.currentCategoryId!==categoryId)
        {
            this.props.categories.forEach(cur=>{
                if(cur.id===categoryId) 
                    categoryName=cur.name
            })
            this.setState({currentCategory:categoryName,currentCategoryId:categoryId});
            this.props.fetchProducts(categoryId);
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
    let productPrice=null;
    this.props.products.forEach(cur=>{
        if(cur.id===productId)
        {
            cartType=cur.carted;
            productPrice=parseInt(cur.productPrice.replace(/,/g, ''));
        }
             
    })
   this.props.updateCart(productId,cartType,productPrice);
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
        let dashboardDisplay=<Error errorMessage="Something went wrong"/>
        if(this.props.loading)
        {
            dashboardDisplay= <div className={styles.loaderContainer}><HashLoader css={'margin:0 auto;'} color={'#2980b9'}/></div>
        } 
        if(this.props.categories && this.props.products && !this.props.loading)
        {
            dashboardDisplay=
            (<React.Fragment>
            <div>
                {
                    this.props.categories ?
                     <Catgories categories={this.props.categories}
                                     
                                categoryChange={(categoryId)=>this.categoryChangeClickHandler(categoryId)}/>
                     :
                     null
                }
              
            </div>
            <div>
                {
                    this.props.products ?
                        <Products products={productsToDisplay}
                                  categoryName={this.state.currentCategory}
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
            </React.Fragment>)
        }
            
        return(
            <div className={styles.dashboard}>
                {dashboardDisplay}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        categories:state.categories,
        products:state.products,
        loading:state.loading
    }
}
const mapActionToProps=(dispatch)=>{
    return{
        fetchCategories: ()=> dispatch(productActions.fetchCategories()),
        updateFavourite: (projectId,favouriteType)=>dispatch(productActions.updateFavourite(projectId,favouriteType)),
        updateCart: (productId,cartType,productPrice)=>dispatch(productActions.addToCart(productId,cartType,productPrice)),
        fetchProducts:(categoryId)=>dispatch(productActions.fetchProducts(categoryId))
        
    }
}
export default connect(mapStateToProps,mapActionToProps)(Dashboard);