import { Component, OnInit } from '@angular/core';



export class ProductModel {
  name!:string
  cost!:string
  status!:string
  rating!:string
  image!:string
}

const products = [
  {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv-S1dqwEZhDD6MpGlNhHWvNdTglomEpTOw&s', name: "Nike Airforce 1", cost: "$70", status: 'available', rating: '4.1'},
  {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrMfzqxBBMGm9pgJv55qjNXVPJ2BmKHoOM1g&s', name: "MacBook Pro 13", cost: '$1,230', status: 'out of stock', rating: '3.3'},
  {image:'https://martcom.eu/assets/media/brands/canon/CAER5_Canon_Videocamera-digitale-mirrorless-Canon-EOS-R5-solo-corpo_01.jpg', name: "Canon EOS R5", cost: '$599', status: 'out of stock', rating: '3.3'},
  {image:'https://www.teqmartzonegh.com/wp-content/uploads/2023/01/spectre-1.jpg', name: "HP Spectre x360", cost: '$1,229', status: 'available', rating: '4.1'},
  {image:'https://static.nike.com/a/images/t_default/358b7a9d-0361-4de3-b5d2-a17cb0e737c5/NIKE+AIR+MAX+97.png', name: "Nike Air Max 97", cost: '$450', status: 'available',rating: '3.3'},
  {image:'https://images.samsung.com/is/image/samsung/p6pim/levant/2302/gallery/levant-galaxy-s23-plus-silicone-case-ef-ps916-ef-ps916tnegww-534601265?$650_519_PNG$', name: "Samsung Galaxy S23", cost: '$790', status: 'out of stock', rating:  '4.1'},
  {image:'https://blog.latam.playstation.com/uploads/sites/3/2024/11/345db296967988d5ed051720f53a407d66c156a4.jpg', name: "Playstation 5", cost: '$720', status: 'available', rating: '3.3'},
  {image:'https://telefonika.com/wp-content/uploads/2021/02/MTJV3-Apple-AirPods-Pro-2nd-generation-with-MagSafe-Case.jpg', name: "Apple AirPods Pro", cost: '$350', status: 'available', rating: '3.3'},
  {image:'https://m.media-amazon.com/images/I/51qfLURUtpL.jpg', name: "Bose QuietComfort 45", cost: '$527', status: 'out of stock', rating: '4.1'},
  {image:'https://e7.pngegg.com/pngimages/95/762/png-clipart-adidas-ultra-boost-1-white-rainbow-adidas-ultra-boost-3-limited-multi-color-mens-sneakers-mens-adidas-ultra-boost-1-sneakers-adidas-men-s-ultraboost-adidas-thumbnail.png', name: "Adidas Ultraboost", cost: '$300', status: 'available', rating: '3.3'},
]

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {



  viewComponent:boolean = false
  allProduct:ProductModel[] = []


  ngOnInit(): void {

    this.allProduct = products


    // console.log('Hello world')
    console.log('data:', this.allProduct)


    // this.allUsers = users
  }

}
