import { Color3 } from "@babylonjs/core/Maths/math.color";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import React from "react";
import { Engine, Scene } from "react-babylonjs";
import "../../style.css";



const GizmoBox = ( { position, color } ) => (
  <box size={2} position={position}>
    <standardMaterial diffuseColor={color} specularColor={Color3.Black()} />
    <positionGizmo />
  </box>
);

// broken in 4.2 - works in 5.0
const Gizmo = () => (
  <div style={{ flex: 1, display: "flex" }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <freeCamera
          name="camera1"
          position={new Vector3(0, 5, -10)}
          setTarget={[Vector3.Zero()]}
        />
        <hemisphericLight
          name="light1"
          intensity={0.7}
          direction={Vector3.Up()}
        />
        <utilityLayerRenderer>
          <GizmoBox color={Color3.Red()} position={new Vector3(-2, 0, 0)} />
          <GizmoBox color={Color3.Yellow()} position={new Vector3(2, 0, 0)} />
        </utilityLayerRenderer>
      </Scene>
    </Engine>
  </div>
);

export default Gizmo;