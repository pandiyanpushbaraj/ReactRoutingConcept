import React from 'react'
import food1 from '../Food/Food1.jpeg';
import food2 from '../Food/Food2.jpg';
import food3 from '../Food/Food3.jpeg';
import food4 from '../Food/Food4.jpg';
import Image from 'react-bootstrap/esm/Image';

const Food = () => {
  return (
    <div>
       <Foodimg/>
       <Localfood />
       <Boxes/>
    </div>
  )
}

const Foodimg = () =>
 {
    return (
        
       <div>
         <div className="container-fluid">
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="row">
                          <h4>Famous & Local Food of Tamil Nadu</h4>
                        </div>
                        <div className="row">
                            <p style={{textAlign:'justify',textIndent:'100px'}} className='mt-3 fs-6'>
                               The food of Tamil Nadu is nch in both vegetarian and non-vegetarian food the diet mainly consists of rice, lentils, legumes with spices such as curry lace, onnamon cloves ginger, garlic otc Coconut it widely used in vanous forms, Peuple of lamil Nadu believe that serving food to encher living being, be it frumane or animals a service to God himself. Therefore, they are incredibly generous when it comes to foco, whether it is in their homes or tompies or ven restaurants Traditionally, this south Indian cuisine is served on a banana leaf and poople sit on the floor to eat a typica meal consists of Rice Sambhancur two types of vegetables, curd and a pickle Dosas idfs, Upma Parata, Samblas, Rasam, Pongal, are the dishes with which the cuisine of Tamil Nadu is identified. Payasam Kasari Sweet Pongal are the sweet treasures of this cuisine Filter coffee is a speciality of the suuth-indien cuisine the making of fie coffee like a rituel the coffee beams are first reasted and then powdered. They then use a filter set Tew. soos of powdered coffee and enough amount of boiling water is added to prepare a very dark iquid called the decoction. A 3/4 mug of hot milk with suga and a small quantity of decoction is then served in Dabish a unique Coffee 
                            </p>
                        </div>
                    </div>
                    <div className="col">
                       <div className="row mt-5">
                           <div className="col">
                              <Image src={food1} style={{width:'250px',height:'200px'}} className='rounded'></Image>
                           </div>
                           <div className="col">
                               <Image src={food3}style={{width:'250px',height:'200px'}} className='rounded'></Image>
                           </div>
                       </div>
                       <br></br>
                       <div className="row">
                           <div className="col">
                              <Image src={food4} style={{width:'250px',height:'200px'}} className='rounded'></Image>
                           </div>
                           <div className="col">
                               <Image src={food2}style={{width:'250px',height:'200px'}} className='rounded'></Image>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
         </div>
       </div>

    )
 }


 const Localfood = () =>
  {
    return(
        <div>
          <div className='container-fluid mt-5'>
            <div className="container  d-flex justify-content-center flex-column">
              <h4 >TAMILNADU</h4>
              <h4>FAMOUS AND LOCAL FOODS</h4>
            </div>
          </div>  

         
        </div>
    )
  }

  const Boxes = () =>
   {
    return(
        <div>
            {/* 1chennai */}
           <div className="container mt-5"> 
            <div className="row">
                <div className="col ml-5" style={{backgroundColor:'#fff',height:'450px', width:'450px',boxShadow:'1px 1px 15px 5px  black',borderRadius:'20px'}}>
                   <h4 className="text-center mt-3">Food of Chennai</h4>
                   <p style={{textAlign:'justify',textIndent:'50px'}} className='fs-6 mt-3'>
                     Chennails local cisine consists of traditional South Indian food such as sambor, dosas and idlis. Ranging from stroot side stalls to upscale restaurants you can enjoy a complete gourmet experience in Chennal. Chennal like any sparkling city that is constantly grewing and expanding in al te spheres, fosters a cuisine that provides countless options, The city has vibrant street food culture as well as well laid out and flattering fine dining experiences. While you can try a number of cuisines and foods here, one must not miss what Chennai is known for- traditional and authentic South-Indian cuisine. Hence do not mas the filter coffee as well as items like la Dosa, Appam. Vada Upma Sambhar Farotha, Chettinad Chicken Pepues Chicken Chicken Stew Sweet Pongal Kesan Payasam and much more.
                   </p>
                </div>
                <div className="col ml-5" style={{backgroundColor:'#fff',height:'450px',width:'450px',boxShadow:'0 0 10px black',borderRadius:'20px'}}>
                <h4 className="text-center mt-3">Food of Rameshwaram</h4>
                <p style={{textAlign:'justify',textIndent:'50px'}} className='fs-6 mt-3'>
                   Rameswaram otters delicious and elaborate South- Indian platters and Thails which are mostly vegetarian. One deos, however find a number of non vegetarian preparations in the hotels here as well as a wide range of seafood prepared by the people here. The other local favetites that one must try. include Filter Coffee Cuttle fish, Crab meat Baby octopus Keema Vades, Rasam Sambhar idi. Vada, Duse and more You also find North-Indian, Chinese and Continental cuisines in the area. Rameshwaram is famous for its non-vegetarian cuisine. Besides the regular biryani and parotia plenty of soup stalls offer a range of mutton and chicken dishes From mutton thala curry and goat leg soup to both curry, these stalls are a non- veg lover's delight.
                </p>
                </div>
            </div>
           </div>
                  

           <div className="container mt-5"> 
            <div className="row">
                <div className="col ml-5" style={{backgroundColor:'#fff',height:'450px', width:'450px',boxShadow:'0px 0px 10px black',borderRadius:'20px'}}>
                   <h4 className="text-center mt-3">Food of Kodaikanal</h4>
                   <p style={{textAlign:'justify',textIndent:'50px'}} className='fs-6 mt-3'>
                   Chocolates Sandwiches, Brownies cheeses and some hot chai are the most sought after eateries of Kodaikanal Other than these. there is a lot that stands out in this town such as locally produced organic foods a rich and spicy dash of Punjabi cuisine popular items of Tibetan cuisine en absolutely lip-smacking variety of Biryanis, as well as an elaborate: Gujarati platter. Find local and traditional platters here too, with essentials like Desas, idilic. Upma Parota Sambhar. Rasam Paysam. Kesari Sweet pongal and lots more Kodaikanal offers exquisite Tamil cuisine which includes dis and doses. Besides that the local's favourite Tibetan dishes like memos and noodle soup are a must-try.                   </p>
                </div>
                <div className="col ml-5" style={{backgroundColor:'#fff',height:'450px',width:'450px',boxShadow:'0 0 10px black',borderRadius:'20px'}}>
                <h4 className="text-center mt-3">Food of Ooty</h4>
                <p style={{textAlign:'justify',textIndent:'50px'}} className='fs-6 mt-3'>
                   Ooty can be your trip through dream like indulges of chocolate and all that's sweat. Lace yourself in the city's bakeries which serve temptations like white chocolate. strawberry chocolate fudge, home made chocolates, buns and cakes Equally popular here are the tea clantations and hence a hot cup of local and exquisite varieties of tea. Another beverage to try here is the wine from the local vineyards. Also relish North Indian cuisines, Chinese cuisines, as well as sandwiches, pizzas and hot braads, one may also try the vegetarian South fadian platter here with essentials like Idli Dosa, Chutney Veda. Sambhar. Rasam Upma Sweet Pongal Payassam. Kesari.                </p>
                </div>
            </div>
           </div>



           <div className="container mt-5"> 
            <div className="row">
                <div className="col ml-5" style={{backgroundColor:'#fff',height:'450px', width:'450px',boxShadow:'0px 0px 10px black',borderRadius:'20px'}}>
                   <h4 className="text-center mt-3">Food of Kanyakumari</h4>
                   <p style={{textAlign:'justify',textIndent:'50px'}} className='fs-6 mt-3'>
                       In Kanyakumari much of what is prepared is done so with a generous use of spices and an essential garnish of coconut. Hence, one can sense these two flavours distinctly in almost all the food here. Other than these do enjoy delicacies of freshly caught fishes, as well as typical South-indian platters in one of their most authentic and lip-smacking forms. Typical South Indian delicacies that one must try include lali Dosa Chutney. Vada. Sambhar. Rasam. Upma Sweet Pongal Payassam. Kesari and more. One also finds North-indian, Gujarati Chinese, Rajasthani cuisines here.                    
                   </p>
                
                 </div>
                <div className="col ml-5" style={{backgroundColor:'#fff',height:'450px',width:'450px',boxShadow:'0 0 10px black',borderRadius:'20px'}}>
                <h4 className="text-center mt-3">Food of Kumbakonam</h4>
                <p style={{textAlign:'justify',textIndent:'50px'}} className='fs-6 mt-3'>
                    Vegetarian food rules the roost here with pre- dominantly Tamil cuisines on offer. One can get authentic South Indian cuisines which will tickle your taste buds. Also don't forget to have coffee Kumbakonam as it has one of the best filter coffees in the world it is best known for its rich collection of finest silk sarees which are handmade by the locals. Other than this, Kumbakonam is the right place for the metal sculptors and the idols of the famous Hindu god and goddesses which are entirely crafted by the local artisans of the time           
                </p>
                     </div>
            </div>
           </div>



           <div className="container mt-5"> 
            <div className="row">
                <div className="col ml-5" style={{backgroundColor:'#fff',height:'450px', width:'450px',boxShadow:'0px 0px 10px black',borderRadius:'20px'}}>
                   <h4 className="text-center mt-3">Food of Madurai</h4>
                   <p style={{textAlign:'justify',textIndent:'50px'}} className='fs-6 mt-3'>
                   Madurai is often referred to as the food capital of Tamil Nadu given the huge variety in styles, cuisines, gepres and sizes that it offers. In Madurai you can taste the most authentic of traditional delicacies as well as indulge in fast food Bengali Italian, Chinese and Norik-Indian cuisines. Also, the food is lip smacking all though its streets to the elaborate. restaurants The local delicacies include Paruthi paal. jigarthanda, panangkarkandu paal and chettinadu varieties like: appam, kuzhi paniyaram, etc. as well as beverages like Parathi Jigarthanda as well as the popular Filter coffee. Other than these find local favorites from all over Bengal Fish curry. Pizzas, Chaats Fish and Chips, Gulab Jamuns Samosas, Butter Chicken Tansoari Chicken and lots more.
                   </p>
                </div>
                <div className="col ml-5" style={{backgroundColor:'#fff',height:'450px',width:'450px',boxShadow:'0 0 10px black',borderRadius:'20px'}}>
                <h4 className="text-center mt-3">Food of Yercaud</h4>
                <p style={{textAlign:'justify',textIndent:'50px'}} className='fs-6 mt-3'>
                Tamil Nadu people believe that carving food to another living being be it humans or animals is a service to god itself. Therefore, they are generous when it comes to food whether it is in their home or temples or even restaurants. Traditionally. this south Indian cuisine is served on a banana leat and people sit on the floor to eat. It is rich in both vegetarian and non- vegetarian food. The food mainly consists of rice, lentils legumes with spices such as curry leaves, cinnamon, cloves, ginger, garlic etc. Coconut in various forms in widely used. A typical meal consists of Rice Sambhar(Curry) two types of vegetables curd and a pickle. Dosas, idilis: Upma, Parota. Sambhar, Rasam, Pongal are the dishes with which the cuisine of Tamil Nadu is identified
                </p>
                </div>
            </div>
           </div>
        

           <div className="container mt-5"> 
            <div className="row">
                <div className="col ml-5" style={{backgroundColor:'#fff',height:'450px', width:'450px',boxShadow:'0px 0px 10px black',borderRadius:'20px'}}>
                   <h4 className="text-center mt-3">Food of Hogenakkal</h4>
                   <p style={{textAlign:'justify',textIndent:'50px'}} className='fs-6 mt-3'>
                     Being a small hill station. Hogenakkal isn't spoilt for choices when it comes to restaurants. However there are certain delicacies of the mountains that you can enjoy here. like ice creams and soups                   </p>
                </div>
                <div className="col ml-5" style={{backgroundColor:'#fff',height:'450px',width:'450px',boxShadow:'0 0 10px black',borderRadius:'20px'}}>
                <h4 className="text-center mt-3">Food of Theni</h4>
                 <p style={{textAlign:'justify',textIndent:'50px'}} className='fs-6 mt-3'>
                    The note that is now famous for its non-vegetanan dishes was started by Chinnaswamy and his wife Susheela, as a quaint idli shop, around two and a half decades ago. Now, the hotel has become a major landmark in Theni district. Interestingly, the hotel is named after the couple's con Jyothis. The dishes are put together by 15 cooks who are also the couple's close relatives. The cooks begin their day at 4 in The morning. The breakfast menu consists of idli dosa, porotta and pongal Around the breakfast time they begin preparing their iconic lunch dishes too. At least twenty curries are ready by 10 am. Jyothis Hotel is another example of Tamil Nadu's great culinary heritage that hasn't failed to impressed foodies                </p>
                </div>
            </div>
           </div>
              
        </div>
    )
   }
export  default Food