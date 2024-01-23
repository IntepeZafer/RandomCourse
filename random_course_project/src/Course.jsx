import Angular from './assets/angular.jpg'
import Boostrap from './assets/bootstrap5.png'
import Ccsharp from './assets/ccsharp.png'
import KompleWeb from './assets/kompleweb.jpg'
function Course({courseName}) {
    const courseMap ={
        Angular : Angular,
        Boostrap : Boostrap,
        Ccsharp : Ccsharp,
        KompleWeb : KompleWeb
    }
    return (  
        <div><img src={courseMap[courseName]} alt="" /></div>
    );
}

export default Course;
