import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Hero3DScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mountNode.clientWidth / mountNode.clientHeight, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    mountNode.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xc4b5fd, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x67e8f9, 2.4, 30);
    pointLight.position.set(4, 4, 6);
    scene.add(pointLight);

    const clusterGeometry = new THREE.IcosahedronGeometry(1.3, 1);
    const clusterMaterial = new THREE.MeshPhongMaterial({
      color: 0x8b5cf6,
      emissive: 0x4f46e5,
      transparent: true,
      opacity: 0.9,
      shininess: 120,
      wireframe: true,
    });

    const cluster = new THREE.Mesh(clusterGeometry, clusterMaterial);
    scene.add(cluster);

    const particles: THREE.Mesh[] = [];
    for (let i = 0; i < 26; i += 1) {
      const particleGeometry = new THREE.SphereGeometry(0.05, 12, 12);
      const particleMaterial = new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0x67e8f9 : 0xc084fc });
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      const radius = 2.2 + Math.random() * 1.35;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particle.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta),
      );
      scene.add(particle);
      particles.push(particle);
    }

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x67e8f9, transparent: true, opacity: 0.5 });
    const lines: THREE.Line[] = [];
    for (let i = 0; i < particles.length; i += 1) {
      const points = [particles[i].position.clone(), cluster.position.clone()];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, lineMaterial);
      scene.add(line);
      lines.push(line);
    }

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      const rect = mountNode.getBoundingClientRect();
      pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -(((clientY - rect.top) / rect.height) * 2 - 1);
    };

    mountNode.addEventListener('pointermove', onPointerMove);

    let frameId = 0;
    const render = () => {
      frameId = window.requestAnimationFrame(render);
      cluster.rotation.x += 0.004;
      cluster.rotation.y += 0.006;
      camera.position.x += (pointer.x * 1.1 - camera.position.x) * 0.04;
      camera.position.y += (pointer.y * 1.1 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      particles.forEach((particle, index) => {
        const angle = index * 0.8 + performance.now() * 0.0005;
        particle.position.x += Math.sin(angle) * 0.002;
        particle.position.y += Math.cos(angle) * 0.0015;
      });

      lines.forEach((line, index) => {
        const positions = line.geometry.attributes.position as THREE.BufferAttribute;
        const center = cluster.position.clone();
        positions.setXYZ(0, particles[index].position.x, particles[index].position.y, particles[index].position.z);
        positions.setXYZ(1, center.x, center.y, center.z);
        line.geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };

    render();

    const handleResize = () => {
      if (!mountNode) return;
      camera.aspect = mountNode.clientWidth / mountNode.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      mountNode.removeEventListener('pointermove', onPointerMove);
      mountNode.removeChild(renderer.domElement);
      renderer.dispose();
      clusterGeometry.dispose();
      clusterMaterial.dispose();
      lineMaterial.dispose();
      particles.forEach((particle) => {
        const material = particle.material as THREE.MeshBasicMaterial;
        material.dispose();
        particle.geometry.dispose();
      });
      lines.forEach((line) => {
        line.geometry.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="h-full w-full" />;
}
