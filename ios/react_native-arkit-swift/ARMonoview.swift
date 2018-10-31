import Foundation
import ARKit
@objc(ARMonoView)
class ARMonoview: UIView, ARSCNViewDelegate {
    var arview: ARSCNView?
    var _preview:Bool = true
    var cachedPreview: Any?
    var _debugMode: Bool = false
    @objc var preview:Bool {
        get {
            return _preview 
        }
        set(newVal) {
            if cachedPreview == nil {
                cachedPreview = arview?.scene.background.contents
            }
            _preview = newVal
            if(_preview) {
                arview?.scene.background.contents = cachedPreview
                
            } else {
                arview?.scene.background.contents = UIColor.black
            }
        }
    }
    @objc var debugMode: Bool {
        get {
            return _debugMode
        }
        set(newVal) {
            _debugMode = newVal
            arview?.debugOptions = .showFeaturePoints
        }
    }
    func start() -> ARMonoview {
        if Thread.isMainThread {
            let a = ARSCNView()
            arview = a
            a.delegate = self
            guard let sm = ARSceneManager.sharedInstance else { return self }
            a.session.delegate = sm
            sm.scene = a.scene
            sm.session = a.session
            sm.pv = a
            a.automaticallyUpdatesLighting = true
            a.autoenablesDefaultLighting = true
            addSubview(a)
            sm.doResume()
        }
        return self
    }
    override func layoutSubviews() {
        super.layoutSubviews()
        arview?.frame = self.bounds
    }
    func handleTap(point: CGPoint, resolve:RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        guard let v = arview else { reject("no_view", "No AR View", nil); return }
        let r = v.hitTest(point, options: nil)
        let m = r.map() { h in
            return h.node.name
        }
        resolve(["nodes": m]);
    }
    func renderer(_ renderer: SCNSceneRenderer, didUpdate node: SCNNode, for anchor: ARAnchor) {
        guard let scene = ARSceneManager.sharedInstance else { return }
        scene.updateAnchor(anchor, withNode: node)
    }
    func renderer(_ renderer: SCNSceneRenderer, didAdd node: SCNNode, for anchor: ARAnchor) {
        guard let scene = ARSceneManager.sharedInstance else { return }
        scene.addAnchor(anchor, withNode: node)
        
    }
    func renderer(_ renderer: SCNSceneRenderer, didRenderScene scene: SCNScene, atTime time: TimeInterval) {
        guard let scene = ARSceneManager.sharedInstance else { return }
        if let pov = renderer.pointOfView { scene.updatePOV(pov) }
        scene.updateRegisteredViews()

    }
    
    
}
