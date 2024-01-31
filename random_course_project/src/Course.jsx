import Angular from './assets/angular.jpg'
import Boostrap from './assets/bootstrap5.png'
import Ccsharp from './assets/ccsharp.png'
import KompleWeb from './assets/kompleweb.jpg'
import "./Course.css"
function Course({courseName}) {
    const courseMap ={
        Angular : Angular,
        Boostrap : Boostrap,
        Ccsharp : Ccsharp,
        KompleWeb : KompleWeb
    }
    return (  
        <div className='content'><img className='course' src={courseMap[courseName]} alt="" /></div>
    );
}

export default Course;
