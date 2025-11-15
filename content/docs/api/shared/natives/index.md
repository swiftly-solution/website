---
title: Natives
---

- [AllocableNativeHandle](/docs/api/shared/natives/allocablenativehandle)
- [CBitVecOperations](/docs/api/shared/natives/cbitvecoperations)
- [ManagedCUtlLeanVector<T, I>](/docs/api/shared/natives/managedcutlleanvector-2)
- [ManagedCUtlMemory<T>](/docs/api/shared/natives/managedcutlmemory-1)
- [ManagedCUtlVector<T>](/docs/api/shared/natives/managedcutlvector-1)

- [AttackerInfo_t](/docs/api/shared/natives/attackerinfo_t)
- [BBox_t](/docs/api/shared/natives/bbox_t)
- [CBitVec16384](/docs/api/shared/natives/cbitvec16384)
- [CBitVec64](/docs/api/shared/natives/cbitvec64)
- [CBufferString](/docs/api/shared/natives/cbufferstring)
- [CCommand](/docs/api/shared/natives/ccommand)
- [CGameTrace](/docs/api/shared/natives/cgametrace)
- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)
- [CGlobalVars](/docs/api/shared/natives/cglobalvars)
- [CHandle<T>](/docs/api/shared/natives/chandle-1)
- [CHitBoxTrace](/docs/api/shared/natives/chitboxtrace)
- [CNetworkVarChainer](/docs/api/shared/natives/cnetworkvarchainer)
- [CNetworkedQuantizedFloat](/docs/api/shared/natives/cnetworkedquantizedfloat)
- [CPhysSurfacePropertiesAudioTrace](/docs/api/shared/natives/cphyssurfacepropertiesaudiotrace)
- [CPhysSurfacePropertiesPhysicsTrace](/docs/api/shared/natives/cphyssurfacepropertiesphysicstrace)
- [CPhysSurfacePropertiesSoundNamesTrace](/docs/api/shared/natives/cphyssurfacepropertiessoundnamestrace)
- [CPhysSurfacePropertiesTrace](/docs/api/shared/natives/cphyssurfacepropertiestrace)
- [CRecipientFilter](/docs/api/shared/natives/crecipientfilter)
- [CString](/docs/api/shared/natives/cstring) - Wrapper class for native char*.
- [CStrongHandle<T>](/docs/api/shared/natives/cstronghandle-1) - An partial implementation of the CStrongHandle struct.
- [CTakeDamageInfo](/docs/api/shared/natives/ctakedamageinfo)
- [CTakeDamageResult](/docs/api/shared/natives/ctakedamageresult)
- [CTraceFilter](/docs/api/shared/natives/ctracefilter)
- [CTransform](/docs/api/shared/natives/ctransform)
- [CUtlBinaryBlock](/docs/api/shared/natives/cutlbinaryblock)
- [CUtlLeanVector<T, I>](/docs/api/shared/natives/cutlleanvector-2)
- [CUtlMap<TKey, TValue, TIndex>](/docs/api/shared/natives/cutlmap-3)
- [CUtlMapTreeNode<TKey, TValue>](/docs/api/shared/natives/cutlmaptreenode-2)
- [CUtlMemory<T>](/docs/api/shared/natives/cutlmemory-1)
- [CUtlMemoryFixedGrowable<T, TBuffer>](/docs/api/shared/natives/cutlmemoryfixedgrowable-2)
- [CUtlRBTree<TValue, TKey>](/docs/api/shared/natives/cutlrbtree-2)
- [CUtlRBTreeLinks<TKey>](/docs/api/shared/natives/cutlrbtreelinks-1)
- [CUtlRBTreeNode<TKey, TValue>](/docs/api/shared/natives/cutlrbtreenode-2)
- [CUtlString](/docs/api/shared/natives/cutlstring)
- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)
- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)
- [CUtlVectorFixedGrowable<T, TBuffer>](/docs/api/shared/natives/cutlvectorfixedgrowable-2)
- [CapsuleTrace](/docs/api/shared/natives/capsuletrace)
- [ChangeAccessorFieldPathIndex_t](/docs/api/shared/natives/changeaccessorfieldpathindex_t)
- [Color](/docs/api/shared/natives/color)
- [FixedCharBuffer512](/docs/api/shared/natives/fixedcharbuffer512)
- [FixedPtrBuffer64](/docs/api/shared/natives/fixedptrbuffer64)
- [FourVectors](/docs/api/shared/natives/fourvectors)
- [HullTrace](/docs/api/shared/natives/hulltrace)
- [CUtlLeanVector<T, I>.Iterator_t](/docs/api/shared/natives/cutlleanvector-2/iterator_t)
- [LineTrace](/docs/api/shared/natives/linetrace)
- [MeshTrace](/docs/api/shared/natives/meshtrace)
- [PointerTo<T>](/docs/api/shared/natives/pointerto-1) - Pointer to a native handle.
- [QAngle](/docs/api/shared/natives/qangle) - QAngle is a type that contains 3 float, representing an angle.
Degree Euler. Pitch, Yaw, Roll
- [Quaternion](/docs/api/shared/natives/quaternion) - Quaternion, basically 4 floats.
- [RadianEuler](/docs/api/shared/natives/radianeuler) - Radian Euler angle aligned to axis (NOT ROLL/PITCH/YAW)
- [Ray_t](/docs/api/shared/natives/ray_t)
- [RnCollisionAttr_t](/docs/api/shared/natives/rncollisionattr_t)
- [RnQueryShapeAttr_t](/docs/api/shared/natives/rnqueryshapeattr_t)
- [SphereTrace](/docs/api/shared/natives/spheretrace)
- [Vector](/docs/api/shared/natives/vector) - 3-Dimensional vector for source 2.

