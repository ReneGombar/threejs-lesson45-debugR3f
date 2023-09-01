import { OrbitControls } from '@react-three/drei'
import Cube from './Cube.jsx'
//this is the library for gui controls
import { button, useControls } from 'leva'

export default function Experience()
{   
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

    console.log(position)
    return <>

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