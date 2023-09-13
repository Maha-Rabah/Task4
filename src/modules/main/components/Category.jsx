import Catrgoryparts from './Catrgoryparts'
import { useState } from 'react'
import {GiMaterialsScience} from 'react-icons/gi'
import {MdOutlineMonochromePhotos} from 'react-icons/md'
import {FiMusic} from 'react-icons/fi'
import {SiGooglemarketingplatform} from 'react-icons/si'
import {MdAnimation} from 'react-icons/md'
import {MdOutlineDesignServices} from 'react-icons/md'
import {CiCalculator1} from 'react-icons/ci'
import {MdBusinessCenter} from 'react-icons/md'

const Category = ({Categorytitle}) => {
    const [num1] = useState("1391 courses")
    const [num2] = useState("3234 courses")
    const [num3] = useState("3781 courses")
    const [num4] = useState("1434 courses")
    const [num5] = useState("1691 courses")
    const [num6] = useState("2334 courses")
    const [num7] = useState("3391 courses")
    const [num8] = useState("1234 courses")
  return (
  <div>
    <div className='Main-Title'>
     <h2>{Categorytitle}</h2>
     </div>
    <div className="category-container">
       <Catrgoryparts tit="Science" num={num1} icon={<GiMaterialsScience/>}/>
       <Catrgoryparts tit="Business" num={num2} icon={<MdBusinessCenter/>}/>
       <Catrgoryparts tit="Music" num={num3} icon={<FiMusic/>}/>
       <Catrgoryparts tit="Marketing" num={num4} icon={<SiGooglemarketingplatform/>}/>
       <Catrgoryparts tit="Animation" num={num5} icon={<MdAnimation/>}/>
       <Catrgoryparts tit="Finance Accounting" num={num6} icon={<CiCalculator1/>}/>
       <Catrgoryparts tit="Photography" num={num7} icon={<MdOutlineMonochromePhotos/>}/>
       <Catrgoryparts tit="Design" num={num8} icon={<MdOutlineDesignServices/>}/>
    </div>
    <p className='section-parg'>We Have More Category here. <a href='#'>Browse all</a></p>
    </div>
  )
}

export default Category