No more cssharp chaos.
- [Vector2D](/docs/api/shared/natives/vector2d) - 2-Dimensional vector for source 2.
- [Vector4D](/docs/api/shared/natives/vector4d)
- [fltx4](/docs/api/shared/natives/fltx4)
- [matrix3x4_t](/docs/api/shared/natives/matrix3x4_t)

- [IAllocableNativeHandle](/docs/api/shared/natives/iallocablenativehandle) - Allocated handle from swiftly c++ native side.
We are using native for now to allocate objects to make use of the hl2sdk and memoverride.\

TODO: Not sure if it's a good idea to have an interface for this, because ideally there shouldn't be any difference 
between this and the `INativeHandle` from users' perspective, as allocation and destruction should be for internal use only 
and handled within the core.
- [ICBitVec](/docs/api/shared/natives/icbitvec)
- [INativeHandle](/docs/api/shared/natives/inativehandle) - Native handle from swiftly c++ native side, either allocated or borrowed from game.
- [ISizedNativeHandle](/docs/api/shared/natives/isizednativehandle)

- [BufferMarkers](/docs/api/shared/natives/buffermarkers)
- [CollisionFunctionMask_t](/docs/api/shared/natives/collisionfunctionmask_t)
- [CollisionGroup](/docs/api/shared/natives/collisiongroup)
- [InteractionLayer](/docs/api/shared/natives/interactionlayer)
- [MapLoadType_t](/docs/api/shared/natives/maploadtype_t)
- [MaskTrace](/docs/api/shared/natives/masktrace)
- [NetChannelBufType_t](/docs/api/shared/natives/netchannelbuftype_t)
- [NodeColor_t](/docs/api/shared/natives/nodecolor_t)
- [RayType_t](/docs/api/shared/natives/raytype_t)
- [RnQueryObjectSet](/docs/api/shared/natives/rnqueryobjectset)
- [RoundEndReason](/docs/api/shared/natives/roundendreason)

- [CUtlRBTree<TValue, TKey>.LessFunc](/docs/api/shared/natives/cutlrbtree-2/lessfunc)

