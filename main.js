const init = () => {
  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas'),
    antialias: true,
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  // シーンの作成
  const scene = new THREE.Scene()

  // カメラの作成
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight
  )
  camera.position.set(0, 0, +1000)

  // 3Dオブジェクトを作成
  const geometry = new THREE.BoxGeometry(400, 400, 400)
  const material = new THREE.MeshBasicMaterial({
    color: 696969,
    fog: true,
  })
  const box = new THREE.Mesh(geometry, material)
  scene.add(box)

  //3Dモデルを読み込み
  const loader = new THREE.GLTFLoader()
  //レンダリングする
  const animate = () => {
    requestAnimationFrame(animate)
    box.rotation.x += 0.01
    box.rotation.y += 0.01
    box.rotation.z += 0.01
    renderer.render(scene, camera)
  }
  animate()
}
window.addEventListener('DOMContentLoaded', init)
