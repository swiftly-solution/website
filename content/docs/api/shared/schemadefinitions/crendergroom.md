---
title: CRenderGroom
---

```csharp
public interface CRenderGroom : ISchemaClass<CRenderGroom>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AttachBoneIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderGroom.cs#L37)

```csharp
ref int AttachBoneIdx { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **AttachMeshDrawCallIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderGroom.cs#L41)

```csharp
ref int AttachMeshDrawCallIdx { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **AttachMeshIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderGroom.cs#L39)

```csharp
ref int AttachMeshIdx { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **EnableSimulation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderGroom.cs#L43)

```csharp
ref bool EnableSimulation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **GroomGroupID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderGroom.cs#L35)

```csharp
ref int GroomGroupID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **GuideHairCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderGroom.cs#L27)

```csharp
ref int GuideHairCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **HairCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderGroom.cs#L29)

```csharp
ref int HairCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **HairPositionOffsets** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderGroom.cs#L19)

```csharp
ref CUtlVector<uint> HairPositionOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### **Hairs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderGroom.cs#L17)

```csharp
ref CUtlVector Hairs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### **MaxSegmentsPerHairStrand** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderGroom.cs#L25)

```csharp
ref int MaxSegmentsPerHairStrand { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **SimParamsMat** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderGroom.cs#L21)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> SimParamsMat { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### **StrandSegmentCountHist** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderGroom.cs#L23)

```csharp
ref CUtlVector<int> StrandSegmentCountHist { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### **TotalSegmentCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderGroom.cs#L33)

```csharp
ref int TotalSegmentCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **TotalVertexCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderGroom.cs#L31)

```csharp
ref int TotalVertexCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

