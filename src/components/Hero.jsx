// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// const Hero = () => {
//   const webglRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const geometry = new THREE.SphereGeometry(10, 64, 64);
//     const material = new THREE.MeshStandardMaterial({
//       color: "#00ff83"
//     });
//     const mesh = new THREE.Mesh(geometry, material);
//     scene.add(mesh);

//     const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight);
//     camera.position.z = 20;
//     scene.add(camera);

//     const light = new THREE.PointLight(0xffffff, 30, 100);
//     light.position.set(7, 3, 10);
//     scene.add(light);

//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     webglRef.current.appendChild(renderer.domElement);

//     const render = () => {
//       renderer.render(scene, camera);
//     };

//     const animate = () => {
//       requestAnimationFrame(animate);
//       render();
//     };

//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       render();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <div ref={webglRef} />;
// };

// export default Hero;






const Hero = () => {
  return (
    <div>Hero</div>
  )
}

export default Hero