---
title: C_OP_RenderAsModels
---

# Interface C_OP_RenderAsModels

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_RenderAsModels : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_RenderAsModels>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionRenderer](/docs/api/schemadefinitions/cparticlefunctionrenderer)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionRenderer>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_RenderAsModels>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### FitToModelSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L22)

```csharp
ref bool FitToModelSize { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ModelList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L18)

```csharp
ref CUtlVector<ModelReference_t> ModelList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ModelReference_t](/docs/api/schemadefinitions/modelreference_t)>

### ModelScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L20)

```csharp
ref float ModelScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NonUniformScaling

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L24)

```csharp
ref bool NonUniformScaling { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SizeCullBloat

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L32)

```csharp
ref int SizeCullBloat { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### XAxisScalingAttribute

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L26)

```csharp
ParticleAttributeIndex_t XAxisScalingAttribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/schemadefinitions/particleattributeindex_t)

### YAxisScalingAttribute

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L28)

```csharp
ParticleAttributeIndex_t YAxisScalingAttribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/schemadefinitions/particleattributeindex_t)

### ZAxisScalingAttribute

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L30)

```csharp
ParticleAttributeIndex_t ZAxisScalingAttribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/schemadefinitions/particleattributeindex_t)

