import Canvas from'../_internal/components/canvases/canvas3d';import AxisRefVisualCartesian from'../../../fc-core/src/axis-ref-visuals/axis-ref-component';import{componentFactory}from'../../../fc-core/src/lib';export default function(a){let b;if(componentFactory(a,Canvas,'canvas',a.config.showVolumeChart?2:1),b=a.getChildren('canvas'),b)for(let a=0,c=b.length;a<c;a++)b[a].configure(),componentFactory(b[a],AxisRefVisualCartesian,'axisRefVisualCartesian')}