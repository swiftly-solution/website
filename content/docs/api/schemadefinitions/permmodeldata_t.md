---
title: PermModelData_t
---

# Interface PermModelData_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface PermModelData_t : ISchemaClass<PermModelData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<PermModelData_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnimatedMaterialAttributes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L62)

```csharp
ref CUtlVector<PermModelDataAnimatedMaterialAttribute_t> AnimatedMaterialAttributes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PermModelDataAnimatedMaterialAttribute_t](/docs/api/schemadefinitions/permmodeldataanimatedmaterialattribute_t)>

### BodyGroupsHiddenInTools

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L58)

```csharp
ref CUtlVector<CUtlString> BodyGroupsHiddenInTools { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

### BoneFlexDrivers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L54)

```csharp
ref CUtlVector<ModelBoneFlexDriver_t> BoneFlexDrivers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ModelBoneFlexDriver_t](/docs/api/schemadefinitions/modelboneflexdriver_t)>

### DefaultMeshGroupMask

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L46)

```csharp
ref ulong DefaultMeshGroupMask { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### ExtParts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L22)

```csharp
ref CUtlVector<PermModelExtPart_t> ExtParts { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PermModelExtPart_t](/docs/api/schemadefinitions/permmodelextpart_t)>

### LodGroupSwitchDistances

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L32)

```csharp
ref CUtlVector<float> LodGroupSwitchDistances { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### MaterialGroups

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L44)

```csharp
ref CUtlVector<MaterialGroup_t> MaterialGroups { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MaterialGroup_t](/docs/api/schemadefinitions/materialgroup_t)>

### MeshGroups

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L42)

```csharp
ref CUtlVector<CUtlString> MeshGroups { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

### ModelConfigList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L56)

```csharp
CModelConfigList? ModelConfigList { get; }
```

#### Property Value

- [CModelConfigList](/docs/api/schemadefinitions/cmodelconfiglist)?

### ModelInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L20)

```csharp
PermModelInfo_t ModelInfo { get; }
```

#### Property Value

- [PermModelInfo_t](/docs/api/schemadefinitions/permmodelinfo_t)

### ModelSkeleton

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L48)

```csharp
ModelSkeletonData_t ModelSkeleton { get; }
```

#### Property Value

- [ModelSkeletonData_t](/docs/api/schemadefinitions/modelskeletondata_t)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RefAnimGroups

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L38)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCAnimationGroup>> RefAnimGroups { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCAnimationGroup](/docs/api/schemadefinitions/infoforresourcetypecanimationgroup)>>

### RefAnimIncludeModels

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L60)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCModel>> RefAnimIncludeModels { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCModel](/docs/api/schemadefinitions/infoforresourcetypecmodel)>>

### RefLODGroupMasks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L30)

```csharp
ref CUtlVector<byte> RefLODGroupMasks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### RefMeshGroupMasks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L26)

```csharp
ref CUtlVector<ulong> RefMeshGroupMasks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

### RefMeshes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L24)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCRenderMesh>> RefMeshes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCRenderMesh](/docs/api/schemadefinitions/infoforresourcetypecrendermesh)>>

### RefPhysGroupMasks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L28)

```csharp
ref CUtlVector<ulong> RefPhysGroupMasks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

### RefPhysicsData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L34)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCPhysAggregateData>> RefPhysicsData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCPhysAggregateData](/docs/api/schemadefinitions/infoforresourcetypecphysaggregatedata)>>

### RefPhysicsHitboxData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L36)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCPhysAggregateData>> RefPhysicsHitboxData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCPhysAggregateData](/docs/api/schemadefinitions/infoforresourcetypecphysaggregatedata)>>

### RefSequenceGroups

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L40)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCSequenceGroupData>> RefSequenceGroups { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCSequenceGroupData](/docs/api/schemadefinitions/infoforresourcetypecsequencegroupdata)>>

### RemappingTable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L50)

```csharp
ref CUtlVector<short> RemappingTable { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

### RemappingTableStarts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L52)

```csharp
ref CUtlVector<ushort> RemappingTableStarts { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

