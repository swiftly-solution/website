---
title: Natives
---

# Namespace SwiftlyS2.Shared.Natives

- [AllocableNativeHandle](/docs/api/natives/allocablenativehandle)
- [CBitVecOperations](/docs/api/natives/cbitvecoperations)
- [ManagedCUtlLeanVector<T, I>](/docs/api/natives/managedcutlleanvectortt)
- [ManagedCUtlMemory<T>](/docs/api/natives/managedcutlmemoryt)
- [ManagedCUtlVector<T>](/docs/api/natives/managedcutlvectort)

- [AttackerInfo_t](/docs/api/natives/attackerinfo_t)
- [BBox_t](/docs/api/natives/bbox_t)
- [CBitVec16384](/docs/api/natives/cbitvec16384)
- [CBitVec64](/docs/api/natives/cbitvec64)
- [CBufferString](/docs/api/natives/cbufferstring)
- [CCSMatch](/docs/api/natives/ccsmatch)
- [CCommand](/docs/api/natives/ccommand)
- [CGameTrace](/docs/api/natives/cgametrace)
- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)
- [CGlobalVars](/docs/api/natives/cglobalvars)
- [CHandle<T>](/docs/api/natives/chandlet)
- [CHitBoxTrace](/docs/api/natives/chitboxtrace)
- [CMoveData](/docs/api/natives/cmovedata)
- [CMoveDataBase](/docs/api/natives/cmovedatabase)
- [CNetworkVarChainer](/docs/api/natives/cnetworkvarchainer)
- [CNetworkedQuantizedFloat](/docs/api/natives/cnetworkedquantizedfloat)
- [CPhysSurfacePropertiesAudioTrace](/docs/api/natives/cphyssurfacepropertiesaudiotrace)
- [CPhysSurfacePropertiesPhysicsTrace](/docs/api/natives/cphyssurfacepropertiesphysicstrace)
- [CPhysSurfacePropertiesSoundNamesTrace](/docs/api/natives/cphyssurfacepropertiessoundnamestrace)
- [CPhysSurfacePropertiesTrace](/docs/api/natives/cphyssurfacepropertiestrace)
- [CRecipientFilter](/docs/api/natives/crecipientfilter)
- [CString](/docs/api/natives/cstring) - Wrapper class for native char*.
- [CStrongHandle<T>](/docs/api/natives/cstronghandlet) - An partial implementation of the CStrongHandle struct.
- [CTakeDamageInfo](/docs/api/natives/ctakedamageinfo)
- [CTakeDamageResult](/docs/api/natives/ctakedamageresult)
- [CTraceFilter](/docs/api/natives/ctracefilter)
- [CTransform](/docs/api/natives/ctransform)
- [CUtlBinaryBlock](/docs/api/natives/cutlbinaryblock)
- [CUtlLeanVector<T, I>](/docs/api/natives/cutlleanvectortt)
- [CUtlMap<TKey, TValue, TIndex>](/docs/api/natives/cutlmapttt)
- [CUtlMapTreeNode<TKey, TValue>](/docs/api/natives/cutlmaptreenodett)
- [CUtlMemory<T>](/docs/api/natives/cutlmemoryt)
- [CUtlMemoryFixedGrowable<T, TBuffer>](/docs/api/natives/cutlmemoryfixedgrowablett)
- [CUtlRBTree<TValue, TKey>](/docs/api/natives/cutlrbtreett)
- [CUtlRBTreeLinks<TKey>](/docs/api/natives/cutlrbtreelinkst)
- [CUtlRBTreeNode<TKey, TValue>](/docs/api/natives/cutlrbtreenodett)
- [CUtlString](/docs/api/natives/cutlstring)
- [CUtlStringToken](/docs/api/natives/cutlstringtoken)
- [CUtlSymbolLarge](/docs/api/natives/cutlsymbollarge)
- [CUtlVector<T>](/docs/api/natives/cutlvectort)
- [CUtlVectorFixedGrowable<T, TBuffer>](/docs/api/natives/cutlvectorfixedgrowablett)
- [CVariant](/docs/api/natives/cvariant)
- [CVariantData](/docs/api/natives/cvariantdata)
- [CapsuleTrace](/docs/api/natives/capsuletrace)
- [ChangeAccessorFieldPathIndex_t](/docs/api/natives/changeaccessorfieldpathindex_t)
- [Color](/docs/api/natives/color)
- [FixedCharBuffer512](/docs/api/natives/fixedcharbuffer512)
- [FixedPtrBuffer64](/docs/api/natives/fixedptrbuffer64)
- [FourVectors](/docs/api/natives/fourvectors)
- [HullTrace](/docs/api/natives/hulltrace)
- [CUtlLeanVector<T, I>.Iterator_t](/docs/api/natives/cutlleanvector-2/iterator_t)
- [LineTrace](/docs/api/natives/linetrace)
- [MeshTrace](/docs/api/natives/meshtrace)
- [PointerTo<T>](/docs/api/natives/pointertot) - Pointer to a native handle.
- [QAngle](/docs/api/natives/qangle) - QAngle is a type that contains 3 float, representing an angle.
Degree Euler. Pitch, Yaw, Roll
- [Quaternion](/docs/api/natives/quaternion) - Quaternion, basically 4 floats.
- [RadianEuler](/docs/api/natives/radianeuler) - Radian Euler angle aligned to axis (NOT ROLL/PITCH/YAW)
- [Ray_t](/docs/api/natives/ray_t)
- [ResourceHandle](/docs/api/natives/resourcehandle)
- [ResourceNameInfo](/docs/api/natives/resourcenameinfo)
- [RnCollisionAttr_t](/docs/api/natives/rncollisionattr_t)
- [RnQueryShapeAttr_t](/docs/api/natives/rnqueryshapeattr_t)
- [SphereTrace](/docs/api/natives/spheretrace)
- [SubtickMove](/docs/api/natives/subtickmove)
- [TouchListT](/docs/api/natives/touchlistt)
- [Vector](/docs/api/natives/vector) - 3-Dimensional vector for source 2.

