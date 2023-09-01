import { OrbitControls } from '@react-three/drei'
import Cube from './Cube.jsx'
//this is the library for gui controls
import { button, useControls } from 'leva'
//import performance monitoring
import { Perf } from 'r3f-perf'

export default function Experience()
{   
    //show perf panel
    const {performanceVisible} = useControls({
        performanceVisible : true
    })
    
    //destructure our object to get values
    const {position, colorForSphere, visible} = useControls("sphere controls",{
        position: 
        {
            value: { x: -2, y: 2, z: 0},
            min: -4,
            max: 4,
            step: 0.1
        },
        colorForSphere:  "red",
        visible: true,
        //for button 
        clickMe: button(()=>{
            console.log("ok")
        }),

        //select from values
        choice: {options: ["a","b","c"]}
    })

    const {scale}=useControls("cube controls",{
        scale:
        {
            value: 1
        }
    })




    return <>

        {performanceVisible ? <Perf position="top-left"/> : null}
        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh position ={ [position.x, position.y, position.z] }>
            <sphereGeometry />
            <meshStandardMaterial color={colorForSphere} visible={visible}/>
        </mesh>

        <Cube scale={scale}/>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}