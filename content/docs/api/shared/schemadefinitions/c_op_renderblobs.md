---
title: C_OP_RenderBlobs
---

```csharp
public interface C_OP_RenderBlobs : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_RenderBlobs>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **CubeWidth** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderBlobs.cs#L16)

```csharp
CParticleCollectionRendererFloatInput CubeWidth { get; }
```

- Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionrendererfloatinput)

### **CutoffRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderBlobs.cs#L18)

```csharp
CParticleCollectionRendererFloatInput CutoffRadius { get; }
```

- Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionrendererfloatinput)

### **IndexCountKb** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderBlobs.cs#L24)

```csharp
ref uint IndexCountKb { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **Material** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderBlobs.cs#L31)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> Material { get; }
```

- Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### **MaterialVars** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderBlobs.cs#L29)

```csharp
ref CUtlVector MaterialVars { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **RenderRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderBlobs.cs#L20)

```csharp
CParticleCollectionRendererFloatInput RenderRadius { get; }
```

- Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionrendererfloatinput)

### **ScaleCP** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderBlobs.cs#L26)

```csharp
ref int ScaleCP { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **VertexCountKb** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderBlobs.cs#L22)

```csharp
ref uint VertexCountKb { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