No more cssharp chaos.
- [Vector2D](/docs/api/natives/vector2d) - 2-Dimensional vector for source 2.
- [Vector4D](/docs/api/natives/vector4d)
- [fltx4](/docs/api/natives/fltx4)
- [matrix3x4_t](/docs/api/natives/matrix3x4_t)

- [IAllocableNativeHandle](/docs/api/natives/iallocablenativehandle) - Allocated handle from swiftly c++ native side.
We are using native for now to allocate objects to make use of the hl2sdk and memoverride.\

TODO: Not sure if it's a good idea to have an interface for this, because ideally there shouldn't be any difference 
between this and the `INativeHandle` from users' perspective, as allocation and destruction should be for internal use only 
and handled within the core.
- [ICBitVec](/docs/api/natives/icbitvec)
- [INativeHandle](/docs/api/natives/inativehandle) - Native handle from swiftly c++ native side, either allocated or borrowed from game.
- [ISizedNativeHandle](/docs/api/natives/isizednativehandle)

- [BufferMarkers](/docs/api/natives/buffermarkers)
- [CollisionFunctionMask_t](/docs/api/natives/collisionfunctionmask_t)
- [CollisionGroup](/docs/api/natives/collisiongroup)
- [InteractionLayer](/docs/api/natives/interactionlayer)
- [MapLoadType_t](/docs/api/natives/maploadtype_t)
- [MaskTrace](/docs/api/natives/masktrace)
- [NameMatchType](/docs/api/natives/namematchtype)
- [NetChannelBufType_t](/docs/api/natives/netchannelbuftype_t)
- [NodeColor_t](/docs/api/natives/nodecolor_t)
- [RayType_t](/docs/api/natives/raytype_t)
- [ResourceBindingFlags_t](/docs/api/natives/resourcebindingflags_t)
- [RnQueryObjectSet](/docs/api/natives/rnqueryobjectset)
- [RoundEndReason](/docs/api/natives/roundendreason)
- [VariantFieldType](/docs/api/natives/variantfieldtype)

- [CUtlRBTree<TValue, TKey>.LessFunc](/docs/api/natives/cutlrbtree-2/lessfunc)

