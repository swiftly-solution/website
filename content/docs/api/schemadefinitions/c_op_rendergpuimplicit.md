---
title: C_OP_RenderGpuImplicit
---

# Interface C_OP_RenderGpuImplicit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderGpuImplicit.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_RenderGpuImplicit : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_RenderGpuImplicit>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionRenderer](/docs/api/schemadefinitions/cparticlefunctionrenderer)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionRenderer>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_RenderGpuImplicit>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### GridSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderGpuImplicit.cs#L24)

```csharp
CParticleCollectionRendererFloatInput GridSize { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/schemadefinitions/cparticlecollectionrendererfloatinput)

### IndexCountKb

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderGpuImplicit.cs#L22)

```csharp
ref uint IndexCountKb { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### IsosurfaceThreshold

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderGpuImplicit.cs#L28)

```csharp
CParticleCollectionRendererFloatInput IsosurfaceThreshold { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/schemadefinitions/cparticlecollectionrendererfloatinput)

### Material

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderGpuImplicit.cs#L32)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> Material { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIMaterial2](/docs/api/schemadefinitions/infoforresourcetypeimaterial2)>

### RadiusScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderGpuImplicit.cs#L26)

```csharp
CParticleCollectionRendererFloatInput RadiusScale { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/schemadefinitions/cparticlecollectionrendererfloatinput)

### ScaleCP

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderGpuImplicit.cs#L30)

```csharp
ref int ScaleCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UsePerParticleRadius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderGpuImplicit.cs#L18)

```csharp
ref bool UsePerParticleRadius { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VertexCountKb

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderGpuImplicit.cs#L20)

```csharp
ref uint VertexCountKb { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

