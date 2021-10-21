import { useState,useEffect,useRef,useCallback,forwardRef } from "react";
import { Box,Spinner, useFormControlProps} from "@chakra-ui/react";
import * as THREE from "three";
import {OrbitControls} from'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from "./Model";
import { DogSpinner, DogContainer } from './VoxelDogLoader'

function easeOutCirc(x){
    return Math.sqrt(1-Math.pow(x-1,4))
}

const VoxelDog = () => {
    const refContainer = useRef()
    const [loading,setLoading]=useState(true)
    const [renderer,setRenderer] = useState()
    const [_camera,setCamera] = useState()
    const [target] = useState(new THREE.Vector3(-0.5,1.2,0))
    const [initialCameraPosition] = useState(
        new THREE.Vector3(0,100,1000
        )
    )
    const [scene] = useState(new THREE.Scene())
    const [_controls,setControls] = useState()

    useEffect(() =>{
        const { current:container} = refContainer
        if(container && !renderer){
            const scW = container.clientWidth
            const scH = container.clientHeight

            const renderer = new THREE.WebGLRenderer({
                antialias:true,
                alpha:true

            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(window.innerWidth*0.85,640);
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            setRenderer(renderer)

            const scale = scH * 0.005 + 4.8
            const camera = new THREE.OrthographicCamera(
                -scale,scale,scale,-scale,0.01,10000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            setCamera(camera)

            const ambientLight = new THREE.AmbientLight(0xcccccc,1)
            scene.add(ambientLight)

            const controls = new OrbitControls(camera,renderer.domElement)
            controls.autoRotate = true
            controls.target = target
        
            setControls(controls)
            window.addEventListener('resize',function(){
                renderer.setSize(window.innerWidth*0.8,560);
                camera.aspect=window.innerWidth/window.innerHeight;
            
            })

            loadGLTFModel(scene,'/DogDone.glb',{
                receiveShadow: false,
                castShadow:false

            }).then(()=>{
                animate()
                setLoading(false)
                controls.enableZoom=false
                
            })
            
            let req = null
            let frame = 0

            const animate = () => {
                req = requestAnimationFrame(animate)

                frame = frame <= 100 ? frame + 1 : frame

                if(frame <= 100){
                    const p = initialCameraPosition
                    const rotSpeed = -easeOutCirc(frame/120) * Math.PI * 20
                    camera.position.y=10
                    camera.position.x= p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z= p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                    camera.lookAt(target)
                }else{
                    controls.update()
                }
                renderer.render(scene,camera)
            }
            return () =>{
                cancelAnimationFrame(req)
                renderer.dispose()
            }
        }

    },[])

    return(
        <DogContainer ref={refContainer}>{loading && <DogSpinner />} </DogContainer>
    )
}
export default VoxelDog;