import {HiHome} from 'react-icons/hi'
import {FaBusinessTime, FaUsers} from 'react-icons/fa'
import {MdLocalOffer,MdPages,MdSettings,MdNotifications} from 'react-icons/md'
import {RiAccountCircleFill} from 'react-icons/ri'

export const menuList = [
  {id:1,title:'الرئيسية',name:'Home',icon:<HiHome/>,text:'Home',link:'/'},
  {id:2,title:'العملاء',name:'custumors',icon:<FaUsers/>,text:'',link:'/custumors'},
  {id:2,title:'مقدمي الخدمات',name:'services provider',icon:<FaUsers/>,text:'',link:'/servicesProvider'},

  {id:4,title:'المنتجات',name:'Offers',icon:<MdLocalOffer/>,text:'',link:'/products'},
  {id:5,title:'الطلبيات',name:'Home',icon:<HiHome/>,text:'Home',link:'/'},
  {id:6,title:'التقارير',name:'custumors',icon:<FaUsers/>,text:'',link:'/'},
  {id:7,title:'الجداول المرجعية',name:'custumors',icon:<MdPages/>,text:'',link:'/lookups'},
  {id:8,title:'الأعدادات',name:'custumors',icon:<MdSettings/>,text:'',link:'/settings'},
  {id:9,title:'مركز المساعدة',name:'Offers',icon:<MdLocalOffer/>,text:'',link:'/'},
];

export const settingsList = [
  {id:1,title:'الحساب',name:'account',icon:<RiAccountCircleFill/>},
  {id:2,title:'الموارد',name:'resource',icon:<FaUsers/>},
  {id:3,title:'المدخلات',name:'incomes',icon:<FaBusinessTime/>},
  {id:4,title:'الاشعارات',name:'adminstration',icon:<MdNotifications/>},
  {id:5,title:'الارتباطات',name:'engagments',icon:<FaUsers/>},
  {id:6,title:'الادارة',name:'adminstration',icon:<FaUsers/>},
  {id:7,title:'المدخلات',name:'incomes',icon:<FaUsers/>},
  {id:8,title:'الاشعارات',name:'adminstration',icon:<MdNotifications/>},
  {id:9,title:'إعدادات اخرى',name:'engagments',icon:<FaUsers/>},



];
export const lookupsCategories = [
  {id:1,name:'categories',title:"التصنيفات",icon:<FaBusinessTime/>,link:'/'},
  {id:2,name:'categories',title:" التجار",icon:<FaBusinessTime/>,link:'/'},
  {id:3,name:'categories',title:"المشرفين",icon:<FaBusinessTime/>,link:'/'},
  {id:1,name:'categories',title:"الرعاة",icon:<FaBusinessTime/>,link:'/'},
  {id:2,name:'categories',title:"التجار",icon:<FaBusinessTime/>,link:'/'},
  {id:3,name:'categories',title:"المشرفين",icon:<FaBusinessTime/>,link:'/'},

];