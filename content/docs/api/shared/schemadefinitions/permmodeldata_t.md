---
title: PermModelData_t
---

```csharp
public interface PermModelData_t : ISchemaClass<PermModelData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AnimatedMaterialAttributes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L64)

```csharp
ref CUtlVector AnimatedMaterialAttributes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### **BodyGroupsHiddenInTools** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L59)

```csharp
ref CUtlVector<CUtlString> BodyGroupsHiddenInTools { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### **BoneFlexDrivers** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L55)

```csharp
ref CUtlVector BoneFlexDrivers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### **DefaultMeshGroupMask** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L46)

```csharp
ref ulong DefaultMeshGroupMask { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **ExtParts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L21)

```csharp
ref CUtlVector ExtParts { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### **LodGroupSwitchDistances** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L31)

```csharp
ref CUtlVector<float> LodGroupSwitchDistances { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### **MaterialGroups** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L44)

```csharp
ref CUtlVector MaterialGroups { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### **MeshGroups** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L41)

```csharp
ref CUtlVector<CUtlString> MeshGroups { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### **ModelConfigList** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L57)

```csharp
CModelConfigList? ModelConfigList { get; }
```

#### Property Value

- [CModelConfigList](/docs/api/shared/schemadefinitions/cmodelconfiglist)?

### **ModelInfo** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L18)

```csharp
PermModelInfo_t ModelInfo { get; }
```

#### Property Value

- [PermModelInfo_t](/docs/api/shared/schemadefinitions/permmodelinfo_t)

### **ModelSkeleton** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L48)

```csharp
ModelSkeletonData_t ModelSkeleton { get; }
```

#### Property Value

- [ModelSkeletonData_t](/docs/api/shared/schemadefinitions/modelskeletondata_t)

### **Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L16)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **RefAnimGroups** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L37)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCAnimationGroup>> RefAnimGroups { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCAnimationGroup](/docs/api/shared/schemadefinitions/infoforresourcetypecanimationgroup)>>

### **RefAnimIncludeModels** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L61)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCModel>> RefAnimIncludeModels { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCModel](/docs/api/shared/schemadefinitions/infoforresourcetypecmodel)>>

### **RefLODGroupMasks** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L29)

```csharp
ref CUtlVector<byte> RefLODGroupMasks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### **RefMeshGroupMasks** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L25)

```csharp
ref CUtlVector<ulong> RefMeshGroupMasks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

### **RefMeshes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L23)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCRenderMesh>> RefMeshes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCRenderMesh](/docs/api/shared/schemadefinitions/infoforresourcetypecrendermesh)>>

### **RefPhysGroupMasks** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L27)

```csharp
ref CUtlVector<ulong> RefPhysGroupMasks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

### **RefPhysicsData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L33)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCPhysAggregateData>> RefPhysicsData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCPhysAggregateData](/docs/api/shared/schemadefinitions/infoforresourcetypecphysaggregatedata)>>

### **RefPhysicsHitboxData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L35)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCPhysAggregateData>> RefPhysicsHitboxData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCPhysAggregateData](/docs/api/shared/schemadefinitions/infoforresourcetypecphysaggregatedata)>>

### **RefSequenceGroups** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L39)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCSequenceGroupData>> RefSequenceGroups { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCSequenceGroupData](/docs/api/shared/schemadefinitions/infoforresourcetypecsequencegroupdata)>>

### **RemappingTable** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L50)

```csharp
ref CUtlVector<short> RemappingTable { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

### **RemappingTableStarts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermModelData_t.cs#L52)

```csharp
ref CUtlVector<ushort> RemappingTableStarts { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

